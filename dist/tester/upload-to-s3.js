import setupDebug from 'debug';
import { readdirSync, statSync, createReadStream } from 'fs';
import fetch from 'isomorphic-fetch';
import { join } from 'path';
import { URL } from 'url';

const debug = setupDebug('storybook-chromatic:tester:upload');

const TesterGetUploadUrlsMutation = `
  mutation TesterGetUploadUrlsMutation($paths: [String!]!) {
    getUploadUrls(paths: $paths) {
      domain
      urls {
        path
        url
        contentType
      }
    }
  }
`;

// Get all paths in rootDir, starting at dirname.
// We don't want the paths to include rootDir -- so if rootDir = storybook-static,
// paths will be like iframe.html rather than storybook-static/iframe.html
function getPathsInDir(rootDir, dirname = '.') {
  return readdirSync(join(rootDir, dirname))
    .map(p => join(dirname, p))
    .map(pathname =>
      statSync(join(rootDir, pathname)).isDirectory()
        ? getPathsInDir(rootDir, pathname)
        : [pathname]
    )
    .reduce((a, b) => [...a, ...b], []); // flatten
}

export default async function uploadToS3({ client, dirname }) {
  debug(`uploading '${dirname}' to s3`);

  const paths = getPathsInDir(dirname);

  const {
    getUploadUrls: { domain, urls },
  } = await client.runQuery(TesterGetUploadUrlsMutation, {
    paths,
  });

  const uploads = [];
  urls.forEach(({ path, url, contentType }) => {
    const pathWithDirname = join(dirname, path);
    debug(`uploading '${pathWithDirname}' to '${url}' with content type '${contentType}'`);

    uploads.push(
      (async () => {
        const res = await fetch(url, {
          method: 'PUT',
          body: createReadStream(pathWithDirname),
          headers: {
            'content-type': contentType,
            'content-length': statSync(pathWithDirname).size,
          },
        });

        if (!res.ok) {
          debug(`Uploading '${path}' failed: %O`, res);
          throw new Error(`Failed to upload ${path}`);
        }
      })()
    );
  });

  await Promise.all(uploads);

  // NOTE: storybook-specific
  return new URL('/iframe.html', domain).toString();
}
