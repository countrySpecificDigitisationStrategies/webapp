const { FuseBox, Sparky, QuantumPlugin, WebIndexPlugin, StylusPlugin, CSSPlugin } = require('fuse-box')

const bundleName = 'app'

const fuseConfig = {
  homeDir: 'src',
  plugins: [WebIndexPlugin(), [StylusPlugin(), CSSPlugin()]],
}

// Quantum configuration for bundles
const quantumPluginConfig = {
  uglify: true,
  treeshake: true,
  ensureES5: true,
  bakeApiIntoBundle: `${bundleName}.min.js`,
}

Sparky.task('default', ['clean', 'bundle-dev', 'bundle-standalone'], () => {})

// Clean
Sparky.task('clean', () =>
  Sparky.src('bundle/')
    .clean('bundle/dev/')
    .clean('bundle/standalone/')
)

// Bundle the library dev with include fusebox api
Sparky.task('bundle-dev', () => {
  // Initialize with merge config
  const initConfig = _.merge(fuseConfig, {
    output: 'dist/$name.js',
    plugins: [
      WebIndexPlugin({
        template: 'src/index.html',
        title: 'Fusebox React TS Starter',
        target: 'index.html',
      }),
    ],
  })

  console.log('initConfig:', initConfig)

  const fuse = FuseBox.init(initConfig)

  // Create bundle
  fuse
    .bundle(`${bundleName}`)
    .target('browser')
    .instructions(`>index.tsx`)
    .watch()
    .hmr()

  // Start dev server
  fuse.dev({
    root: 'bundle/dev',
  })

  // Run build
  return fuse.run()
})

// Bundle the library minimized with include fusebox api
Sparky.task('bundle-standalone', () => {
  // Initialize with merge config
  const initConfig = merge({}, fuseConfig, {
    output: 'bundle/standalone/$name.js',
    plugins: [QuantumPlugin(quantumPluginConfig)],
  })

  console.log('initConfig standalone:', initConfig)
  const fuse = FuseBox.init(initConfig)

  // Create bundle
  fuse
    .bundle(`${bundleName}.min.js`)
    .target('browser')
    .instructions(`>index.tsx`)

  // Run build
  return fuse.run()
})

// Copy bundle standalone to test directory
Sparky.task('copy-test-file', () => Sparky.src('bundle').dest('test'))

// Build bundle standalone and copy to test directory
Sparky.task('quantum-to-test', ['bundle-standalone', 'copy-test-file'], () => {})
