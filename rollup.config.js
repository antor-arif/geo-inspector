export default [
    {
      input: 'src/index.js',
      output: [
        { file: 'dist/index.esm.js', format: 'esm' },
        { file: 'dist/index.cjs', format: 'cjs' },
      ],
      plugins: [
        resolve(),
        commonjs(),
        terser(),
        obfuscator({
          compact: true,
          controlFlowFlattening: true,
          deadCodeInjection: true,
          debugProtection: true,
          stringArrayEncoding: true,
          transformObjectKeys: true,
        }),
      ],
    }
  ];
  