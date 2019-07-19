import localtunnel from '@chromaui/localtunnel';
import setupDebug from 'debug';
import denodeify from 'denodeify';

const debug = setupDebug('storybook-chromatic:tester:tunnel');

export default async function openTunnel({ tunnelUrl, port, https }) {
  if (!port) {
    throw new Error('Need to pass a port into `openTunnel`');
  }

  const tunnel = await denodeify(localtunnel)(port, {
    local_host: 'localhost',
    host: tunnelUrl,
    https: !!https,
    cert: https && https.cert,
    key: https && https.key,
    ca: https && https.ca,
  });

  // The ones that are commented out are debugged already by our localtunnel fork
  tunnel.on('url', url => debug(`Got tunnel url: %s`, url));
  // tunnel.on('error', error => debug(`Got tunnel error: %O`, error));
  tunnel.on('request', request => debug(`Got request: %O`, request));
  // tunnel.tunnel_cluster.on('open', socket => debug(`Got tunnel cluster open`));
  // tunnel.tunnel_cluster.on('request', request => debug(`Got tunnel cluster request: %O`, request));
  tunnel.tunnel_cluster.on('error', error => debug(`Got tunnel cluster error: %O`, error));
  // tunnel.tunnel_cluster.on('dead', () => debug(`Got tunnel cluster dead`));

  return tunnel;
}
