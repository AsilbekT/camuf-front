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
            <h2 class="about-course__title">{{ details?.data?.title }}</h2>
            <div class="about-course__row">
                <div class="about-course__left">
                    <div class="about-course__img">
                        <img :src="details?.data?.image" alt="">
                    </div>
                    <p class="about-course__text" v-html="details?.data?.body"></p>
                </div>
                <div class="about-course__right other-categories">
                    <h3 class="other-categories__title">
                        Barcha yo'nalishlar:
                    </h3>
                    <div class="other-categories__row">
                        <NuxtLink :to="`/course/${category.id}`" class="other-categories__item" :class="{'active': details?.data?.category === category.id}" v-for="category in categories" :key="category.id">
                            {{ category.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>¸

<script setup>
import Service from "~/services/Service";
const details = ref({})
const categories = ref([])
const { id } = useRoute().params
async function getDetials() {
    const res = await Service.getAboutCourse(id)
    details.value = res.data
}

async function getCourseCategories() {
    const res = await Service.getCourseCategorys()
    categories.value = res.data.results
    console.log(categories.value);
}

getDetials()
getCourseCategories()
</script>

<style lang="scss" scoped></style>