import vue from 'rollup-plugin-vue';

export default [
  {
    input: './src/index.js',
    output: {
      format: 'esm',
      file: 'dist/vue-monaco-editor.esm.js'
    },
    plugins: [
      vue()
    ]
  },
  {
    input: './src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/vue-monaco-editor.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } })
    ]
  }
]