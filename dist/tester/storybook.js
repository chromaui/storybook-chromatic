// This hack is simply to stop webpack from trying to do something with this require
// This code is bundled by webpack but runs in node
// eslint-disable-next-line no-eval
const require2 = eval('require');

const findPackageVersion = packageName => {
  try {
    const { version } = require2(`${packageName}/package.json`);
    return version;
  } catch (e) {
    return undefined;
  }
};

const findInstalledAddons = ({ supportedAddons, viewLayer, storybookVersion }) =>
  supportedAddons
    .map(name => {
      const packageName = `@storybook/addon-${name}`;
      const packageVersion = findPackageVersion(packageName);
      if (!packageVersion) return undefined;
      if (packageVersion !== storybookVersion) {
        const addonPackage = `${packageName}@${packageVersion}`;
        const storybookPackage = `@storybook/${viewLayer}@${storybookVersion}`;
        // eslint-disable-next-line no-console
        console.warn(`Version number for ${addonPackage} does not match ${storybookPackage}`);
      }
      return { name, packageName, packageVersion };
    })
    .filter(Boolean);

// Figure out the storybook version and view layer
export default function getStorybookInfo() {
  // View layers supported by Chroma(tic). Ordered by popularity to optimize number of lookups.
  // @see https://github.com/storybookjs/storybook/tree/next/app
  const viewLayers = [
    'react',
    'vue',
    'angular',
    'html',
    'polymer',
    'ember',
    'marko',
    'mithril',
    'riot',
    'svelte',
    'preact',
    'rax',
  ];

  // Official addons that might be installed.
  // @see https://github.com/storybookjs/storybook/tree/next/addons
  const supportedAddons = [
    'a11y',
    'actions',
    'backgrounds',
    'centered',
    'contexts',
    'cssresources',
    'design-assets',
    'docs',
    'events',
    'google-analytics',
    'graphql',
    'info',
    'jest',
    'knobs',
    'links',
    'notes',
    'ondevice-actions',
    'ondevice-backgrounds',
    'ondevice-knobs',
    'ondevice-notes',
    'options',
    'queryparams',
    'storyshots',
    'storysource',
    'viewport',
  ];

  let viewLayer;
  let storybookVersion;

  // Allow setting storybook version via CHROMATIC_STORYBOOK_VERSION='react@4.0-alpha.8' for unusual
  // cases (such as our permacache examples)
  const { CHROMATIC_STORYBOOK_VERSION } = process.env;
  if (CHROMATIC_STORYBOOK_VERSION) {
    [viewLayer, storybookVersion] = CHROMATIC_STORYBOOK_VERSION.split('@');
    if (!storybookVersion || !viewLayer) {
      throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');
    }
    if (!viewLayers.includes(viewLayer)) {
      throw new Error(
        `'${viewLayer}' is not a supported view layer. Use one of: ${viewLayers.join(', ')}`
      );
    }
    return {
      storybookVersion,
      viewLayer,
      addons: findInstalledAddons({ supportedAddons, viewLayer, storybookVersion }),
    };
  }

  while (viewLayers.length > 0) {
    viewLayer = viewLayers.shift();
    storybookVersion = findPackageVersion(`@storybook/${viewLayer}`);
    if (storybookVersion) {
      return {
        storybookVersion,
        viewLayer,
        addons: findInstalledAddons({ supportedAddons, viewLayer, storybookVersion }),
      };
    }
  }

  throw new Error(
    `Couldn't discover Storybook version. Try upgrading the storybook-chromatic package.`
  );
}
