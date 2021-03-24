export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LaravelAPI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/customAPI.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
  ],

  proxy: {
    '/laravel': {
         //target: 'https://laravel-auth.nuxtjs.app',
         //pathRewrite: { '^/laravel': '/'}

    }
  },
  auth: {
      redirect: {
          login: '/',
          home: false
      },
      strategies: {
          'laravelSanctum': {
            provider:  'laravel/sanctum',
            url: 'http://localhost:8000',//process.env.API_BASE_URL,
            endpoints: {
              login: {
                url: '/login'
              },
              user: {
                url: '/api/v1/user'
              },
              logout: {
                url: '/logout'
              }
            }
          }  
      }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
   
  compilerOptions: {
    "types": [
      "@nuxtjs/auth-next"
    ]
  },

  axios: {
    proxy: true,
    //baseURL: 'http://127.0.0.0:3000',
    credentials: true
  }
}
