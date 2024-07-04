export default {
  mode: 'universal',
  target: 'static',
  router: {
    base: '/group-sale-tracker/docs/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    titleTemplate: '%s Group Sale Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Track sales easily with a free and easy to use web application. Use categories to separate out sales and let the app do all the tricky calculations for you. Use cases include combined yard sales, bake sales, concession stands, and more.'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Group Sale'
      },
      {
        name: 'application-name',
        content: 'Group Sale'
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'msapplication-config',
        content: '/group-sale-tracker/docs/icons/browserconfig.xml'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/group-sale-tracker/docs/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/group-sale-tracker/docs/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/group-sale-tracker/docs/icons/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/group-sale-tracker/docs/icons/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/group-sale-tracker/docs/icons/safari-pinned-tab.svg',
        color: '#007bff'
      },
      {
        rel: 'shortcut icon',
        href: '/group-sale-tracker/docs/icons/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  components: true,
  generate: {
    dir: 'docs',
    fallback: true,
    exclude: ['/bootstrap']
  }
}
