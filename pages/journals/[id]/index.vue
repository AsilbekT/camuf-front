<template>
    <div class="books-banner">
        <img class="books-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="books-banner__nav">
                <li>
                    <NuxtLink to="/">{{ $t('MainPage') }}</NuxtLink>
                </li>
                /
                <li>
                    <NuxtLink to="/">{{ $t('ScientificJournals') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="journals">
        <div class="container">
            <div class="flex w-full items-center top">
                <h2>{{ $t('ScientificJournals') }}</h2>
                <input class="search" @input="filter()" v-model="search" placeholder="Qidirish..." type="text">
            </div>
            <form @submit.prevent="" class="journals-filter">
                <div class="flex flex-col gap-2">
                    <label for="start">{{ $t('StrartDate') }}</label>
                    <input @change="funcStart($event)" type="date" id="start">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="end">{{ $t('EndDate') }}</label>
                    <input @change="funcEnd($event)" type="date" id="end">
                </div>
                <div class="flex items-center gap-2">
                    <input v-model="rev" @change="filter()" id="reviewd" type="checkbox">
                    <label for="reviewd">{{ $t('Checked') }}</label>
                </div>
            </form>
            <div class="journals-wrapper">
                <div v-for="item in articles?.results" :key="item"
                    class="relative flex w-full flex-col rounded-xl card-journal bg-clip-border shadow-lg">
                    <div class="p-6">
                        <div class="flex items-left flex-col gap-2 justify-between mb-3">
                            <NuxtLink :to="localePath(`/journals/${item?.category}/${item?.slug}`)"
                                style="text-transform: capitalize;"
                                class="block title font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                <span v-html="item?.title"></span>
                            </NuxtLink>
                            <p class="text-sm whitespace-nowrap flex items-center flex-wrap gap-2">
                                <span v-for="item in item?.authors" :key="item">{{ item?.full_name }}</span>
                            </p>
                        </div>
                        <p class="block font-sans mb-6 text-base antialiased font-light leading-relaxed"
                            v-html="item?.abstract">
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">{{ $t('UploadedOn') }} May 12, 2023</span>
                            <div class="flex gap-6 items-center">
                                <div class="flex gap-2 items-center">
                                    <!DOCTYPE svg
                                        PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                                    <svg enable-background="new 0 0 48 48" height="18" id="Layer_4" version="1.1"
                                        viewBox="0 0 48 48" width="18" xml:space="preserve"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g>
                                            <path
                                                d="M27.412,8.405C26.314,8.149,25.176,8,24,8s-2.314,0.149-3.412,0.405C8.451,10.889,0,24,0,24   s10.062,15.625,24,16c13.938-0.375,24-16,24-16S39.549,10.889,27.412,8.405z M24,36c-6.627,0-12-5.373-12-12   c0-6.628,5.373-12,12-12s12,5.373,12,12C36,30.627,30.627,36,24,36z"
                                                class="fill-[#fff]" />
                                            <path
                                                d="M24,16L24,16l0,8l-5.657-5.657C16.896,19.791,16,21.791,16,24c0,4.418,3.582,8,8,8c4.417,0,8-3.582,8-8   S28.418,16,24,16z"
                                                class="fill-[#fff]" />
                                        </g>
                                    </svg>
                                    <span class="capitalize text-sm">{{ $t('Views') }}</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <svg height="12px" version="1.1" viewBox="0 0 24 16" width="20px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <title />
                                        <desc />
                                        <defs />
                                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                                            <g class="fill-[#fff]" id="Core" transform="translate(-504.000000, -88.000000)">
                                                <g id="cloud-download" transform="translate(504.000000, 88.000000)">
                                                    <path
                                                        d="M19.4,6 C18.7,2.6 15.7,0 12,0 C9.1,0 6.6,1.6 5.4,4 C2.3,4.4 0,6.9 0,10 C0,13.3 2.7,16 6,16 L19,16 C21.8,16 24,13.8 24,11 C24,8.4 21.9,6.2 19.4,6 L19.4,6 Z M17,9 L12,14 L7,9 L10,9 L10,5 L14,5 L14,9 L17,9 L17,9 Z"
                                                        id="Shape" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span class="capitalize text-sm">{{ $t('Downloads') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from "~/services/Service";

const articles = ref({})
const { id } = useRoute().params
const { locale } = useI18n()
const localePath = useLocalePath()
async function getAllArticles() {
    const res = await Service.getCategoryArticle(id, locale.value)
    articles.value = res.data
}
getAllArticles()

const search = ref("")
const start = ref("")
const end = ref("")
const rev = ref("")
function funcStart(e) {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    start.value = formattedDate;
    filter()
}
function funcEnd(e) {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    end.value = formattedDate;
    filter()
}

async function filter() {
    const res = await Service.articleFilter(id, search.value, start.value, end.value, rev.value, locale.value)
    articles.value = res.data
}
</script>

<style lang="scss" scoped></style>