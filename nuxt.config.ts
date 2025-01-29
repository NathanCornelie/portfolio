// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer:{port: 3002},
  app:{
    head:{
      link: [
        { rel: "icon", type: "image/x-icon", href: "/CN_icon.png" }
      ],
      title:"CN Dev",
      meta:[
        {name: 'description', content:"Hi, I'm Nathan, a DevOps Engineer based in Luxembourg. Passionate about building efficient and scalable web applications with Vue, I'm eager to contribute my expertise to impactful projects."}
      ]
    }
  },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
   'nuxt-mdi'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
