// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    storyblokToken: "",
  },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_STORYBLOK_TOKEN,
        bridge: true,
        devtools: true,
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/fontaine",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["de-ch", "fr-ch"],
    defaultLocale: "de-ch",
  },
});
