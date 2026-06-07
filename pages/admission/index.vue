<template>
  <div class="courses-banner">
    <img
      class="courses-banner__bg"
      src="@/assets/images/jpg/courses.jpg"
      alt=""
    />
    <div class="container">
      <ul class="courses-banner__nav">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t("MainPage") }}</NuxtLink>
        </li>
        <span class="breadcrumb-separator">/</span>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t("Contact") }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="courses-main">
    <div class="container">
      <h2 class="courses-main__title">{{ $t("Directions") }}</h2>

      <div class="courses-main__tabs">
        <button
          v-for="category in courseCategories?.results"
          :key="category.id"
          type="button"
          class="courses-main__tab"
          :class="{ active: activeCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          <span v-html="category?.name"></span>
        </button>
      </div>

      <div
        v-if="!programs?.results?.length && programs?.results"
        class="courses-empty"
      >
        <h3 class="courses-empty__title">{{ $t("NoCoursesTitle") }}</h3>
        <p class="courses-empty__text">{{ $t("NoCoursesText") }}</p>
      </div>
      <div v-else class="courses-main__items-wrapper">
        <div
          class="courses-main__item"
          v-for="item in programs?.results"
          :key="item?.id"
        >
          <div class="courses-main__item-img">
            <img :src="item?.image" alt="" />
          </div>
          <div class="courses-main__item-text-wrapper">
            <NuxtLink
              :to="localePath(`/admission/${item?.id}/`)"
              class="courses-main__item-title"
            >
              <span v-html="item?.title"></span>
            </NuxtLink>

            <h4 class="courses-main__item-code">
              {{ $t("DestinationCode") }}: {{ item?.course_id }}
            </h4>
            <NuxtLink
              :to="localePath(`/admission/${item?.id}/`)"
              class="courses-main__item-btn"
              >{{ $t("LeaveMessage") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Service from "~/services/Service";
const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const courseCategories = ref({});
const programs = ref({});
const activeCategory = ref(null);

async function getCourseCategories() {
  const res = await Service.getCourseCategories(locale.value);
  courseCategories.value = res.data;
  const categories = res.data?.results || [];
  if (!categories.length) return;
  const queryId = Number(route.query.category);
  const matched = categories.find((c) => c.id === queryId);
  activeCategory.value = matched ? matched.id : categories[0].id;
  await getPrograms(activeCategory.value);
}
async function getPrograms(id) {
  const res = await Service.getCoursePrograms(id, locale.value);
  programs.value = res.data;
}
function selectCategory(id) {
  if (activeCategory.value === id) return;
  activeCategory.value = id;
  getPrograms(id);
}
watch(
  () => route.query.category,
  (value) => {
    const id = Number(value);
    const categories = courseCategories.value?.results || [];
    if (categories.some((c) => c.id === id)) {
      selectCategory(id);
    }
  }
);
getCourseCategories();
</script>

<style lang="scss" scoped></style>
