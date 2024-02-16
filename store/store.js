import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const articles = ref({});
  const articlesItems = ref({});
  return {
    articles,
    articlesItems,
  };
});
