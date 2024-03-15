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
                    <NuxtLink to="/">{{ $t('Course') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="courses-main">
        <div class="container">
            <h2 class="courses-main__title">{{ $t('BachelorMajors') }}</h2>

            <div class="courses-main__items-wrapper">
                <div class="courses-main__item" v-for="item in courses?.results" :key="item">
                    <div class="courses-main__item-img">
                        <img :src="item?.image" alt="">
                    </div>
                    <div class="courses-main__item-text-wrapper">
                        <NuxtLink :to="`/about-course/${item?.id}/`" class="courses-main__item-title">
                            <span v-html="item?.title"></span>
                        </NuxtLink>

                        <h4 class="courses-main__item-code">{{ $t('DestinationCode') }}: {{ item?.course_id }}</h4>
                        <NuxtLink :to="`/about-course/${item?.id}/`" class="courses-main__item-btn">{{
                            $t('DetailedInformation') }}

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
const size = ref(6)
async function getAllCourses() {
    const res = await Service.getAllCourses(size, locale.value)
    courses.value = res.data
}
getAllCourses()
</script>

<style lang="scss" scoped></style>