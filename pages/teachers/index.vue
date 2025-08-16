<template>
    <div class="teachers-banner">
        <img class="teachers-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="teachers-banner__nav">
                <li>
                    <NuxtLink :to="localePath('/')">{{ $t('MainPage') }}</NuxtLink>
                </li>
                <span class="breadcrumb-separator">/</span>
                <li>
                    <NuxtLink :to="localePath('/')">{{ $t('Teachers') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="teachers-main">
        <div class="container">
            <h2 class="teachers-main__title">{{ $t('OurTeachers') }}</h2>
            <div class="teachers-main__wrapper">
                <div class="teachers__item" v-for="item in teachers" :key="item.id">
                    <div class="teachers__item-img">
                        <img :src="item.profile_image" alt="">
                    </div>
                    <NuxtLink :to="localePath(`/teachers/${item.id}`)" lass="teachers__item-name cursor-pointer">
                        {{ item?.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const { locale } = useI18n()

const teachers = ref([])

async function getAllTeachers() {
    const res = await Service.getAllTeachers(locale.value)
    teachers.value = res?.data.results
}

getAllTeachers()
</script>

<style lang="scss" scoped></style>