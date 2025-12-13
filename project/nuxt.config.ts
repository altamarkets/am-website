// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: "og:title", content: "Advanced Cryptocurrency Brokerage Services | Altamarkets" },
        { hid: 'og:image', property: "og:image", content: process.env.FRONT_URL + "/img/preview.png" },
        {
          hid: 'og:description',
          property: "og:description",
          content: "Altamarkets provides innovative and first-class cryptocurrency brokerage services. Discover and utilise our digital wealth management expertise."
        },
        { hid: 'og:url', property: "og:url", content: process.env.FRONT_URL },
      ],

      link: [
        // { rel: 'icon', type: 'image/x-icon', href: process.env.FRONT_URL + "/img/favicon.ico" },
        // { rel: "apple-touch-icon", type: "image/png", href: process.env.FRONT_URL + "/img/apple-touch-icon.png" },
        // { rel: "mask-icon", type: "image/svg+xml", color: "#000000", href: process.env.FRONT_URL + "/img/mask-icon.svg" },
      ],

      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@type": "Organization",
            '@context': 'https://schema.org/',
            "name": "Altamarkets",
            "url": process.env.FRONT_URL,
            "logo": '/img/svg/logo-footer.svg',
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dammstrasse 16",
              "postalCode": "6300",
              "addressLocality": "Zug",
              "addressCountry": "Switzerland"
            },
            "telephone": "+41 44 797 51 40",
            "email": "info@pidigital.swiss"
          })
        },
      ],

      __dangerouslyDisableSanitizers: ['script']
    },
  },

  css: [
    '~/styles/style.scss',
    '~/styles/colors.scss',
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css",
  ],

  loading: { color: 'blue' },

  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-gtag',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-booster',
  ],

  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    fonts: [{
      family: 'Inter',
      locals: ['Inter'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 'normal',
          sources: [
            { src: '@/public/fonts/Inter/Inter-Regular.woff', type:'woff' },
            { src: '@/public/fonts/Inter/Inter-Regular.woff2', type:'woff2' }
          ]
        }
      ]
    }, {
      family: 'ManiaExtendedC',
      locals: ['ManiaExtendedC'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 'normal',
          sources: [
            { src: '@/public/fonts/ManiaExtendedC/ManiaExtendedC.woff', type:'woff' },
            { src: '@/public/fonts/ManiaExtendedC/ManiaExtendedC.woff2', type:'woff2' }
          ]
        }
      ]
    }],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }

  },

  svgo: {
    autoImportPath: '~/public/img/svg/',
  },

  gtag: {
    id: 'G-8D2HTH846G',
  },

  auth: {
    redirect: {
      home: '/',
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      FRONT_URL: process.env.FRONT_URL,
    }
  },

  middleware: {
    global: true,
    handlers: ['init.global']
  },

  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
})
