const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  srcDir: 'src',

  head: {
    title: 'vue-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue-js Boilerplate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    '~/globals/scss/main.scss'
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    extend(config, options) {
      const extract = config.plugins.find(plugin => plugin.renderExtractedChunk)
      extract.options.allChunks = true
    },

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
