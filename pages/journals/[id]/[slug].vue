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

    <div class="journals-main">
        <div class="container">
            <div class="journals-left">
                <h2 class="journals-title" v-html="details?.data?.title"></h2>
                <NuxtLink v-for="item in details?.data?.authors" :key="item" class="mb-6 block"
                    :to="localePath(`/staff/${item?.slug}`)">
                    <span>{{ item?.full_name }}</span>
                </NuxtLink>
                <p class="journals-desc" v-html="details?.data?.abstract">

                </p>
                <ClientOnly>
                    <vue-pdf-app :theme="'light'" style="height: 700px; margin-bottom: 40px;"
                        :pdf="details?.data?.article_file"></vue-pdf-app>
                </ClientOnly>
                <p class="journals-desc" v-html="details?.data?.body">
                </p>
            </div>
            <div class="journals-right">
                <div class="grid grid-cols-2 journals-wr mb-6 gap-2">
                    <div class="px-[24px] py-[12px] card text-white rounded-md flex flex-col items-center gap-2">
                        <span class="text-3xl">28</span>
                        <div class="flex items-center gap-2 text-xl">
                            <!DOCTYPE svg
                                PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg
                                enable-background="new 0 0 48 48" height="28" id="Layer_4" version="1.1" viewBox="0 0 48 48"
                                width="28" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        d="M27.412,8.405C26.314,8.149,25.176,8,24,8s-2.314,0.149-3.412,0.405C8.451,10.889,0,24,0,24   s10.062,15.625,24,16c13.938-0.375,24-16,24-16S39.549,10.889,27.412,8.405z M24,36c-6.627,0-12-5.373-12-12   c0-6.628,5.373-12,12-12s12,5.373,12,12C36,30.627,30.627,36,24,36z"
                                        class="fill-[#fff]" />
                                    <path
                                        d="M24,16L24,16l0,8l-5.657-5.657C16.896,19.791,16,21.791,16,24c0,4.418,3.582,8,8,8c4.417,0,8-3.582,8-8   S28.418,16,24,16z"
                                        class="fill-[#fff]" />
                                </g>
                            </svg>
                            <span class="capitalize">{{ $t('Views') }}</span>
                        </div>
                    </div>
                    <div class="px-[24px] py-[12px] card text-white rounded-md flex flex-col items-center gap-2">
                        <span class="text-3xl">28</span>
                        <div class="flex items-center gap-2 text-xl">
                            <svg height="16px" version="1.1" viewBox="0 0 24 16" width="24px"
                                xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
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
                            <span class="capitalize">{{ $t('Downloads') }}</span>
                        </div>
                    </div>
                </div>
                <button @click="downloadFile" class="book-item__btn">
                    <img src="@/assets/images/svg/down.svg" alt="">
                    <span>скачать файл</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Service from "~/services/Service";

const { id, slug } = useRoute().params;
const details = ref({});
const localePath = useLocalePath()
// Fetch article details when the component is mounted
async function getArticleDetail() {
    const res = await Service.getArticleDetail(id, slug);
    details.value = res.data;
    console.log(details.value.data.article_file); // Log the PDF URL to verify it's correct
}

getArticleDetail();

// Function to handle file download
function downloadFile() {
    const fileUrl = details.value.data.article_file;
    if (!fileUrl) {
        console.error('File URL is not available');
        return;
    }

    const filename = fileUrl.split('/').pop() || 'downloaded_file';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = filename;
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
</script>

<style lang="scss">
.pdf-app .toolbar {
    z-index: 2 !important;
}
</style>