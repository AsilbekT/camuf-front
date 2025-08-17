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
                    <div class="one-news__title">
                        <h2>{{ $t('FacultyOfNursingTitle') }}</h2>
                        <p class="subtitle">
                            {{ $t('FacultyOfNursingSubtitle') }}
                        </p>
                        <div class="date">{{ formatDate(new Date()) }}</div>
                    </div>

                    <div class="content">
                        <div class="highlight">
                            <p>
                                {{ $t('NursingDescription') }}
                            </p>
                        </div>

                        <img src="@/assets/images/jpg/photo_2025-08-1800.52.10.jpeg"
                            alt="Nursing students in modern medical facility" class="article-image" loading="lazy" />

                        <section>
                            <h2>{{ $t('WhyChooseCAMU') }}</h2>
                            <ul>
                                <li v-for="reason in whyChooseReasons" :key="reason">
                                    {{ $t(reason) }}
                                </li>
                            </ul>
                        </section>

                        <img src="@/assets/images/jpg/photo_2025-08-1800.52.06.jpeg"
                            alt="Medical students studying with advanced equipment" class="article-image"
                            loading="lazy" />

                        <section>
                            <h2>{{ $t('LearningFormats') }}</h2>
                            <div class="programs">
                                <div v-for="format in learningFormats" :key="format.title" class="program">
                                    <div class="program-title">{{ $t(format.title) }}</div>
                                    <p>{{ $t(format.description) }}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>{{ $t('ProgramDuration') }}</h2>
                            <div class="programs">
                                <div v-for="program in programs" :key="program.title" class="program">
                                    <div class="program-title">{{ $t(program.title) }}</div>
                                    <div class="program-duration">{{ $t(program.duration) }}</div>
                                    <p>{{ $t(program.description) }}</p>
                                </div>
                            </div>
                        </section>

                        <img src="@/assets/images/jpg/photo_2025-08-1800.52.06.jpeg"
                            alt="Medical professionals in hospital setting" class="article-image" loading="lazy" />

                        <section>
                            <h2>{{ $t('CareerOpportunities') }}</h2>
                            <p>{{ $t('CareerOpportunitiesDesc') }}</p>

                            <div class="countries">
                                <div v-for="country in careerOpportunities" :key="country.name" class="country">
                                    <div class="country-name">{{ $t(country.name) }}</div>
                                    <div class="country-desc">{{ $t(country.description) }}</div>
                                </div>
                            </div>
                        </section>

                        <img src="@/assets/images/jpg/IMG_7388.png"
                            alt="Global healthcare opportunities" class="article-image" loading="lazy" />

                        <div class="highlight">
                            <p>{{ $t('CAMUPreparation') }}</p>
                        </div>

                        <section>
                            <h2>{{ $t('Summary') }}</h2>
                            <p>
                                {{ $t('SummaryDesc') }}
                            </p>
                        </section>

                        <img src="@/assets/images/jpg/photo_2025-08-1800.52.02.jpeg"
                            alt="Nursing graduation ceremony" class="article-image" loading="lazy" />
                    </div>

                    <div class="cta">
                        <NuxtLink :to="localePath('/admission')" class="employment-btn">
                            {{ $t('ApplyNow') }}
                        </NuxtLink>
                    </div>
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

<script setup lang="ts">
import Service from '~/services/Service';


// Meta tags for SEO
useSeoMeta({
    title: 'Faculty of Nursing at CAMU - Central Asian Medical University',
    ogTitle: 'Faculty of Nursing at CAMU',
    description: 'Modern academic program designed in accordance with international standards for professional nurse education',
    ogDescription: 'Modern academic program designed in accordance with international standards for professional nurse education',
    ogImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop',
    twitterCard: 'summary_large_image',
})

const { locale } = useI18n()
const localePath = useLocalePath()

const { id, slug } = useRoute().params;

const similar_news = ref();

async function getNews() {
    const res_similar = await Service.getCategoryNews(id, locale.value);
    similar_news.value = await res_similar.data.results.filter(
        (item) => item.id !== id
    );
}
getNews();


