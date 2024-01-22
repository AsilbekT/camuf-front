<template>
    <div class="latest-news__item">
        <NuxtLink :to="`/news/${category_id}/${item?.slug}`" class="latest-news__item-img">
            <img :src="item?.image" alt="">
        </NuxtLink>
        <NuxtLink :to="`/news/${category_id}/${item?.slug}`" class="latest-news__item-title">
            {{ item?.title }}
        </NuxtLink>
        <p class="latest-news__item-desc" v-html="item?.subtitle">
        </p>
    </div>
</template>

<script setup>
const {item, category_id} = defineProps(['item', 'category_id'])
</script>

<style lang="scss" scoped></style>