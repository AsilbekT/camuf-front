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
                    <NuxtLink :to="localePath('/news')">{{ $t('News') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="news-main">
        <div class="container">
            <h2 class="news-main__title">{{ $t('News') }}</h2>
            <div class="news-main__wrapper">
                <div class="news-main__left">
                    <template v-if="news && news.length > 0">
                        <NewsCard v-for="item in news" :key="item.id" :item="item" :category_id="1" />
                    </template>
                    <div v-else-if="!loading" class="no-news">
                        <div class="no-news__content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
                                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#A2A4AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="#A2A4AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13H8" stroke="#A2A4AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 17H8" stroke="#A2A4AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 9H8" stroke="#A2A4AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 class="no-news__title">{{ $t('NoNewsAvailable') }}</h3>
                            <p class="no-news__description">{{ $t('NoNewsDescription') }}</p>
                        </div>
                    </div>
                    
                    <!-- Loading indicator -->
                    <div v-if="loading" class="loading-indicator">
                        <div class="loading-spinner"></div>
                        <p>{{ $t('Loading') }}...</p>
                    </div>
                    
                    <!-- Load more indicator -->
                    <div v-if="loadingMore" class="load-more-indicator">
                        <div class="loading-spinner"></div>
                        <p>{{ $t('LoadingMore') }}...</p>
                    </div>
                </div>
                <div class="news-main__right">
                    <form class="news-main__search">
                        <label for="search">{{ $t('Search') }}</label>
                        <div class="news-main__search-input">
                            <input type="text" id="search" v-model="searchQuery" @input="handleSearch" />
                            <button type="button">
                                <img src="@/assets/images/svg/search.svg" alt="" />
                            </button>
                        </div>
                    </form>
                    <div class="news-main__archive">
                        <h4 class="news-main__archive-title">{{ $t('Archive') }}</h4>
                        <ul class="news-main__archive-list">
                            <li v-for="month in months" :key="month.key">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.3993 9.87982L10.8093 5.28982C10.622 5.10356 10.3685 4.99902 10.1043 4.99902C9.84013 4.99902 9.58668 5.10356 9.39931 5.28982C9.30559 5.38278 9.23119 5.49338 9.18042 5.61524C9.12965 5.7371 9.10352 5.8678 9.10352 5.99982C9.10352 6.13183 9.12965 6.26253 9.18042 6.38439C9.23119 6.50625 9.30559 6.61685 9.39931 6.70982L13.9993 11.2898C14.093 11.3828 14.1674 11.4934 14.2182 11.6152C14.269 11.7371 14.2951 11.8678 14.2951 11.9998C14.2951 12.1318 14.269 12.2625 14.2182 12.3844C14.1674 12.5063 14.093 12.6169 13.9993 12.7098L9.39931 17.2898C9.21101 17.4768 9.1047 17.7309 9.10376 17.9963C9.10282 18.2616 9.20734 18.5165 9.39431 18.7048C9.58129 18.8931 9.83541 18.9994 10.1008 19.0004C10.3661 19.0013 10.621 18.8968 10.8093 18.7098L15.3993 14.1198C15.9611 13.5573 16.2767 12.7948 16.2767 11.9998C16.2767 11.2048 15.9611 10.4423 15.3993 9.87982Z" fill="#A2A4AD" />
                                </svg>
                                <span>{{ $t(month.name) }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="news-main__category">
                        <h4 class="news-main__category-title">{{ $t('Categories') }}</h4>
                        <ul class="news-main__category-list">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.3993 9.87982L10.8093 5.28982C10.622 5.10356 10.3685 4.99902 10.1043 4.99902C9.84013 4.99902 9.58668 5.10356 9.39931 5.28982C9.30559 5.38278 9.23119 5.49338 9.18042 5.61524C9.12965 5.7371 9.10352 5.8678 9.10352 5.99982C9.10352 6.13183 9.12965 6.26253 9.18042 6.38439C9.23119 6.50625 9.30559 6.61685 9.39931 6.70982L13.9993 11.2898C14.093 11.3828 14.1674 11.4934 14.2182 11.6152C14.269 11.7371 14.2951 11.8678 14.2951 11.9998C14.2951 12.1318 14.269 12.2625 14.2182 12.3844C14.1674 12.5063 14.093 12.6169 13.9993 12.7098L9.39931 17.2898C9.21101 17.4768 9.1047 17.7309 9.10376 17.9963C9.10282 18.2616 9.20734 18.5165 9.39431 18.7048C9.58129 18.8931 9.83541 18.9994 10.1008 19.0004C10.3661 19.0013 10.621 18.8968 10.8093 18.7098L15.3993 14.1198C15.9611 13.5573 16.2767 12.7948 16.2767 11.9998C16.2767 11.2048 15.9611 10.4423 15.3993 9.87982Z" fill="#A2A4AD" />
                                </svg>
                                <span>{{ $t('UniversityNews') }}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.3993 9.87982L10.8093 5.28982C10.622 5.10356 10.3685 4.99902 10.1043 4.99902C9.84013 4.99902 9.58668 5.10356 9.39931 5.28982C9.30559 5.38278 9.23119 5.49338 9.18042 5.61524C9.12965 5.7371 9.10352 5.8678 9.10352 5.99982C9.10352 6.13183 9.12965 6.26253 9.18042 6.38439C9.23119 6.50625 9.30559 6.61685 9.39931 6.70982L13.9993 11.2898C14.093 11.3828 14.1674 11.4934 14.2182 11.6152C14.269 11.7371 14.2951 11.8678 14.2951 11.9998C14.2951 12.1318 14.269 12.2625 14.2182 12.3844C14.1674 12.5063 14.093 12.6169 13.9993 12.7098L9.39931 17.2898C9.21101 17.4768 9.1047 17.7309 9.10376 17.9963C9.10282 18.2616 9.20734 18.5165 9.39431 18.7048C9.58129 18.8931 9.83541 18.9994 10.1008 19.0004C10.3661 19.0013 10.621 18.8968 10.8093 18.7098L15.3993 14.1198C15.9611 13.5573 16.2767 12.7948 16.2767 11.9998C16.2767 11.2048 15.9611 10.4423 15.3993 9.87982Z" fill="#A2A4AD" />
                                </svg>
                                <span>{{ $t('SocialNews') }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const { locale } = useI18n()

// Reactive data
const news = ref([]);
const loading = ref(true);
const loadingMore = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);
const hasNextPage = ref(false);
const searchQuery = ref('');
const searchTimeout = ref(null);

// Months for archive
const months = ref([
    { key: 'Jan', name: 'Jan' },
    { key: 'Feb', name: 'Feb' },
    { key: 'Mar', name: 'Mar' },
    { key: 'Apr', name: 'Apr' },
    { key: 'May', name: 'May' },
    { key: 'Jun', name: 'Jun' },
    { key: 'Jul', name: 'Jul' },
    { key: 'Aug', name: 'Aug' },
    { key: 'Sep', name: 'Sep' },
    { key: 'Oct', name: 'Oct' },
    { key: 'Nov', name: 'Nov' },
    { key: 'Dec', name: 'Dec' }
]);

// Fetch news from API
async function fetchNews(page = 1, isLoadMore = false) {
    try {
        if (isLoadMore) {
            loadingMore.value = true;
        } else {
            loading.value = true;
        }

        const response = await $fetch('https://gateway.camuf.uz/news/', {
            params: {
                page: page,
                page_size: 10
            }
        });

        if (isLoadMore) {
            // Append new news to existing array
            news.value = [...news.value, ...response.results];
        } else {
            // Replace news array
            news.value = response.results;
        }

        // Update pagination info
        currentPage.value = response.current_page;
        totalPages.value = response.total_pages;
        hasNextPage.value = !!response.links.next;

    } catch (error) {
        console.error('Error fetching news:', error);
    } finally {
        loading.value = false;
        loadingMore.value = false;
    }
}

// Load more news
async function loadMoreNews() {
    if (hasNextPage.value && !loadingMore.value) {
        await fetchNews(currentPage.value + 1, true);
    }
}

// Handle search
function handleSearch() {
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }
    
    searchTimeout.value = setTimeout(() => {
        // Reset pagination and fetch first page
        currentPage.value = 1;
        fetchNews(1, false);
    }, 500);
}

// Infinite scroll handler
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Load more when user is near bottom (100px from bottom)
    if (scrollTop + windowHeight >= documentHeight - 100) {
        loadMoreNews();
    }
}

// Initialize
onMounted(() => {
    fetchNews();
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value);
    }
});

