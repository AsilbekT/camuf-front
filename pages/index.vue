<template>
    <div class="hero">
        <Swiper :slidesPerView="1" :autoplay="{ delay: 10000, disableOnInteraction: false, }" :speed="800"
            :modules="[SwiperAutoplay]">
            <SwiperSlide v-for="item in banners?.results" :key="item">
                <div class="hero-bg">
                    <video-player loop muted playsinline crossorigin :autoplay="true" class="hero__video"
                        :src="item?.video_url" />
                </div>
                <div class="container">
                    <div class="hero__text-wrapper">
                        <h2 class="hero__title">{{ item?.title }}</h2>
                        <p class="hero__desc">
                            {{ item?.description }}
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="hero-bottom">
            <div class="container">
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.graduates"><span>0</span>%</h2>
                    <h4 class="hero-bottom__item-title">Выпускники</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.professors"><span>0</span>+</h2>
                    <h4 class="hero-bottom__item-title">Профессоры</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.branches"><span>0</span></h2>
                    <h4 class="hero-bottom__item-title">Студенческие Города</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res" :data-count="about?.number_of_students"><span>0</span>+</h2>
                    <h4 class="hero-bottom__item-title">Количество Студентов</h4>
                </div>
            </div>
        </div>
    </div>

    <div class="about" id="#about">
        <div class="container">
            <div class="about-user">
                <img class="about-user__img" :src="president?.profile_image" alt="">
                <NuxtLink :to="`/teachers/${president?.id}`" class="about-user__name">{{ president?.full_name }}</NuxtLink>
                <h4 class="about-user__subtitle">Ректор университета</h4>
            </div>
            <div class="about-text-wrapper">
                <h2 class="about-title">{{ about?.name }}</h2>
                <p class="about-desc" v-html="about?.about">
                </p>
                <NuxtLink class="about-btn" to="/about">Ko'proq bilish</NuxtLink>
            </div>
        </div>
    </div>

    <div class="latest-news">
        <div class="container">
            <NuxtLink to="/news" class="latest-news__title">
                Последние новости
            </NuxtLink>
            <div class="latest-news__list">
                <NewsCard v-for="item in lastnews?.results" :key="item" :item="item" />
            </div>
        </div>
    </div>

    <div class="video-clips">
        <div class="container">
            <h2 class="video-clips__title">видеоклипы</h2>
            <Swiper :slides-per-view="4" :breakpoints="{
                0: {
                    slidesPerView: 'auto',
                },
                1270: {
                    slidesPerView: 4
                }
            }" :space-between="40">
                <SwiperSlide v-for="item in studentsVideos?.results" :key="item">
                    <div class="video-clips__item" @mousemove="hover($event)" @mouseleave="leave($event)">
                        <video-player controls loop muted playsinline crossorigin autoplay :plugins="{
                            aspectRatio: '9:16'
                        }" :src="item?.video_url" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    <div class="speciality">
        <div class="container">
            <div class="speciality__text-wrapper">
                <NuxtLink to="/courses" class="speciality__title">
                    Специальности
                    бакалавриата
                </NuxtLink>
                <p class="speciality__desc">
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает
                    сосредоточиться.
                    <br>
                    <br>
                    Введите свой адрес электронной почты, чтобы получать последние новости университета, специальные
                    мероприятия и студенческие мероприятия, доставленные на ваш почтовый
                </p>
                <NuxtLink class="speciality__btn" to="/courses">Барча йўналишлар</NuxtLink>
            </div>
            <div class="speciality__list">
                <div class="speciality__item" v-for="(item, index) in courses?.results?.slice(0, 6)" :key="item">
                    <h4 class="speciality__item-num">
                        {{ index < 10 ? '0' + index : index }} </h4>
                            <h2 class="speciality__item-title">
                                {{ item?.title }}
                            </h2>
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
            <NuxtLink to="/teachers" class="teachers__title">наши учителя</NuxtLink>
            <div class="teachers__list">
                <div class="teachers__item" v-for="item in teachers?.results" :key="item">
                    <div class="teachers__item-img">
                        <img :src="item?.profile_image" alt="">
                    </div>
                    <NuxtLink :to="`/teachers/${item?.id}`" class="teachers__item-name">
                        {{ item?.full_name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import videojs from 'video.js';
import Service from '~/services/Service';
const banners = ref([])
const courses = ref({})
const studentsVideos = ref({})
const lastnews = ref({})
const teachers = ref({})
const president = ref({})
const about = ref({})

const muted = ref(true)



async function getAbout() {
    const res = await Service.getUnversityInfo()
    about.value = res.data?.results[0]
}
async function getPresident() {
    const res = await Service.getPresident()
    president.value = res.data?.results[0]
}
async function getNews() {
    const res = await Service.getLastNews()
    lastnews.value = res.data
}
async function getBanners() {
    const res = await Service.getBanners()
    banners.value = res.data
}
async function getCourses() {
    const res = await Service.getAllCourses()
    courses.value = res.data
}
async function getStudentsVideos() {
    const res = await Service.getStudentsVideos()
    studentsVideos.value = res.data
}
async function getAllTeachers() {
    const res = await Service.getAllTeachers()
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
    document.querySelectorAll('.video-clips__item').forEach(item => {
        if (e.target === item) {
            e.target.style.transform = 'scale(1.1)'
            e.target.style.filter = 'blur(0)'
            const player = videojs(e.target?.childNodes[0])
            player.muted(false)
            // player.userActive(true);
        } else {
            item.style.filter = 'blur(5px)'
            const player = videojs(item?.childNodes[0])
            player.muted(true)
        }
    })
}
function leave(e) {
    document.querySelectorAll('.video-clips__item').forEach(item => {
        item.style.transform = 'scale(1)'
        item.style.filter = 'blur(0)'
        const player = videojs(item.childNodes[0])
        player.muted(true)
    })
}



const speed = 200;
onMounted(() => {
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