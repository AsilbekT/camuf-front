<template>
    <div class="latest-news__item">
        <NuxtLink to="/" class="latest-news__item-img">
            <img :src="`https://source.unsplash.com/random/${item}`" alt="">
        </NuxtLink>
        <NuxtLink class="latest-news__item-title" to="/">
            Студенты CAMU на III Международной
            олимпиаде «Самарканд 2020»
        </NuxtLink>
        <p class="latest-news__item-desc">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
        </p>
    </div>
</template>

<script setup>
const {item} = defineProps(['item'])
</script>

<style lang="scss" scoped></style>