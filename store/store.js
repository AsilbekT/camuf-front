import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const articles = ref({});
  const articlesItems = ref({});
  const sectionsItems = ref({});
  const departaments = ref({});
  const sections = ref({});
  return {
    articles,
    departaments,
    sections,
    sectionsItems,
    articlesItems,
  };
});
