/* eslint-disable no-console, class-methods-use-this, no-param-reassign */
import { JSDOM, VirtualConsole } from 'jsdom';

// Add canvas mock based on this comment: https://github.com/jsdom/jsdom/issues/1782#issuecomment-337656878
function mockCanvas(window) {
  window.HTMLCanvasElement.prototype.getContext = () => ({
    fillRect: () => ({}),
    clearRect: () => ({}),
    getImageData: (x, y, w, h) => ({ data: new Array(w * h * 4) }),
    putImageData: () => ({}),
    createImageData: () => [],
    setTransform: () => ({}),
    drawImage: () => ({}),
    save: () => ({}),
    fillText: () => ({}),
    restore: () => ({}),
    beginPath: () => ({}),
    moveTo: () => ({}),
    lineTo: () => ({}),
    closePath: () => ({}),
    stroke: () => ({}),
    translate: () => ({}),
    scale: () => ({}),
    rotate: () => ({}),
    arc: () => ({}),
    fill: () => ({}),
    measureText: () => ({ width: 0 }),
    transform: () => ({}),
    rect: () => ({}),
    clip: () => ({}),
  });

  window.HTMLCanvasElement.prototype.toDataURL = () => '';
}

function addShimsToJSDOM(dom) {
  Object.defineProperty(dom.window, 'matchMedia', {
    value: () => ({
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    }),
    writable: true,
  });

  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key];
    }

    removeItem(key) {
      delete this.store[key];
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    clear() {
      this.store = {};
    }
  }
  Object.defineProperty(dom.window, 'localStorage', {
    value: new LocalStorageMock(),
    writable: true,
  });

  class WorkerMock {
    addEventListener() {}

    removeEventLister() {}

    postMessage() {}

    terminate() {}
  }
  Object.defineProperty(dom.window, 'Worker', {
    value: WorkerMock,
    writable: true,
  });

  Object.defineProperty(dom.window, 'crypto', {
    value: {
      getRandomValues: () => 0,
    },
    writable: true,
  });

  Object.defineProperty(dom.window.navigator, 'mimeTypes', {
    value: () => [],
    writable: true,
  });

  Object.defineProperty(dom.window.URL, 'createObjectURL', { value: () => {} });
  Object.defineProperty(dom.window.URL, 'revokeObjectURL', { value: () => {} });

  // We have to do this in this screwy way because Angular does some monkey patching
  // expects an non-es2015 class here.
  function MutationObserverMock() {}
  MutationObserverMock.prototype = {
    observe() {
      return [];
    },
    takeRecords() {
      return [];
    },
    disconnect() {},
  };
  Object.defineProperty(dom.window, 'MutationObserver', {
    value: MutationObserverMock,
    writable: true,
  });

  class IntlMock {
    static supportedLocalesOf() {
      return [];
    }

    resolvedOptions() {
      return {};
    }
  }
  class IntlFormatMock extends IntlMock {
    format() {
      return '';
    }

    formatToParts() {
      return [];
    }
  }
  class IntlCollatorMock extends IntlMock {
    compare() {
      return 0;
    }
  }
  class IntlPluralRulesMock extends IntlMock {
    select() {
      return '';
    }
  }
  class IntlDateTimeFormatMock extends IntlFormatMock {}
  class IntlListFormatMock extends IntlFormatMock {}
  class IntlNumberFormatMock extends IntlFormatMock {}
  class IntlRelativeTimeFormatMock extends IntlFormatMock {}
  Object.defineProperty(dom.window, 'Intl', {
    value: {
      Collator: IntlCollatorMock,
      DateTimeFormat: IntlDateTimeFormatMock,
      ListFormat: IntlListFormatMock,
      NumberFormat: IntlNumberFormatMock,
      PluralRules: IntlPluralRulesMock,
      RelativeTimeFormat: IntlRelativeTimeFormatMock,
    },
    writable: true,
  });

  const customElements = {};
  Object.defineProperty(dom.window, 'customElements', {
    value: {
      define: (name, constructor) => {
        customElements[name] = customElements[name] || { resolvers: [] };
        customElements[name].constructor = constructor;
        customElements[name].resolvers.forEach(resolve => resolve());
      },
      get: name => customElements[name] && customElements[name].constructor,
      upgrade: () => {},
      whenDefined: name =>
        new Promise(resolve => {
          customElements[name] = customElements[name] || { resolvers: [] };
          if (customElements[name].constructor) resolve();
          else customElements[name].resolvers.push(resolve);
        }),
    },
    writable: false,
  });

  mockCanvas(dom.window);
}

export default async function getRuntimeSpecs(
  url,
  { verbose = false, names: { product, packageName } } = {}
) {
  const logs = [];
  const virtualConsole = new VirtualConsole();
  Object.keys(console).forEach(logType => {
    virtualConsole.on(logType, log => logs.push({ logType, log }));
  });
  virtualConsole.on('jsdomError', log => logs.push({ logType: 'error', log }));

  if (verbose) {
    virtualConsole.sendTo(console);
  }

  const dom = await JSDOM.fromURL(url, {
    userAgent: 'Chromatic',
    // We need to execute the scripts on the page
    runScripts: 'dangerously',
    // We need to load scripts that are loaded via script tags
    resources: 'usable',
    // Send console.logs -> /dev/null (so to speak)
    virtualConsole,
    // Add a requestAnimationFrame polyfill, react@16 warns about it
    pretendToBeVisual: true,
  });

  // NOTE: this line runs immediately after the HTML for the page has been loaded
  // it's not possible that any external script tags have been executed.
  // It is possible that they have a <script> tag that need these shims, but
  // I highly doubt it. If we run into this we can always use JSDOM's old API
  // to inject our own scripts at 'create' time
  addShimsToJSDOM(dom);

  return new Promise((resolve, reject) =>
    dom.window.document.addEventListener('DOMContentLoaded', () => {
      try {
        const separator = '=========================';

        if (!dom.window.__chromaticRuntimeSpecs__) {
          console.error(
            `Didn't find ${product} addon in your Storybook.
        
Did you add it with \`import '${packageName}'\` in your \`.storybook/config.js\`?

Read more: http://docs.chromaticqa.com`
          );

          if (!verbose && logs.length) {
            console.error(`Your app's output:\n${separator}\n`);
            logs.forEach(({ logType, log }) => console[logType](log));
            console.error(`\n${separator}\n`);
          }
          throw new Error(`Didn't find 'window.__chromaticRuntimeSpecs__' at ${url}.`);
        }

        // If their app logged something to console.error, it's probably, but
        // not definitely an issue. See https://github.com/hichroma/chromatic/issues/757
        if (logs.find(log => log.logType === 'error')) {
          console.error(`\nYour app logged the following to the error console:\n${separator}`);
          logs
            .filter(log => log.logType === 'error')
            .forEach(({ logType, log }) => console[logType](log));
          console.error(
            `\n${separator}\nThis may lead to some stories not working right or getting detected by Chromatic` +
              `\nWe suggest you fix the errors, but we will continue anyway..\n`
          );
        }

        const specs = dom.window.__chromaticRuntimeSpecs__();
        dom.window.close();
        resolve(specs);
      } catch (err) {
        dom.window.close();
        reject(err);
      }
    })
  );
}
