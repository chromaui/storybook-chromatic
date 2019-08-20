import setupDebug from 'debug';
import { readdirSync, statSync, createReadStream } from 'fs';
import { join } from 'path';
import { URL } from 'url';
import progress from 'progress-stream';
import ProgressBar from 'progress';

import HTTPClient from '../../../../lib/util/HTTPClient';

const RETRIES = 5;
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
    .map(pathname => {
      const stats = statSync(join(rootDir, pathname));
      if (stats.isDirectory()) {
        return getPathsInDir(rootDir, pathname);
      }
      return [{ pathname, contentLength: stats.size }];
    })
    .reduce((a, b) => [...a, ...b], []); // flatten
}

export default async function uploadToS3({ client, dirname }) {
  debug(`uploading '${dirname}' to s3`);

  const pathAndLengths = getPathsInDir(dirname);

  const {
    getUploadUrls: { domain, urls },
  } = await client.runQuery(TesterGetUploadUrlsMutation, {
    paths: pathAndLengths.map(({ pathname }) => pathname),
  });

  const total = pathAndLengths.map(({ contentLength }) => contentLength).reduce((a, b) => a + b, 0);
  const bar = new ProgressBar('uploading [:bar] :rate/bps :percent :etas', { width: 20, total });

  const uploads = [];
  urls.forEach(({ path, url, contentType }) => {
    const pathWithDirname = join(dirname, path);
    debug(`uploading '${pathWithDirname}' to '${url}' with content type '${contentType}'`);

    const progressStream = progress();
    progressStream.on('progress', ({ delta }) => bar.tick(delta));
    const { contentLength } = pathAndLengths.find(({ pathname }) => pathname === path);
    uploads.push(
      (async () => {
        const res = await HTTPClient.fetch(
          url,
          {
            method: 'PUT',
            body: createReadStream(pathWithDirname).pipe(progressStream),
            headers: {
              'content-type': contentType,
              'content-length': contentLength,
            },
          },
          { retries: RETRIES }
        );

        if (!res.ok) {
          debug(`Uploading '${path}' failed: %O`, res);
          throw new Error(`Failed to upload ${path}`);
        }
      })()
    );
  });

  await Promise.all(uploads);

  // NOTE: Storybook-specific
  return new URL('/iframe.html', domain).toString();
}
