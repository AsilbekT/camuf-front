<template>
  <div class="books-banner">
      <img class="books-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
      <div class="container">
          <ul class="books-banner__nav">
              <li>
                  <NuxtLink to="/">Главная страница</NuxtLink>
              </li>
              /
              <li>
                  <NuxtLink to="/">Ilmiy jurnallar</NuxtLink>
              </li>
          </ul>
      </div>
  </div>
  <div class="books-main">
      <div class="container">
          <h2 class="books-main__title">Ilmiy jurnallar</h2>
          <div class="books-main__wrapper">
              <div class="book-item" v-for="item in artciles?.results" :key="item">
                  <div class="book-item__img">
                      <img :src="item?.image" alt="">
                  </div>
                  <a :href="item?.acticle_file" target="_blank" class="book-item__btn">
                      <img src="@/assets/images/svg/down.svg" alt="">
                      <span>скачать файл</span>
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import Service from '~/services/Service';
const artciles = ref({})
const { locale } = useI18n()
const size = ref(6)
async function getAllArticles() {
  const res = await Service.getAllArticles(size, locale.value)
  artciles.value = res.data
}
getAllArticles()
</script>

<style lang="scss" scoped></style>