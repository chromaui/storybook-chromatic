export default function log(msg, { noPrefix = false, level = 'log' } = {}) {
  if (process.env.DISABLE_LOGGING !== 'true') {
    if (noPrefix) {
      // eslint-disable-next-line no-console
      console[level](msg);
    } else {
      // eslint-disable-next-line no-console
      console[level](`Chromatic Tester: ${msg}`);
    }
  }
}
