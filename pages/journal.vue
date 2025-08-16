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
                    <NuxtLink :to="localePath('/')">{{ $t('Journals') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="home-jurnals">
        <div class="container">
            <h2 class="home-jurnals__title">{{ $t('ScientificJournals') }}</h2>
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
                        <NuxtLink :to="localePath(`/journals/${item.id}`)"
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

<style lang="scss" scoped></style>
