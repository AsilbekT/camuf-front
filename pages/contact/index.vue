<template>
  <div class="courses-banner">
    <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
    <div class="container">
      <ul class="courses-banner__nav">
        <li>
          <NuxtLink to="/">{{ $t('MainPage') }}</NuxtLink>
        </li>
        /
        <li>
          <NuxtLink to="/">{{ $t('Contact') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="contact-faq">
    <div class="container">
      <h2 class="contact-faq__title">{{ $t('ContactTitle') }}</h2>
      <div class="contact-faq__main">
        <div class="contact-faq__lists" v-for="item in 4" :key="item">
          <h3 class="contact-faq__sub-title">
           {{ $t('ContactSubTitle') }}
          </h3>
          <ul class="contact-faq__list">
            <li class="contact-faq__item">Обучение в двух системах></li>
            <li class="contact-faq__item">5-дневная учебная система</li>
            <li class="contact-faq__item">Сочетание теории и практики</li>
            <li class="contact-faq__item">Путешествия по программе Work&Travel</li>
            <li class="contact-faq__item">Проведение занятий в современных клиниках</li>
            <li class="contact-faq__item">Современный кампус и симуляционный центр</li>
            <li class="contact-faq__item"> Прямой доступ к всемирной сети библиотек</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="contact-main">
    <div class="container">
      <h2 class="contact-main__title">{{ $t('BachelorMajors') }}</h2>
      <div class="contact-main__items-wrapper">
        <div class="contact-main__item" v-for="item in courses?.results" :key="item">
          <div class="contact-main__item-text-wrapper">
            <NuxtLink :to="`/about-course/${item?.id}`" class="contact-main__item-title">{{ item?.title }}
            </NuxtLink>
            <h4 class="contact-main__item-code">{{ $t('DestinationCode') }}: {{ item?.course_id }}</h4>
            <NuxtLink :to="`/about-course/${item?.id}`" class="contact-main__item-btn">{{ $t('DetailedInformation') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Service from '~/services/Service';
const { locale } = useI18n()
const courses = ref({})
const categorys = ref({})
const size = ref(6)
const { id } = useRoute().params
async function getCourses() {
  const res = await Service.getAllCourses(size, locale.value)
  courses.value = res.data
}

getCourses()

</script>

<style lang="scss" scoped></style>