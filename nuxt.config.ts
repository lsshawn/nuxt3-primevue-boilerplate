import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: [
      '@pinia/nuxt',
      '@nuxtjs/eslint-module',
    ],
    css: [
        'primevue/resources/themes/tailwind-light/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
    transpile: ['primevue'],
})
