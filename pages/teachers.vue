<template>
    <div class="teachers-banner">
        <img class="teachers-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="teachers-banner__nav">
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
    <div class="teachers-main">
        <div class="container">
            <h2 class="teachers-main__title">наши учителя</h2>
            <div class="teachers-main__wrapper">
                <div class="teachers__item" v-for="item in 8" :key="item">
                    <div class="teachers__item-img">
                        <img src="@/assets/images/jpg/teacher.jpg" alt="">
                    </div>
                    <h2 class="teachers__item-name">
                        МАМАСАДИКОВ НУРИЛЛОШУКРУЛЛАЕВИЧ
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>