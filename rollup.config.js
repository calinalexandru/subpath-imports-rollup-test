import resolve from '@rollup/plugin-node-resolve';
// import alias from '@rollup/plugin-alias';
// import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
// import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'index.js',
    output: {
      file: 'cjs/index.js',
      format: 'cjs',
    },
    plugins: [
      resolve({
        browser: false,
      }),
      // alias({
      //   entries: [
      //     {
      //       find: '#supports-color',
      //       replacement: './source/vendor/supports-color/index.js',
      //     },
      //   ],
      // }),
    ],
  },
];
