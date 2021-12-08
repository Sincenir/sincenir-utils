import path from 'path'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'


const deps = Object.keys(pkg.dependencies || {})

export default [
  {
    // eslint-disable-next-line no-undef
    input: path.resolve(__dirname, './src/main.ts'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js'
    },
    // 调用插件
    plugins: [
      terser(),
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true
          },
          include: ['src/**/*'],
          exclude: ['node_modules']
        },
        abortOnError: false
      })
    ],
    external(id) {
      return deps.some((k) => new RegExp('^' + k).test(id))
    }
  }
]
