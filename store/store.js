import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const articles = ref({});
  const articlesItems = ref({});
  const departaments = ref({});
  return {
    articles,
    departaments,
    articlesItems,
  };
});
