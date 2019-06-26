/* eslint-env browser */
export default function configure({ runtimes }) {
  const runtimeRenderers = {};
  runtimes.forEach(r => {
    runtimeRenderers[r.runtime] = r.renderSpec;
  });

  function runtimeSpecs() {
    return runtimes
      .map(({ runtime, specs }) => specs().map(spec => ({ runtime, ...spec })))
      .reduce((a, b) => [...a, ...b], []);
  }

  function renderSpecToDom(spec) {
    const parsedSpec = {
      ...spec,
      input: typeof spec.input === 'string' ? JSON.parse(spec.input) : spec.input,
    };

    if (spec.runtime) {
      const renderer = runtimeRenderers[spec.runtime];
      if (!renderer) {
        throw new Error(
          `Didn't find a renderer for runtime '${
            spec.runtime
          }' -- are you sure you added it in your client configuration?`
        );
      }
      return renderer(parsedSpec);
    }
    throw new Error('No runtime passed for spec', spec);
  }

  // API to be used by test script to gather runtime spec definitions
  window.__chromaticRuntimeSpecs__ = runtimeSpecs;

  // API to be used by capture worker to render a spec
  window.__renderChromaticSpec__ = renderSpecToDom;
}
