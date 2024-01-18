<template>
    <header class="header" :class="{ 'fixed-header': scrolledNav }">
        <div class="container">
            <NuxtLink to="/" class="site-logo">
                <img src="@/assets/images/png/logo.png" alt="" />
            </NuxtLink>
            <nav class="header-nav">
                <ul class="header-nav-list">
                    <li>
                        <NuxtLink to="/">о нас</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">контакты</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div
                @click="isOpenMenu = !isOpenMenu"
                class="header-menu-btn"
                :class="{ active: isOpenMenu }"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <div class="header-menu" :class="{ active: isOpenMenu }" ref="header_menu">
        <div class="header-menu__main flex items-start flex-wrap gap-2">
            <button class="header-menu__close" @click="isOpenMenu = false">
                <img src="~/assets/images/svg/close.svg" alt="" />
            </button>
            <div class="header-menu__item" v-for="(menu, index) in menus" :key="`${index}`">
                <NuxtLink to="/" v-if="menu.isLink">{{
                    menu.name
                }}</NuxtLink>
                <div class="accordion" v-else>
                    <div class="accordion-item">
                        <div class="accordion-header">{{ menu.name }}</div>
                        <div class="accordion-content">
                            <div v-for="(item, itemIndex) in menu.sub" :key="`0${index}${itemIndex}`">
                                <NuxtLink to="/" v-if="!!item.isLink">
                                    {{ item.name }}</NuxtLink
                                >
                                <div class="accordion sub" v-else>
                                    <div class="accordion-item">
                                        <div class="accordion-header">
                                            {{ item.name }}
                                        </div>
                                        <div class="accordion-content" v-for="sub_item in item.sub" :key="sub_item">
                                            <div>
                                                <NuxtLink
                                                    to="/"
                                                    v-if="sub_item.isLink"
                                                >
                                                    {{
                                                        sub_item.name
                                                    }}</NuxtLink
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <label class="relative inline-flex items-center cursor-pointer dark-mode">
        <input
            type="checkbox"
            value=""
            class="sr-only peer"
            :checked="dark"
            @change="darkChange()"
        />
        <div
            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
    </label>

    <NuxtPage />
    <footer class="footer">
        <div class="container">
            <NuxtLink to="/" class="site-logo">
                <img src="@/assets/images/png/logo.png" alt="" />
            </NuxtLink>
            <ul class="footer__list">
                <li>
                    <a href="tel:+998 95 485 00 70">+998 95 485 00 70</a>
                </li>
                <li>
                    <a href="#"> Улитса Усмона Юсупова, Фергана, Узбекистан </a>
                </li>
                <li>
                    <a href="mailto:info@camuf.uz"> info@camuf.uz </a>
                </li>
            </ul>
            <div class="footer__contact">
                <h2 class="footer__contact-title">Последние новости</h2>
                <p class="footer__contact-desc">
                    Введите свой адрес электронной почты, чтобы получать
                    последние новости университета, специальные мероприятия и
                    студенческие мероприятия, доставленные на ваш почтовый
                    ящик...
                </p>
                <form @submit.prevent="" class="footer__contact-form">
                    <input placeholder="электрон почта" type="email" />
                    <button>подписатся</button>
                </form>
            </div>
        </div>
    </footer>

    <!-- comment from akademik -->
</template>

<script setup>
const scrolledNav = ref(false);
const updateScroll = () => {
    const scrollposition = window.scrollY;
    if (scrollposition > 450) {
        scrolledNav.value = true;
        return;
    }
    scrolledNav.value = false;
};
const dark = ref(localStorage.getItem('dark') ? true : false);

function darkChange() {
    if (localStorage.getItem('dark')) {
        localStorage.removeItem('dark');
        dark.value = false;
        document.querySelector('body').classList.remove('dark');
    } else {
        localStorage.setItem('dark', true);
        dark.value = true;
        document.querySelector('body').classList.add('dark');
    }
}
if (localStorage.getItem('dark')) {
    document.querySelector('body').classList.add('dark');
}
onMounted(() => {
    window.addEventListener('scroll', updateScroll);

    // accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    console.log(accordionItems);

    accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            item.classList.toggle('active');
            const maxHeight = item.classList.contains('active')
                ? `${content.scrollHeight}px`
                : '0';
            content.style.maxHeight = maxHeight;
        });
    });
});

