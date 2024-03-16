<template>
    <div class="hero">
        <Swiper :slidesPerView="1" :autoplay="{ delay: 10000, disableOnInteraction: false, }" :speed="800"
            :modules="[SwiperAutoplay, SwiperPagination]" :pagination="{
                clickable: true
            }" @slide-change="onSlideChange">
            <SwiperSlide v-for="item in banners?.results" :key="item">
                <div class="hero-bg">
                    <video-player loop muted playsinline crossorigin :autoplay="true" class="hero__video"
                        :src="item?.video_url" />
                </div>
                <div class="container">
                    <div class="hero__text-wrapper">
                        <h2 class="hero__title" v-html="item?.title"></h2>
                        <p class="hero__desc">
                            {{ item?.description }}
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <button class="hero__sound-btn" @click="soundFunc()">
                <svg v-if="mutedVideo" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <line style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" x1="416" x2="64"
                        y1="432" y2="80" />
                    <path fill="#fff"
                        d="M243.33,98.86a23.89,23.89,0,0,0-25.55,1.82l-.66.51L188.6,124.54a8,8,0,0,0-.59,11.85l54.33,54.33A8,8,0,0,0,256,185.06V120.57A24.51,24.51,0,0,0,243.33,98.86Z" />
                    <path fill="#fff"
                        d="M251.33,335.29,96.69,180.69A16,16,0,0,0,85.38,176H56a24,24,0,0,0-24,24V312a24,24,0,0,0,24,24h69.76l92,75.31A23.9,23.9,0,0,0,243.63,413,24.51,24.51,0,0,0,256,391.45V346.59A16,16,0,0,0,251.33,335.29Z" />
                    <path fill="#fff"
                        d="M352,256c0-24.56-5.81-47.87-17.75-71.27a16,16,0,1,0-28.5,14.55C315.34,218.06,320,236.62,320,256q0,4-.31,8.13a8,8,0,0,0,2.32,6.25l14.36,14.36a8,8,0,0,0,13.55-4.31A146,146,0,0,0,352,256Z" />
                    <path fill="#fff"
                        d="M416,256c0-51.18-13.08-83.89-34.18-120.06a16,16,0,0,0-27.64,16.12C373.07,184.44,384,211.83,384,256c0,23.83-3.29,42.88-9.37,60.65a8,8,0,0,0,1.9,8.26L389,337.4a8,8,0,0,0,13.13-2.79C411,311.76,416,287.26,416,256Z" />
                    <path fill="#fff"
                        d="M480,256c0-74.25-20.19-121.11-50.51-168.61a16,16,0,1,0-27,17.22C429.82,147.38,448,189.5,448,256c0,46.19-8.43,80.27-22.43,110.53a8,8,0,0,0,1.59,9l11.92,11.92A8,8,0,0,0,452,385.29C471.6,344.9,480,305,480,256Z" />
                </svg>

                <svg v-else height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <path fill="#fff"
                        d="M264,416.19a23.92,23.92,0,0,1-14.21-4.69l-.66-.51-91.46-75H88a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.65l91.46-75,.66-.51A24,24,0,0,1,288,119.83V392.17a24,24,0,0,1-24,24Z" />
                    <path fill="#fff"
                        d="M352,336a16,16,0,0,1-14.29-23.18c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73a16,16,0,0,1,28.5-14.54C378.2,208.16,384,231.47,384,256c0,23.83-6,47.78-17.7,71.18A16,16,0,0,1,352,336Z" />
                    <path fill="#fff"
                        d="M400,384a16,16,0,0,1-13.87-24C405,327.05,416,299.45,416,256c0-44.12-10.94-71.52-29.83-103.95A16,16,0,0,1,413.83,136C434.92,172.16,448,204.88,448,256c0,50.36-13.06,83.24-34.12,120A16,16,0,0,1,400,384Z" />
                </svg>
            </button>
        </Swiper>
        <div class="hero-bottom">
            <div class="container">
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.graduates"><span>0</span>%</h2>
                    <h4 class="hero-bottom__item-title">{{ $t('Graduates') }}</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.professors"><span>0</span>+</h2>
                    <h4 class="hero-bottom__item-title">{{ $t('Professors') }}</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.branches"><span>0</span></h2>
                    <h4 class="hero-bottom__item-title">{{ $t('StudentCities') }}</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.number_of_students"><span>0</span>+</h2>
                    <h4 class="hero-bottom__item-title">{{ $t('NumberOfStudents') }}</h4>
                </div>
            </div>
        </div>
    </div>

    <div class="about" id="#about">
        <div class="container">
            <div class="about-user">
                <img class="about-user__img" :src="president?.profile_image" alt="">
                <NuxtLink @click="staffPage(president?.id)" :to="localePath(`/staff/${president?.slug}/`)"
                    class="about-user__name">
                    <span v-html="president?.full_name"></span>
                </NuxtLink>
                <h4 class="about-user__subtitle">{{ $t('UniversityRector') }}</h4>
            </div>
            <div class="about-text-wrapper">
                <h2 class="about-title" v-html="about?.name"></h2>
                <p class="about-desc" v-html="about?.about">
                </p>

                <NuxtLink class="about-btn" to="/about/">{{ $t('KnowMore') }}</NuxtLink>

            </div>
        </div>
    </div>

    <div class="home-jurnals">
        <div class="container">
            <div class="teachers__header flex items-center justify-between">
                <NuxtLink :to="localePath(`/journal/`)" class="teachers__title">{{ $t('ScientificJournals') }}
                </NuxtLink>
                <NuxtLink :to="localePath(`/journal/`)" class="text-xl">{{ $t('allJournals') }}</NuxtLink>
            </div>
            
            <div class="home-jurnals__wrapper">
                <!-- <pre>{{  }}</pre> -->
                <div v-for="item in store.articlesItems?.results" :key="item"
                    class="relative flex bg-clip-border card-jurnal rounded-xl bg-white shadow-md w-full max-w-[48rem] flex-row">
                    <div
                        class="relative w-2/5 rounded-xl card-jurnal-img m-0 overflow-hidden bg-white rounded-r-none bg-clip-border p-2 shrink-0">
                        <img :src="item?.image" alt="card-image" class="rounded-xl object-cover w-full h-full" />
                    </div>
                    <div class="p-6 flex flex-col">
                        <h4 v-html="item?.name"
                            class="block mb-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                        </h4>
                        <p class="desc flex flex-col overflow-hidden max-h-[205px] block mb-8 font-sans text-base antialiased font-normal leading-relaxed"
                            v-html="item?.description">
                        </p>
                        <NuxtLink :to="`/journals/${item.id}`"
                            class="flex mt-auto items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                            {{ $t('More') }}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="latest-news">
        <div class="container">
            <NuxtLink :to="localePath(`/new`)" class="latest-news__title">
                {{ $t('News') }}
            </NuxtLink>
            <div class="latest-news__list">
                <NewsCard v-for="item in lastnews?.results" :key="item" :item="item" />
            </div>
        </div>
    </div>

    <div class="video-clips">
        <div class="container">
            <h2 class="video-clips__title"> {{ $t('VideoClips') }}</h2>
            <Swiper :slides-per-view="4" :breakpoints="{
                0: {
                    slidesPerView: 'auto',
                },
                1270: {
                    slidesPerView: 4
                }
            }" :space-between="40">
                <SwiperSlide v-for="item in studentsVideos?.results" :key="item">
                    <div class="video-clips__item" @mousemove="hover($event)" @click="hover($event)"
                        @mouseleave="leave($event)">
                        <video-player loop muted playsinline crossorigin autoplay :plugins="{
                            aspectRatio: '9:16'
                        }" :src="item?.video_url" />
                        <button class="play-btn">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z" />
                            </svg>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    <div class="speciality">
        <div class="container">
            <div class="speciality__text-wrapper">
                <NuxtLink :to="localePath('/courses/')" class="speciality__title">
                    {{ $t('BachelorMajors') }}

                </NuxtLink>
                <p class="speciality__desc">
                    {{ $t('SpecialityTextOne') }}
                    <br>
                    <br>
                    {{ $t('SpecialityTextTwo') }}
                </p>
                <NuxtLink class="speciality__btn" :to="localePath('/courses/')">{{ $t('AllDirections') }}</NuxtLink>

            </div>
            <div class="speciality__list">
                <div class="speciality__item" v-for="(item, index) in courses?.results?.slice(0, 6)" :key="item">
                    <h4 class="speciality__item-num">
                        {{ index < 10 ? '0' + (index + 1) : (index + 1) }} </h4>
                            <NuxtLink :to="localePath(`/about-course/${item?.id}/`)" class="speciality__item-title">
                                <span v-html="item?.title"></span>
                            </NuxtLink>
                            <div class="speciality__item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                    fill="none">
                                    <path
                                        d="M0.93934 17.9667C0.353553 18.5525 0.353553 19.5022 0.93934 20.088C1.52513 20.6738 2.47487 20.6738 3.06066 20.088L0.93934 17.9667ZM20.527 2.00032C20.527 1.17189 19.8555 0.500317 19.027 0.500317L5.52703 0.500316C4.6986 0.500316 4.02703 1.17189 4.02703 2.00032C4.02703 2.82874 4.6986 3.50032 5.52703 3.50032H17.527V15.5003C17.527 16.3287 18.1986 17.0003 19.027 17.0003C19.8555 17.0003 20.527 16.3287 20.527 15.5003L20.527 2.00032ZM3.06066 20.088L20.0877 3.06098L17.9664 0.939657L0.93934 17.9667L3.06066 20.088Z"
                                        fill="#161C31" />
                                </svg>
                            </div>
                            <div class="speciality__item-img">
                                <img :src="item?.image" alt="">
                            </div>
                </div>
            </div>
        </div>
    </div>

    <div class="teachers">
        <div class="container">
            <div class="teachers__header flex items-center justify-between">
                <NuxtLink :to="localePath(`/staff/?role=professor`)" class="teachers__title">{{ $t('OurTeachers') }}
                </NuxtLink>
                <NuxtLink :to="localePath(`/staff/?role=all`)" class="text-xl">{{ $t('AllStaffs') }}</NuxtLink>
            </div>

            <div class="teachers__list">
                <!-- <div class="teachers__item" v-for="item in teachers?.results" :key="item">
                    <div class="teachers__item-img">
                        <img :src="item?.profile_image" alt="">
                    </div>
                    <NuxtLink :to="`/teachers/${item?.id}`" class="teachers__item-name">
                        {{ item?.full_name }}
                    </NuxtLink>
                </div> -->
                <UserCard v-for="item in teachers?.results" :key="item" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import videojs from 'video.js';
