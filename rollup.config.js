import serve from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import { main } from './package.json'
import { frontendServerPort, buildInputFilePath, build } from './config.json'

const isDev = process.env.BUILD === build

export default {
    input: buildInputFilePath,
    output: {
        file: main,
        format: 'cjs',
    },
    plugins: [
        resolve({
            preferBuiltins: true,
        }),
        commonjs({
            include: [
                'node_modules/**',
                '../arsnl/dist/index.js',
            ],
            namedExports: {
                'node_modules/lodash/lodash.js': [
                    'forEach',
                    'get',
                    'set',
                    'range',
                    'some',
                    'merge',
                    'includes',
                    'isEmpty',
                    'isString',
                    'reject',
                ]
            }
        }),
        json({
            exclude: [ 'node_modules/**' ],
            preferConst: true, // Default: false
            indent: '    ',
        }),
        svg(),
        postcss(),
        isDev && livereload('dist'),
        isDev && serve({
            contentBase: ['dist'],
            port: frontendServerPort,
            historyApiFallback: '/index.html',
        }),
    ],
}
