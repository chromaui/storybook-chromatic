// Figure out the Storybook version and view layer

const viewLayers = [
  'react',
  'angular',
  'vue',
  'polymer',
  'mithril',
  'marko',
  'html',
  'svelte',
  'riot',
  'ember',
];

// This hack is simply to stop webpack from trying to do something with this require
// This code is bundled by webpack but runs in node
// eslint-disable-next-line no-eval
const require2 = eval('require');

export default function getStorybookInfo() {
  // Allow setting Storybook version via CHROMATIC_STORYBOOK_VERSION='react@4.0-alpha.8' for unusual
  // cases (such as our permacache examples)
  const { CHROMATIC_STORYBOOK_VERSION } = process.env;
  if (CHROMATIC_STORYBOOK_VERSION) {
    const [viewLayer, storybookVersion] = CHROMATIC_STORYBOOK_VERSION.split('@');
    if (!viewLayer || !storybookVersion) {
      throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');
    }
    return { viewLayer, storybookVersion };
  }

  while (viewLayers.length > 0) {
    const viewLayer = viewLayers.shift();
    try {
      const { version: storybookVersion } = require2(`@storybook/${viewLayer}/package.json`);
      return { viewLayer, storybookVersion };
    } catch (err) {
      // This is OK
    }
  }

  throw new Error(
    `Couldn't discover Storybook version. Try upgrading the storybook-chromatic package?`
  );
}
