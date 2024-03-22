export default defineNuxtConfig({
  app:{
    head: {
      title: 'Nuxt.js',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'src',  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' }        
      ]
    }
  },
  
  devtools: { enabled: true },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/estatica': { ssr: false },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/ssr': { swr: 3600 },
    
  },
  
  modules: [
    // ...
    '@pinia/nuxt',
    'usebootstrap',
    

  ],
})
