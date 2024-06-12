// plugins/vue-recaptcha-v3.client.ts
import { defineNuxtPlugin } from "#app";
import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "6LfRKPcpAAAAAM4No_Nd7RLm-AYHpQ-t8Sd0JmRV", // Replace with your site key
  });
});
