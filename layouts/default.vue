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
            <div @click="isOpenMenu = !isOpenMenu" class="header-menu-btn" :class="{ active: isOpenMenu }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <div class="header-menu" :class="{ active: isOpenMenu }" ref="header_menu">
        <div class="header-menu__main flex items-start">
            <button class="header-menu__close" @click="isOpenMenu = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path :fill="dark ? '#fff' : '000'"
                        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
                </svg>
            </button>
            <div class="header-menu__list h-full first-col">
                <h3 class="header-menu__title">Menyular</h3>
                <div class="header-menu__item" v-for="(menu, index) in menus" :key="`${index}`">
                    <NuxtLink class="header-menu__btn cursor-pointer" :class="{ active: index === activeMenu.one.id }"
                        to="/" v-if="menu.isLink" @click="isOpenMenu = false">{{ menu.name }}
                    </NuxtLink>
                    <button v-else class="header-menu__btn" :class="{ active: menu.name === activeMenu.one.name }"
                        @mouseenter="
                            (activeMenu.one = menu),
                            (activeMenu.two = ''),
                            (activeMenu.three = ''),
                            (activeMenu.four = '')
                            ">
                        {{ menu.name }}
                        <img src="~/assets/images/svg/arrow-right.svg" />
                    </button>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.one.name }}</h3>
                <div class="header-menu__items">
                    <div class="header-menu__item" v-for="item in activeMenu.one.sub" :key="item">
                        <NuxtLink class="header-menu__btn" :to="item.link ? item.link : '/'" v-if="item.isLink"
                            @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
                        <!-- item -->
                        <button v-else class="header-menu__btn" :class="{ active: item.name === activeMenu.two.name }"
                            @mouseenter="
                                (activeMenu.two = item),
                                (activeMenu.three = ''),
                                (activeMenu.four = '')
                                ">
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.two.name }}</h3>
                <div class="header-menu__items">
                    <div class="header-menu__item" v-for="item in activeMenu.two.sub" :key="item">
                        <NuxtLink class="header-menu__btn" to="/" v-if="item.isLink" @click="isOpenMenu = false">{{
                            item.name }}</NuxtLink>
                        <!-- item -->
                        <button v-else class="header-menu__btn" :class="{ active: item.name === activeMenu.three.name }"
                            @mouseenter="
                                (activeMenu.three = item),
                                (activeMenu.four = '')
                                ">
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.three.name }}</h3>
                <div class="header-menu__items">
                    <div class="header-menu__item" v-for="item in activeMenu.three.sub" :key="item">
                        <NuxtLink class="header-menu__btn cursor-pointer" to="/" v-if="item.isLink"
                            @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
                        <!-- item -->
                        <button v-else class="header-menu__btn" :class="{ active: item.name === activeMenu.four.name }"
                            @mouseenter="activeMenu.four = item">
                            {{ item.name }}
                            <img src="~/assets/images/svg/arrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="header-menu__list menu-main h-full">
                <h3 class="header-menu__title">{{ activeMenu.four.name }}</h3>
                <div class="header-menu__items">
                    <div class="header-menu__item" v-for="item in activeMenu.four.sub" :key="item">
                        <NuxtLink class="header-menu__btn" to="/" v-if="item.isLink">{{ item.name }}</NuxtLink>
                        <!-- item -->
                    </div>
                </div>
            </div>
        </div>

        <div class="small-menu__main">

            <div class="header-menu__list h-full first-col">
                <div class="header-menu__head flex items-center justify-between">
                    <button class="flex items-center justify-start gap-2" v-if="current.name"
                        @click="backPreviusMenu(current.col)">
                        <img class="w-5 h-5" src="~/assets/images/svg/arrow-back.svg" />
                        Orqaga
                    </button>
                    <h3 class="header-menu__title mr-8" v-if="current.name"> {{ current.name }} </h3>
                    <button class="header-menu__close" :class="{ 'ml-auto': !current.name }" @click="isOpenMenu = false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path :fill="dark ? '#fff' : '000'"
                                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
                        </svg>
                    </button>
                </div>
                <div class="header-menu__item" v-for="(menu, index) in smallMenu" :key="`${index}`">
                    <NuxtLink class="header-menu__btn cursor-pointer" :class="{ active: index === activeMenu.one.id }"
                        to="/" v-if="menu.isLink" @click="isOpenMenu = false, smallMenu = menus">{{ menu.name }}
                    </NuxtLink>
                    <button v-else class="header-menu__btn" @click="changeMenu(menu, index)">
                        {{ menu.name }}
                        <img src="~/assets/images/svg/arrow-right.svg" />
                    </button>
                </div>

            </div>
        </div>
    </div>


    <label class="relative inline-flex items-center cursor-pointer dark-mode">
        <input type="checkbox" value="" class="sr-only peer" :checked="dark" @change="darkChange()" />
        <div
            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
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
//============================================ imports ============================================
// menus
import menus from '~/utils/menus.js';
import Service from '~/services/Service';

const scrolledNav = ref(false)
const updateScroll = () => {
    const scrollposition = window.scrollY;
    if (scrollposition > 800) {
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
        document.querySelector('html').classList.remove('dark');
    } else {
        localStorage.setItem('dark', true);
        dark.value = true;
        document.querySelector('html').classList.add('dark');
    }
}
if (localStorage.getItem('dark')) {
    document.querySelector('html').classList.add('dark');
}
onMounted(() => {
    window.addEventListener("scroll", updateScroll);
});

const news_categories = ref({})
async function getNewsCategories() {
    const res = await Service.getNewsCategories();
    news_categories.value = res.data.results;

    news_categories.value.forEach((category) => {
        category.isLink = true
        category.link = `/news/${category.id}`
    })
    const menuIndex = menus.findIndex(item => item.name === 'Yangiliklar')
    menus[menuIndex].sub = news_categories.value

}

async function getCourseCategories() {
    const res = await Service.getCourseCategories();
    news_categories.value = res.data.results;

    news_categories.value.forEach((category) => {
        category.isLink = true
        category.link = `/course/${category.id}`
    })
    const menuIndex = menus.findIndex(item => item.name === 'Yo\'nalishlar')
    menus[menuIndex].sub = news_categories.value

}

getNewsCategories()
getCourseCategories()


//============================================ header menu ============================================
//variables
const activeMenu = reactive({
    one: menus[1],
    two: '',
    three: '',
    four: '',
    five: '',
});

// smal menus
const smallMenu = ref(menus)
const previus = ref([])
const current = ref({})
const all = ref([])
const index = ref([])
// is menu open
const isOpenMenu = ref(false);

// functions
function changeMenu(menu, i) {
    smallMenu.value = menu.sub
    current.value = menu
    index.value.push(i)
}

function backPreviusMenu(col) {
    console.log(index.value)


    switch (index.value.length) {
        case 1: {
            smallMenu.value = menus;
            current.value = { name: '' };
            index.value.pop()
            break;
        }
        case 2: {
            smallMenu.value = menus[index.value[0]].sub;
            current.value = menus[index.value[0]];
            index.value.pop();
            break;
        }
        case 3: {
            smallMenu.value = menus[index.value[0]].sub[index.value[1]].sub;
            current.value = menus[index.value[0]].sub[index.value[1]];
            index.value.pop()
            break;
        }
        case 4: {
            smallMenu.value = menus[index.value[0]].sub[index.value[1]].sub[index.value[2]].sub;
            current.value = menus[index.value[0]].sub[index.value[1]].sub[index.value[2]];
            index.value.pop()
            break;
        }
    }
}


//functions
</script>

<style lang="scss" scoped></style>
