
module.exports = {
  
  //page head
  head: {
    titleTemplate: '%s // Magnetic Creative',
    bodyAttrs: {
      'class': 'is-transitioning'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Crimson+Text:400,400i,700,700i'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//cdn.polyfill.io/v2/polyfill.min.js' },
      { src: '//cdn.jsdelivr.net/combine/npm/flickity@2.0.10/dist/flickity.pkgd.min.js,npm/animejs@2.2.0,npm/jquery@2.2.4' },
      { src: '//player.vimeo.com/api/player.js' }
    ]
  },
  
  //built-in loading indicator
  loading: false,

  //sass global includes
  css: [],

  //modules/extensions
  modules: [
    //allows loading global scss vars across components 
    ['nuxt-sass-resources-loader', '@/assets/scss/_settings.scss']
  ],

  //router config
  router: {
    middleware: 'pages'
  },
  
  build: {
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

