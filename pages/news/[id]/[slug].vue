<template>
    <div class="news-banner">
        <img class="news-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="" />
        <div class="container">
            <ul class="news-banner__nav">
                <li>
                    <NuxtLink :to="localePath('/')">{{ $t('MainPage') }}</NuxtLink>
                </li>
                <span class="breadcrumb-separator">/</span>
                <li>
                    <NuxtLink :to="localePath('/')">{{ $t('News') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="one-news">
        <div class="container">
            <div class="one-news__row">
                <aside class="one-news__main">
                    <h2 class="one-news__title"><span v-html="news?.title"></span></h2>
                    <div class="one-news__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path
                                d="M5 8h14V6H5zm0 0V6zm0 14q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.712T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v5.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm13 1q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m.5-5.2v-2.3q0-.2-.15-.35T18 15q-.2 0-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.525 1.525q.15.15.35.15t.35-.15q.15-.15.15-.35t-.15-.35z" />
                        </svg>
                        <p>
                            {{
                                new Date(news?.date_created).toLocaleDateString(
                                    'en-GB'
                                )
                            }}
                        </p>
                    </div>
                    <img class="one-news__image" :src="news?.image" />
                    <p class="one-news__text" v-html="news?.body"></p>
                </aside>
                <aside class="one-news__right">
                    <div class="similar">
                        <h3 class="similar__title">{{ $t('SimilarNews') }}</h3>
                        <div class="similar__row flex flex-col gap-4">
                            <NuxtLink :to="localePath(`/news/${similar?.category}/${similar?.slug}/`)" class="similar__item" v-for="similar in similar_news" :key="similar.id">
                                <div class="similar__img">
                                    <img class="rounded-sm" :src="similar.image" alt="" />
                                </div>
                                <div class="similar__main">
                                    <h4 class="similar__sub-title">
                                        <span v-html="similar.title"></span>
                                    </h4>
                                    <p class="similar__text">
                                        <span v-html="similar?.subtitle"></span>
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
const { locale } = useI18n()

const { id, slug } = useRoute().params;

const news = ref();
const similar_news = ref();

async function getNews() {
    const res = await Service.getOneNews(id, slug, locale.value);
    news.value = await res.data.data;
    const current_id = news.value.id;

    const res_similar = await Service.getCategoryNews(id, locale.value);
    similar_news.value = await res_similar.data.results.filter(
        (item) => item.id !== current_id
    );
}
getNews();


const dark = ref(localStorage.getItem('dark') ? true : false);

// SEO Meta Tags
useHead({
    title: news.value ? `${news.value.title?.replace(/<[^>]*>/g, '')} - CAMU News` : 'CAMU News',
    meta: [
        {
            name: 'keywords',
            content: 'CAMU, Central Asian Medical University, medical education, university news, medical university, higher education, academic news, medical studies, healthcare education, Uzbekistan education, medical cooperation, university partnerships, medical research, academic development, medical faculty, nursing education, medical technology, healthcare innovation, medical curriculum, student life, medical campus, international education, medical sciences, health sciences, medical training, clinical education, medical facilities, medical library, medical laboratories, medical equipment, medical research center, medical innovation hub'
        }
    ]
});

useSeoMeta({
    title: news.value ? `${news.value.title?.replace(/<[^>]*>/g, '')} - CAMU News` : 'CAMU News',
    ogTitle: news.value ? `${news.value.title?.replace(/<[^>]*>/g, '')} - CAMU News` : 'CAMU News',
    description: news.value?.subtitle || news.value?.body?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Latest news and updates from Central Asian Medical University (CAMU). Stay informed about medical education, research, and university developments.',
    ogDescription: news.value?.subtitle || news.value?.body?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Latest news and updates from Central Asian Medical University (CAMU). Stay informed about medical education, research, and university developments.',
    ogImage: news.value?.image || '/favicon.ico',
    ogUrl: `https://camu.edu/news/${id}/${slug}`,
    twitterCard: 'summary_large_image',
    twitterTitle: news.value ? `${news.value.title?.replace(/<[^>]*>/g, '')} - CAMU News` : 'CAMU News',
    twitterDescription: news.value?.subtitle || news.value?.body?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Latest news and updates from Central Asian Medical University (CAMU). Stay informed about medical education, research, and university developments.',
    twitterImage: news.value?.image || '/favicon.ico',
    ogSiteName: 'CAMU - Central Asian Medical University',
    ogType: 'article',
    articlePublishedTime: news.value?.date_created || new Date().toISOString(),
    articleModifiedTime: news.value?.date_updated || news.value?.date_created || new Date().toISOString(),
    articleAuthor: 'CAMU University',
    articleSection: 'News'
});

// useSchemaOrg([
//     defineWebPage({
//         name: news.value ? `${news.value.title?.replace(/<[^>]*>/g, '')} - CAMU News` : 'CAMU News',
//         description: news.value?.subtitle || news.value?.body?.replace(/<[^>]*>/g, '').substring(0, 200) || 'Latest news and updates from Central Asian Medical University (CAMU). Stay informed about medical education, research, and university developments.',
//         url: `https://camu.edu/news/${id}/${slug}`,
//         image: news.value?.image || '/favicon.ico',
//         publisher: {
//             '@type': 'Organization',
//             name: 'CAMU - Central Asian Medical University',
//             logo: {
//                 '@type': 'ImageObject',
//                 url: '/favicon.ico'
//             }
//         }
//     })
// ]);

</script>

<style lang="scss" scoped></style>