const dark = ref(localStorage.getItem('dark') ? true : false);

// Page data
const whyChooseReasons = ref([
    'WhyChooseReason1',
    'WhyChooseReason2',
    'WhyChooseReason3'
])

const learningFormats = ref([
    {
        title: 'OnCampus',
        description: 'OnCampusDesc'
    },
    {
        title: 'Online',
        description: 'OnlineDesc'
    },
    {
        title: 'Hybrid',
        description: 'HybridDesc'
    }
])

const programs = ref([
    {
        title: 'BSNTitle',
        duration: 'BSNDuration',
        description: 'BSNDesc'
    },
    {
        title: 'ABSNTitle',
        duration: 'ABSNDuration',
        description: 'ABSNDesc'
    },
    {
        title: 'BSNBridgeTitle',
        duration: 'BSNBridgeDuration',
        description: 'BSNBridgeDesc'
    }
])

const careerOpportunities = ref([
    {
        name: 'UzbekistanCIS',
        description: 'UzbekistanCISDesc'
    },
    {
        name: 'USA',
        description: 'USADesc'
    },
    {
        name: 'CanadaAustraliaNZ',
        description: 'CanadaAustraliaNZDesc'
    },
    {
        name: 'SaudiArabiaGulf',
        description: 'SaudiArabiaGulfDesc'
    },
    {
        name: 'Europe',
        description: 'EuropeDesc'
    }
])

// Helper function to format date
const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

// Page transition
definePageMeta({
    pageTransition: 'page',
    layout: 'default'
})
</script>

<style scoped>
h1 {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--title-color);
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.2rem;
    color: var(--text-color);
    font-weight: 300;
    margin-bottom: 2rem;
}

.date {
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.7;
}

.content {
    margin-bottom: 4rem;
}

section {
    margin-bottom: 3rem;
}

h2 {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--title-color);
    margin: 3rem 0 1.5rem 0;
    border-bottom: 1px solid var(--section-border);
    padding-bottom: 0.5rem;
}

p {
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.highlight {
    background: var(--highlight-bg);
    padding: 2rem;
    margin: 2rem 0;
    border-left: 3px solid var(--highlight-border);
    border-radius: 8px;
}

ul {
    margin: 2rem 0;
    padding-left: 2rem;
}

li {
    margin-bottom: 0.8rem;
    color: var(--text-color);
}

.programs {
    margin: 2rem 0;
}

.program {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--program-border);
    opacity: 0.8;
}

.program:last-child {
    border-bottom: none;
}

.program-title {
    font-weight: 500;
    color: var(--title-color);
    margin-bottom: 0.5rem;
}

.program-duration {
    font-size: 0.9rem;
    color: var(--pr-color);
    margin-bottom: 0.5rem;
}

.countries {
    margin: 2rem 0;
}

.country {
    padding: 1rem 0;
    border-bottom: 1px solid var(--country-border);
    opacity: 0.8;
}

.country:last-child {
    border-bottom: none;
}

.country-name {
    font-weight: 500;
    color: var(--title-color);
    margin-bottom: 0.5rem;
}

.country-desc {
    font-size: 0.95rem;
    color: var(--text-color);
}

.cta {
    text-align: center;
    margin: 4rem 0;
    padding: 3rem 0;
    border-top: 1px solid var(--cta-border);
}

.cta .employment-btn {
    margin-top: 0 !important;
}
.btn:hover {
    background: var(--pr-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 94, 255, 0.3);
}

.btn-primary:hover {
    background: var(--pr-color);
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 94, 255, 0.3);
}

.article-image {
    width: 100%;
    object-fit: cover;
    display: block;
    border: 1px solid var(--section-border);
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.article-image:hover {
    transform: scale(1.02);
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }

    h1 {
        font-size: 2rem;
    }

    .btn {
        display: block;
        margin: 1rem 0;
        text-align: center;
    }
}

/* Page transition */
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>