import Service from '~/services/Service';
import { useStore } from '~/store/store';
const store = useStore()

const { locale } = useI18n()
const localePath = useLocalePath()
const banners = ref([])
const courses = ref({})
const studentsVideos = ref({})
const lastnews = ref({})
const teachers = ref({})
const president = ref({})
const about = ref({})
const artciles = ref({})

const muted = ref(true)

function staffPage(id) {
    localStorage.setItem('teacherId', id)
}

async function getAbout() {
    const res = await Service.getUnversityInfo(locale.value)
    about.value = res.data?.results[0]
    setTimeout(() => {
        document.querySelectorAll('.hero-bottom__item-res').forEach(el => {
            const animate = () => {
                const currentValue = +el.getAttribute('data-count');
                const currentDisplayValue = +el.childNodes[0].innerText
                const time = currentValue / speed;
                if (currentDisplayValue < currentValue) {
                    el.childNodes[0].innerText = Math.ceil(currentDisplayValue + time);
                    setTimeout(animate, 1);
                } else {
                    el.childNodes[0].innerText = currentValue;
                }
            };
            animate();
        })
    }, 500)
}
async function getPresident() {
    const res = await Service.getPresident(locale.value)
    president.value = res.data?.results[0]
}
async function getNews() {
    const res = await Service.getLastNews(locale.value)
    lastnews.value = res.data
}
async function getBanners() {
    const res = await Service.getBanners(locale.value)
    banners.value = res.data
}
async function getCourses() {
    const res = await Service.getAllCourses(6, locale.value)
    courses.value = res.data
}
async function getStudentsVideos() {
    const res = await Service.getStudentsVideos(locale.value)
    studentsVideos.value = res.data
}
async function getAllTeachers() {
    const res = await Service.getAllTeachers(locale.value)
    teachers.value = res?.data
}
getAbout()
getPresident()
getBanners()
getNews()
getStudentsVideos()
getCourses()
getAllTeachers()
function hover(e) {
    // Query all video clips items
    document.querySelectorAll('.video-clips__item').forEach(item => {
        const player = videojs(item.childNodes[0]); // Get the video.js player instance

        if (e.target === item) {
            // If the hovered item is the target, scale it up and remove blur
            e.target.style.transform = 'scale(1.1)';
            e.target.style.filter = 'blur(0)';
            if (player.paused()) {
                e.target.childNodes[1].style.opacity = 1
                // If the video is paused (initial state), start it from the beginning
                player.currentTime(0); // Restart the video
                player.play(); // Play the video
            } else {
                e.target.childNodes[1].style.opacity = 0
            }
            player.play()
            // Unmute without affecting the current play state
            player.muted(false);
        } else {
            // For all other items, scale down, add blur, mute, but don't pause them
            item.style.filter = 'blur(5px)';
            player.muted(true); // Mute the video
            item.childNodes[1].style.opacity = 0
        }
    });
}

