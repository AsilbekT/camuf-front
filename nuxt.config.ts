// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-swiper","@nuxtjs/i18n",],
  i18n: {
    defaultLocale: "uz",
    langDir: "./locales/",
    locales: [
      {
        code: "uz",
        name: "uz",
        file: "uz.json",
      },
      {
        code: "ru",
        name: "ru",
        file: "ru.json",
      },
      {
        code: "tr",
        name: "tr",
        file: "tr.json",
      },
      {
        code: "en",
        name: "en",
        file: "en.json",
      },
    ],
  },
  css: ["@/assets/scss/main.scss"],
  ssr: false,
});