// SEO Meta Tags
useHead({
    title: 'CAMU News - Latest Updates',
    meta: [
        {
            name: 'keywords',
            content: 'CAMU, Central Asian Medical University, medical education, university news, medical university, higher education, academic news, medical studies, healthcare education, Uzbekistan education, medical cooperation, university partnerships, medical research, academic development, medical faculty, nursing education, medical technology, healthcare innovation, medical curriculum, student life, medical campus, international education, medical sciences, health sciences, medical training, clinical education, medical facilities, medical library, medical laboratories, medical equipment, medical research center, medical innovation hub'
        }
    ]
});

useSeoMeta({
    title: 'CAMU News - Latest Updates',
    ogTitle: 'CAMU News - Latest Updates',
    description: 'Stay updated with the latest news and developments from Central Asian Medical University (CAMU). Discover academic updates, research breakthroughs, faculty achievements, and student success stories.',
    ogDescription: 'Stay updated with the latest news and developments from Central Asian Medical University (CAMU). Discover academic updates, research breakthroughs, faculty achievements, and student success stories.',
    ogImage: '/favicon.ico',
    ogUrl: 'https://camu.edu/news',
    twitterCard: 'summary_large_image',
    twitterTitle: 'CAMU News - Latest Updates',
    twitterDescription: 'Stay updated with the latest news and developments from Central Asian Medical University (CAMU). Discover academic updates, research breakthroughs, faculty achievements, and student success stories.',
    twitterImage: '/favicon.ico',
    ogSiteName: 'CAMU - Central Asian Medical University',
    ogType: 'website'
});
</script>

<style lang="scss" scoped>
.no-news {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 500px;
    padding: 3rem 2rem;
    grid-column: 1/3;
    
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 100%;
    }
    
    &__title {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--play-color);
        margin: 1.5rem 0 1rem 0;
        line-height: 1.3;
    }
    
    &__description {
        color: var(--text-color);
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 0;
        font-weight: 400;
    }
    
    svg {
        opacity: 0.8;
        filter: drop-shadow(0 2px 4px var(--shadow-color));
    }
}

.loading-indicator, .load-more-indicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    
    p {
        margin-top: 1rem;
        color: var(--text-color);
        font-size: 1rem;
    }
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--play-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
