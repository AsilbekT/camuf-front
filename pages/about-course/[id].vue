<template>
    <div class="courses-banner">
        <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="courses-banner__nav">
                <li>
                    <NuxtLink to="/">Главная страница</NuxtLink>
                </li>
                /
                <li>
                    <NuxtLink to="/">Курс</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="about-course">
        <div class="container">
            <div class="about-course-left">
                <h2 class="about-course-title">{{ details?.data?.title }}</h2>
                <img :src="details?.data?.image" alt="">
                <p v-html="details?.data?.body"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from "~/services/Service";
const details = ref({})
const { id } = useRoute().params
async function getDetials() {
    const res = await Service.getAboutCourse(id)
    details.value = res.data
}
getDetials()
</script>

<style lang="scss" scoped></style>