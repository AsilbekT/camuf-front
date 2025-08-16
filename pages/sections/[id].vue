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
                    <NuxtLink :to="localePath('/')" v-html="teachers?.name"></NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="teachers-main">
        <div class="container">
            <h2 class="teachers-main__title" v-html="teachers?.name"></h2>
            <img v-if="teachers?.image" :src="teachers?.image" alt="" class="teachers-main-img">
            <p class="mb-10" v-html="teachers?.description"></p>
            <div class="teachers-main__wrapper">
                <user-card v-for="item in teachers?.staff_members" :key="item" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const { locale } = useI18n()

const teachers = ref([])

const { id } = useRoute().params
async function getAllSections() {
    const res = await Service.getSectionsDetails(locale.value, id)
    teachers.value = res.data
}
watchEffect(() => {
    getAllSections()
})
</script>

<style lang="scss" scoped></style>