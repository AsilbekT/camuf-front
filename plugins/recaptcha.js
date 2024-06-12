// plugins/vue-recaptcha-v3.client.ts
import { defineNuxtPlugin } from "#app";
import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "6LfCkZMjAAAAAMexycEsa00fS08h9YRU16xsaFg8", // Replace with your site key
  });
});
