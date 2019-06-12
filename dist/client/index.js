/* eslint-env browser */
import startIsolator from './isolator';

let hasSetup = false;
function configure(runtimes = []) {
  if (hasSetup) {
    throw new Error('Chromatic already configured.');
  }
  hasSetup = true;

  if (runtimes === []) {
    throw new Error(
      'Chromatic must be configured with at least one runtime. http://docs.chromaticqa.com/runtime-api'
    );
  }

  // If we are rendered in an iframe, (by ourself), then we need to clear
  // the screen right away, rather than waiting for a spec
  const isIsolator = document.location.hash.match('__chromatic_isolator__');

  startIsolator({
    runtimes: [].concat(runtimes), // allow passing a single runtime
    clearScreen: isIsolator,
  });
}

export default configure;
