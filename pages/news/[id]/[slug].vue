<template>
    <div class="one-news">
        <div class="container">
            <div class="one-news__row">
                <aside class="one-news__main">
                    <h2 class="one-news__title">{{ news?.title }}</h2>
                    <p class="one-news__date">
                        {{ new Date(news?.date_created).toLocaleDateString("en-GB") }}
                    </p>
                    <img class="one-news__image" :src="news?.image" />
                    <p class="one-news__text" v-html="news?.body"></p>
                </aside>
                <aside class="one-news__right">
                    <div class="similar">
                        <h3 class="similar__title">O'xshash yangiliklar</h3>
                        <div class="similar__row">
                            <NuxtLink
                                to="/news"
                                class="similar__item"
                                v-for="similar in similar_news"
                                :key="similar.id"
                            >
                                <div class="similar__img">
                                    <img :src="similar.image" alt="" />
                                </div>
                                <div class="similar__main">
                                    <h4 class="similar__title">
                                        {{ similar.title }}
                                    </h4>
                                    <p class="similar__text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ab, eveniet.
                                    </p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';

const { id, slug } = useRoute().params;

const news = ref();
const similar_news = ref();

async function getNews() {
    const res = await Service.getOneNews(id, slug);
    news.value = await res.data.data;
    const current_id = news.value.id;

    const res_similar = await Service.getCategoryNews(id);
    similar_news.value = await res_similar.data.results.filter(
        (item) => item.id !== current_id
    );
    console.log(similar_news.value);
}
getNews();
</script>

<style lang="scss" scoped></style>