function leave(e) {
    document.querySelectorAll('.video-clips__item').forEach(item => {
        item.style.transform = 'scale(1)';
        item.style.filter = 'blur(0)';
        item.childNodes[1].style.opacity = 0
        const player = videojs(item.childNodes[0]);
        player.muted(true);
        player.play();
    })
}
const mutedVideo = ref(true)
const curentId = ref(0)
function soundFunc() {
    videoPlayers.value = []
    document.querySelectorAll('.hero__video').forEach((videoElement) => {
        const videoPlayer = videojs(videoElement);
        videoPlayers.value.push(videoPlayer);
    });
    mutedVideo.value = !mutedVideo.value
    if (videoPlayers.value[curentId.value]) {
        videoPlayers.value[curentId.value].muted(mutedVideo.value);
    }
}

const videoPlayers = ref([]);
function onSlideChange(swiper) {
    videoPlayers.value.forEach((videoPlayer) => {
        videoPlayer.muted(true);
        videoPlayer.play()
    });
    curentId.value = swiper.activeIndex
    if (videoPlayers.value[swiper.activeIndex]) {
        videoPlayers.value[swiper.activeIndex].muted(mutedVideo.value);
        videoPlayers.value[swiper.activeIndex].play();
    }
}

const speed = 200;

onMounted(() => {
    document.querySelectorAll('.hero__video').forEach((videoElement) => {
        console.log(videoElement);
        const videoPlayer = videojs(videoElement);
        videoPlayer.muted(false);
        videoPlayer.play();
        videoPlayers.push(videoPlayer);
    });
})
</script>

<style lang="scss">
// .vjs-default-skin.vjs-has-started .vjs-control-bar {
//     display: block !important;
//     visibility: visible !important;
//     opacity: 1 !important;
//     bottom: -3.4em !important;
//     background-color: rgba(7, 20, 30, 1) !important;
// }

.vjs-fade-in,
.vjs-fade-out {
    visibility: visible !important;
    opacity: 1 !important;
    transition-duration: 0s !important;
}
</style>