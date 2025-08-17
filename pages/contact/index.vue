<template>
  <div class="courses-banner">
    <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
    <div class="container">
      <ul class="courses-banner__nav">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('MainPage') }}</NuxtLink>
        </li>
        <span class="breadcrumb-separator">/</span>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('Contact') }}</NuxtLink>
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
            <li class="contact-faq__item">{{ $t('TwoSystemEducation') }}</li>
            <li class="contact-faq__item">{{ $t('FiveDaySystem') }}</li>
            <li class="contact-faq__item">{{ $t('TheoryPracticeCombination') }}</li>
            <li class="contact-faq__item">{{ $t('WorkTravelProgram') }}</li>
            <li class="contact-faq__item">{{ $t('ModernClinicsClasses') }}</li>
            <li class="contact-faq__item">{{ $t('ModernCampusSimCenter') }}</li>
            <li class="contact-faq__item">{{ $t('DirectAccessLibraries') }}</li>
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
            <NuxtLink :to="localePath(`/about-course/${item?.id}`)" class="contact-main__item-title">{{ item?.title }}
            </NuxtLink>
            <h4 class="contact-main__item-code">{{ $t('DestinationCode') }}: {{ item?.course_id }}</h4>
            <NuxtLink :to="localePath(`/about-course/${item?.id}`)" class="contact-main__item-btn">{{ $t('DetailedInformation') }}
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