/* eslint-env browser */

let hasSetup = false;
function configure({ renderSpec, specs }) {
  if (hasSetup) {
    throw new Error('Chromatic already configured.');
  }
  hasSetup = true;

  // API to be used by test script to gather runtime spec definitions
  window.__chromaticRuntimeSpecs__ = specs;

  // API to be used by capture worker to render a spec
  window.__renderChromaticSpec__ = renderSpec;
}

export default configure;