//============================================ header menu ============================================
//variables
const menus = ref([
    {
        isLink: true,
        name: 'Asosiy Sahifa',
    },
    // [
    //     'Universitet haqida',
    //     [
    //         'Rahbariyat',
    //         'Xalqaro bo`lim',
    //         'Ma’naviyat bo’limi',
    //         [
    //             'Ilmiy bo`lim',
    //             [
    //                 'Ilmiy yo`nalishlar',
    //                 [
    //                     'Ilmiy jurnal',
    //                     [
    //                         'ActaCAMU ilmiy jurnali',
    //                         'ActaCAMu Arxiv',
    //                         'Jurnal talablari',
    //                     ],
    //                 ],
    //                 'Ilmiy anjumanlaar',
    //                 'Normativ hujjatlar',
    //             ],
    //         ],
    //         [
    //             'Fakultetlar',
    //             [
    //                 'Tibbiyot fakulteti',
    //                 [
    //                     'Kafedralar',
    //                     [
    //                         'Ijtimoiy fanlar va jismoniy madaniyat',
    //                         'Anatomiya va mikroanatomiya',
    //                         'Tibbiy biologiya va kimyo',
    //                         'Gigiyenik va tibbiy jarayonlarni modellashtirish',
    //                         'Patologiya asoslari va sud tibbiyoti',
    //                         'Xirurgik kasalliklar',
    //                         'Terapevtik va xirurgik stomatologiya',
    //                         'Ichki kasalliklar',
    //                         'Pediatriya_va_bolalar_xirurgiyasi',
    //                     ],
    //                 ],
    //             ],
    //         ],
    //     ],
    // ],

    {
        isLink: false,
        name: "Yo'nalishlar",
        sub: [
            {
                isLink: 'false',
                name: 'Bakalavt',
                sub: [
                    {
                        isLink: true,
                        name: 'Davolash ishi',
                    },
                    {
                        isLink: true,
                        name: 'Pediatriya ishi',
                    },
                    {
                        isLink: true,
                        name: 'Stomatologiya',
                    },
                ],
            },
        ],
    },

    // [
    //     "Yo'nalishlar",
    //     [
    //         'Bakalavt',
    //         ['Davolash ishi', 'Pediatriya ishi', 'Stomatologiya'],
    //         'Magistratira',
    //         'Klinik ordinatura',
    //     ],
    // ][
    //     ('Yangiliklar',
    //     [
    //         'So`ngi yangiliklar',
    //         'E`lonlar',
    //         'Bo’sh ish o’rinlari',
    //         'Fotogalareya',
    //         'Videogalareya',
    //     ])
    // ],
    {
        isLink: false,
        name: 'Aloqa',
        sub: [
            {
                isLink: 'true',
                name: 'Murojaat qoldirish',
            },
            {
                isLink: 'true',
                name: 'Aloqa ma’lumotlari',
            },
        ],
    },
    {
        isLink: false,
        name: 'Elektron resurslar',
        sub: [
            {
                isLink: 'true',
                name: 'Elektron kutubxona',
            },
            {
                isLink: 'true',
                name: 'Onlayn o`quv platformasi (moodule)',
            },
            {
                isLink: 'true',
                name: 'HEMIS',
            },
            {
                isLink: 'true',
                name: 'Diplomni tasdiqlash',
            },
            {
                isLink: 'false',
                name: 'Elektron havolalar',
                sub: [
                    {
                        isLink: 'true',
                        name: 'https://president.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'https://www.gov.uz/uz',
                    },
                    {
                        isLink: 'true',
                        name: 'http://ferghana.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'https://my.gov.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://www.minzdrav.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://edu.uz/uz',
                    },
                    {
                        isLink: 'true',
                        name: 'http://ziyonet.uz/',
                    },
                    {
                        isLink: 'true',
                        name: 'http://www.lex.uz/',
                    },
                ],
            },
        ],
    },
    {
        isLink: false,
        name: 'Talaba',
        sub: [
            {
                isLink: 'true',
                name: 'Qabul',
            },
            {
                isLink: 'true',
                name: 'Xalqaro talabalar qabuli',
            },
            {
                isLink: 'true',
                name: 'Talabalar hayotidani',
            },
        ],
    },
    {
        isLink: true,
        name: 'Tillar',
    },
]);

const isOpenMenu = ref(false);

//functions
</script>

<style lang="scss" scoped></style>
