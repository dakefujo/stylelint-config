import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        {
            builder: 'mkdist',
            input: './src',
            pattern: ['**/*.ts'],
            format: 'cjs',
            loaders: ['js'],
            ext: 'js'
        }
    ],
    outDir: 'dist',
    declaration: false,
    rollup: {
        emitCJS: true
    },
    failOnWarn: false
})
