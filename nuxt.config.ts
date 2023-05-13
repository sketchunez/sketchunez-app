// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],

  vite: {
    server: {
      hmr: {
        port: 24679,
        host: "0.0.0.0",
      },
    },
  },
});
