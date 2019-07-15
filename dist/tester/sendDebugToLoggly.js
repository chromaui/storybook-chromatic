import debug from 'debug';
import loggly from 'node-loggly-bulk';
import { format } from 'util';
import strip from 'strip-color';

import { LOGGLY_CUSTOMER_TOKEN } from '../assets/environment';

export default function sendDebugToLoggly({ sessionId }) {
  if (process.env.DISABLE_LOGGING) {
    return;
  }

  const client = loggly.createClient({
    token: LOGGLY_CUSTOMER_TOKEN,
    subdomain: 'hichroma',
    tags: ['storybook-chromatic'],
    json: true,
  });

  // Is the user debugging already? If so they will get what we want to debug :shrug:
  const isDebugging = !!process.env.DEBUG;

  debug.enable('storybook-chromatic:*,localtunnel:*');

  debug.log = (...args) => {
    const msg = format(...args);
    client.log({ sessionId, msg: strip(msg) });

    if (isDebugging) {
      process.stderr.write(`${msg}\n`);
    }
  };
}
