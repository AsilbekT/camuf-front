<template>
  <div class="books-banner">
    <img
      class="books-banner__bg"
      src="@/assets/images/jpg/courses.jpg"
      alt=""
    />
    <div class="container">
      <ul class="books-banner__nav">
        <li>
          <NuxtLink to="/">{{ $t("MainPage") }}</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/">{{ $t("ScientificJournals") }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <div class="journals-main">
    <div class="container">
      <div class="journals-left">
        <h2 class="journals-title" v-html="details?.data?.title"></h2>
        <NuxtLink
          v-for="item in details?.data?.authors"
          :key="item"
          class="mb-6 block"
          :to="localePath(`/staff/${item?.slug}`)"
        >
          <span>{{ item?.full_name }}</span>
        </NuxtLink>
        <p class="journals-desc" v-html="details?.data?.abstract"></p>
        <ClientOnly>
          <vue-pdf-app
            :theme="'light'"
            style="height: 700px; margin-bottom: 40px"
            :pdf="details?.data?.article_file"
          ></vue-pdf-app>
        </ClientOnly>
        <p class="journals-desc" v-html="details?.data?.body"></p>
      </div>
      <div class="journals-right h-[fit-content] sticky">
        <button @click="downloadFile" class="book-item__btn">
          <img src="@/assets/images/svg/down.svg" alt="" />
          <span>скачать файл</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Service from "~/services/Service";

const { id, slug } = useRoute().params;
const details = ref({});
const localePath = useLocalePath();
// Fetch article details when the component is mounted
async function getArticleDetail() {
  const res = await Service.getArticleDetail(id, slug);
  details.value = res.data;
  console.log(details.value.data.article_file); // Log the PDF URL to verify it's correct
}

getArticleDetail();

// Function to handle file download
function downloadFile() {
  const fileUrl = details.value.data.article_file;
  if (!fileUrl) {
    console.error("File URL is not available");
    return;
  }

  const filename = fileUrl.split("/").pop() || "downloaded_file";
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = filename;
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
</script>

<style lang="scss">
.pdf-app .toolbar {
  z-index: 2 !important;
}
</style>
