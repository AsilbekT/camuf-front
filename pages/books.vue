<template>
    <div class="books-banner">
        <img class="books-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="books-banner__nav">
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
    <div class="books-main">
        <div class="container">
            <h2 class="books-main__title">наши учителя</h2>
            <div class="books-main__wrapper">
                <div class="book-item" v-for="item in 8" :key="item">
                    <div class="book-item__img">
                        <img :src="`https://source.unsplash.com/random/${item}`" alt="">
                    </div>
                    <button class="book-item__btn">
                        <img src="@/assets/images/svg/down.svg" alt="">
                        <span>скачать файл</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>