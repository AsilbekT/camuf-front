<template>
    <div class="hero">
        <div class="hero-bg">
            <video-player loop muted playsinline crossorigin :autoplay="true" class="hero__video" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
             />
        </div>
        <div class="hero-top">
            <div class="container">
                <div class="hero__text-wrapper">
                    <h2 class="hero__title">Открой мир знаний в
                        Университете central hello world
                        asian medical university</h2>
                    <p class="hero__desc">
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                    </p>
                </div>
                <button class="hero__play-video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                        <path
                            d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.750001 1.73686C0.750001 0.967059 1.58333 0.485934 2.25 0.870835L10.5 5.63398Z"
                            fill="white" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="hero-bottom">
            <div class="container">
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res">99%</h2>
                    <h4 class="hero-bottom__item-title">Выпускники</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res">30+</h2>
                    <h4 class="hero-bottom__item-title">Профессоры</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res">02</h2>
                    <h4 class="hero-bottom__item-title">Студенческие Города</h4>
                </div>
                <div class="hero-bottom__item">
                    <h2 class="hero-bottom__item-res">500+</h2>
                    <h4 class="hero-bottom__item-title">Количество Студентов</h4>
                </div>
            </div>
        </div>
    </div>

    <div class="about" id="#about">
        <div class="container">
            <div class="about-user">
                <img class="about-user__img" src="@/assets/images/png/Rectangle 82.png" alt="">
                <h2 class="about-user__name">МАМАСАДИКОВ НУРИЛЛО ШУКРУЛЛАЕВИЧ</h2>
                <h4 class="about-user__subtitle">Ректор университета</h4>
            </div>
            <div class="about-text-wrapper">
                <h2 class="about-title">О университете</h2>
                <p class="about-desc">
                    6 сентября 2022 года Среднеазиатский медицинский университет получил лицензию № 037700 Государственной
                    инспекции по контролю качества образования при

                    Кабинете Министров Республики Узбекистан. На основании этого документа университет начал свою
                    деятельность.
                </p>
                <NuxtLink class="about-btn" to="/courses">Барча йўналишлар</NuxtLink>
            </div>
        </div>
    </div>

    <div class="latest-news">
        <div class="container">
            <NuxtLink to="/news" class="latest-news__title">
                Последние новости
            </NuxtLink>
            <div class="latest-news__list">
                <NewsCard v-for="item in 6" :key="item" :item="item" />
            </div>
        </div>
    </div>

    <div class="video-clips">
        <div class="container">
            <h2 class="video-clips__title">видеоклипы</h2>
            <div class="video-clips__wrapper">
                <div class="video-clips__item" v-for="item in 4" :key="item">
                    <img :src="`https://source.unsplash.com/random/${item}`" alt="">
                </div>
            </div>
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
                <div class="speciality__item" v-for="item in 6" :key="item">
                    <h4 class="speciality__item-num">
                        {{ item < 10 ? '0' + item : item }} </h4>
                            <h2 class="speciality__item-title">
                                Стоматология
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
                                <img :src="`https://source.unsplash.com/random/${item}`" alt="">
                            </div>
                </div>
            </div>
        </div>
    </div>

    <div class="teachers">
        <div class="container">
            <NuxtLink to="/teachers" class="teachers__title">наши учителя</NuxtLink>
            <div class="teachers__list">
                <div class="teachers__item" v-for="item in 4" :key="item">
                    <div class="teachers__item-img">
                        <img src="@/assets/images/jpg/teacher.jpg" alt="">
                    </div>
                    <h2 class="teachers__item-name">
                        МАМАСАДИКОВ НУРИЛЛОШУКРУЛЛАЕВИЧ
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const news = ref([])

async function getNews() {
    const res = await Service.getAllNews()
    news.value = res.data
}
getNews()
onMounted(() => {
    document.querySelectorAll('.video-clips__item').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.video-clips__item').forEach(item => {
                if (e.target === item) {
                    e.target.style.transform = 'scale(1.1)'
                    e.target.style.filter = 'blur(0)'
                } else {
                    item.style.filter = 'blur(5px)'
                }
            })
        })
        el.addEventListener('mouseleave', (e) => {
            document.querySelectorAll('.video-clips__item').forEach(item => {
                item.style.transform = 'scale(1)'
                item.style.filter = 'blur(0)'
            })
        })
    })
})
</script>

<style lang="scss" scoped></style>