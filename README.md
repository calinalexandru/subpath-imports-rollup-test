# subpath-imports-rollup-test

Testing rollup config with subpath imports

```bash
npm install
npm run build
```

Inspect `cjs/index.js` and see that we have browser import instead of default (node) import

```js
/* eslint-env browser */

const isBlinkBasedBrowser = /\b(Chrome|Chromium)\//.test(navigator.userAgent);
```
