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
        <div class="header-menu__main flex items-start">
            <button class="header-menu__close" @click="isOpenMenu = false">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        :fill="dark ? '#fff' : '000'"
                        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                    />
                </svg>
            </button>
            <div class="header-menu__list h-full first-col">
                <h3 class="header-menu__title">Menyular</h3>
                <div
                    class="header-menu__item"
                    v-for="(menu, index) in menus"
                    :key="`${index}`"
                >
                    <NuxtLink
                        class="header-menu__btn"
                        to="/"
                        v-if="menu.isLink"
                        >{{ menu.name }}</NuxtLink
                    >
                    <button
                        v-else
                        class="header-menu__btn"
                        @mouseenter="
                            (activeMenu.one = menu),
                                (activeMenu.two = ''),
                                (activeMenu.three = ''),
                                (activeMenu.four = '')
                        "
                    >
                        {{ menu.name }}
                        <img src="~/assets/images/svg/arrow-right.svg" />
                    </button>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.one.name }}</h3>
                <div class="header-menu__items">
                    <div
                        class="header-menu__item"
                        v-for="item in activeMenu.one.sub"
                    >
                        <NuxtLink
                            class="header-menu__btn"
                            to="/"
                            v-if="item.isLink"
                            >{{ item.name }}</NuxtLink
                        >
                        <!-- item -->
                        <button
                            v-else
                            class="header-menu__btn"
                            @mouseenter="
                                (activeMenu.two = item),
                                    (activeMenu.three = ''),
                                    (activeMenu.four = '')
                            "
                        >
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.two.name }}</h3>
                <div class="header-menu__items">
                    <div
                        class="header-menu__item"
                        v-for="item in activeMenu.two.sub"
                    >
                        <NuxtLink
                            class="header-menu__btn"
                            to="/"
                            v-if="item.isLink"
                            >{{ item.name }}</NuxtLink
                        >
                        <!-- item -->
                        <button
                            v-else
                            class="header-menu__btn"
                            @mouseenter="
                                (activeMenu.three = item),
                                    (activeMenu.four = '')
                            "
                        >
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.three.name }}</h3>
                <div class="header-menu__items">
                    <div
                        class="header-menu__item"
                        v-for="item in activeMenu.three.sub"
                    >
                        <NuxtLink
                            class="header-menu__btn"
                            to="/"
                            v-if="item.isLink"
                            >{{ item.name }}</NuxtLink
                        >
                        <!-- item -->
                        <button
                            v-else
                            class="header-menu__btn"
                            @mouseenter="activeMenu.four = item"
                        >
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.four.name }}</h3>
                <div class="header-menu__items">
                    <div
                        class="header-menu__item"
                        v-for="item in activeMenu.four.sub"
                    >
                        <NuxtLink
                            class="header-menu__btn"
                            to="/"
                            v-if="item.isLink"
                            >{{ item.name }}</NuxtLink
                        >
                        <!-- item -->
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
    <!-- <div class="accordion" v-else>
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
                    </div> -->
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
});

//============================================ header menu ============================================
//variables
const menus = ref([
    {
        isLink: true,
        name: 'Asosiy Sahifa',
    },
    {
        isLink: false,
        name: 'Universitet haqida',
        sub: [
            {
                isLink: true,
                name: 'Rahbariyat',
            },
            {
                isLink: true,
                name: 'Xalqaro bo`lim',
            },
            {
                isLink: false,
                name: 'Ma’naviyat bo’limi',
                sub: [
                    {
                        isLink: true,
                        name: 'Xalqaro bo`lim',
                    },
                    {
                        isLink: false,
                        name: 'Ilmiy bo`lim',
                        sub: [
                            {
                                isLink: true,
                                name: 'ActaCAMU ilmiy jurnali',
                            },
                            {
                                isLink: true,
                                name: 'ActaCAMu Arxiv',
                            },
                            {
                                isLink: true,
                                name: 'Jurnal talablari',
                            },
                        ],
                    },
                ],
            },
            {
                isLink: false,
                name: 'Fakultetlar',
                sub: [
                    {
                        isLink: false,
                        name: 'Tibbiyot fakulteti',
                        sub: [
                            {
                                isLink: false,
                                name: 'Kafedralar',
                                sub: [
                                    {
                                        isLink: true,
                                        name: 'Ijtimoiy fanlar va jismoniy madaniyat',
                                    },
                                    {
                                        isLink: true,
                                        name: 'Anatomiya va mikroanatomiya',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

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

// const activeMenu = ref(menus[1]);
const activeMenu = reactive({
    one: menus.value[1],
    two: '',
    three: '',
    four: '',
    five: '',
});

console.log(activeMenu.one);

const isOpenMenu = ref(false);

//functions
</script>

<style lang="scss" scoped></style>
