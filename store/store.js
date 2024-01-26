import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const articles = ref({});
  return {
    articles,
  };
});
