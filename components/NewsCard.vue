<template>
    <div class="latest-news__item">
        <NuxtLink to="/" class="latest-news__item-img">
            <img :src="item.image" alt="">
        </NuxtLink>
        <NuxtLink class="latest-news__item-title" to="/">
            {{ item.title }}
        </NuxtLink>
        <p class="latest-news__item-desc" v-html="item.body">
        </p>
    </div>
</template>

<script setup>
const {item} = defineProps(['item'])

</script>

<style lang="scss" scoped></style>