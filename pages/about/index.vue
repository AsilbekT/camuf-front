<template>
    <div class="courses-banner">
        <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="courses-banner__nav">
                <li>
                    <NuxtLink to="/"> {{ $t('MainPage') }} </NuxtLink>
                </li>
                /
                <li>
                    <NuxtLink to="/">{{ $t('AboutTheUniversity') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="about about-main" id="#about">
        <div class="container">
            <div class="about-user">
                <img class="about-user__img" :src="president?.profile_image" alt="">
                <NuxtLink :to="`/staff/${president?.id}/`" class="about-user__name">
                    <span v-html="president?.full_name"></span>
                </NuxtLink>
                <h4 class="about-user__subtitle">{{ $t('UniversityRector') }}</h4>
            </div>
            <div class="about-text-wrapper">
                <h2 class="about-title" v-html="about?.name"></h2>
                <p class="about-main-desc" v-html="about?.about">
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const about = ref({})
const president = ref({})
const { locale } = useI18n()

async function getAbout() {
    const res = await Service.getUnversityInfo(locale.value)
    about.value = res.data?.results[0]
}
async function getPresident() {
    const res = await Service.getPresident(locale.value)
    president.value = res.data?.results[0]
}
getAbout()
getPresident()
</script>

<style lang="scss" scoped></style>