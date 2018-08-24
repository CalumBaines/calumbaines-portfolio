const path = require('path');
const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  srcDir: 'src',

  head: {
    title: 'Calum Baines Designer & Developer based in Sheffield',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Calum Baines is a freelance  designer & developer based in Sheffield. Working with local businesses and agencies to produce the right solutions for them.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    CTF_CASE_STUDY_TYPE_ID: config.CTF_CASE_STUDY_TYPE_ID,
    CTF_HOMEPAGE_TYPE_ID: config.CTF_HOMEPAGE_TYPE_ID,
    CTF_ABOUT_TYPE_ID: config.CTF_ABOUT_TYPE_ID,
    CTF_SERVICE_TYPE_ID: config.CTF_SERVICE_TYPE_ID
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
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-121350966-1'
    }]
  ],

  workbox: {
    runtimeCaching: [
      {
        // Defaults to `networkFirst` if omitted
        handler: 'cacheFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://calumbaines.co',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/blog'
    ],
    routes: [
      '/case-studies/kingspan',
      '/case-studies/ruddocks',
      '/case-studies/markel-app',
      '/case-studies/residence-one',
      '/case-studies/efficiency-north',
      '/case-studies/quba',
      '/case-studies/joriside',
      '/case-studies/interled',
      
    ]
  }
}
