import mainConfig from '../nuxt.config'

const localConfig = {
  buildDir: './.storybook/.nuxt-sb',
  dev: process.env.NODE_ENV !== 'production',
  loading: { color: '#16ed38' }
}

module.exports = Object.assign(mainConfig, localConfig)
