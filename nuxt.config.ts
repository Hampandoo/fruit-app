// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ["@pinia/nuxt"],
  // Add static for git pages
  target: 'static',
  app: {
    baseURL: '/fruit-app/',
  }
});