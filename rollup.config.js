import { defineConfig } from 'rollup'

let ref

export default defineConfig({
  input: 'src/index',
  output: {
    format: 'esm',
  },
  plugins: [
    {
      name: 'my-plugin',
      transform() {
        ref = this.emitFile({
          type: 'chunk',
          name: `something.mjs`,
          id: './src/test.js',
        })
      },
      generateBundle() {
        console.log(this.getFileName(ref))
      },
    },
  ],
})
