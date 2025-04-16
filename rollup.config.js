import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import  terser  from '@rollup/plugin-terser';
import json from '@rollup/plugin-json'; 

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs',
        },
    ],
    plugins: [resolve(), commonjs(), terser(), json()],
};
