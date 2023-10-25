<template>
    <div class="courses-banner">
        <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="courses-banner__nav">
                <li><NuxtLink to="/">Главная страница</NuxtLink></li>
                /
                <li><NuxtLink to="/">Курс</NuxtLink></li>
            </ul>
        </div>
    </div>
    <div class="courses-main">
        <div class="container">
            <h2 class="courses-main__title">Специальности бакалавриата</h2>
            <div class="courses-main__items-wrapper">
                <div class="courses-main__item" v-for="item in 6" :key="item">
                    <div class="courses-main__item-img">
                        <img :src="`https://source.unsplash.com/random/${item}`" alt="">
                    </div>
                    <div class="courses-main__item-text-wrapper">
                        <NuxtLink to="/" class="courses-main__item-title">Стоматология</NuxtLink>
                        <h4 class="courses-main__item-code">Код направления: 60910100</h4>
                        <NuxtLink to="/" class="courses-main__item-btn">Подробная информация</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>