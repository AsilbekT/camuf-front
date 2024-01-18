<template>
    <header class="header" :class="{ 'fixed-header': scrolledNav }">
        <div class="container">
            <NuxtLink to="/" class="site-logo">
                <img src="@/assets/images/png/logo.png" alt="">
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
            <div class="header-menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
    <label class="relative inline-flex items-center cursor-pointer dark-mode">
        <input type="checkbox" value="" class="sr-only peer" :checked="dark" @change="darkChange()">
        <div
            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
    </label>

    <NuxtPage />
    <footer class="footer">
        <div class="container">
            <NuxtLink to="/" class="site-logo">
                <img src="@/assets/images/png/logo.png" alt="">
            </NuxtLink>
            <ul class="footer__list">
                <li>
                    <a href="tel:+998 95 485 00 70">+998 95 485 00 70</a>
                </li>
                <li>
                    <a href="#">
                        Улитса Усмона Юсупова,
                        Фергана, Узбекистан
                    </a>
                </li>
                <li>
                    <a href="mailto:info@camuf.uz">
                        info@camuf.uz
                    </a>
                </li>
            </ul>
            <div class="footer__contact">
                <h2 class="footer__contact-title">Последние новости</h2>
                <p class="footer__contact-desc">
                    Введите свой адрес электронной почты, чтобы получать последние
                    новости университета, специальные мероприятия и студенческие
                    мероприятия, доставленные на ваш почтовый ящик...</p>
                <form @submit.prevent="" class="footer__contact-form">
                    <input placeholder="электрон почта" type="email">
                    <button>подписатся</button>
                </form>
            </div>
        </div>
    </footer>
</template>

<script setup>
const scrolledNav = ref(false)
const updateScroll = () => {
    const scrollposition = window.scrollY;
    if (scrollposition > 450) {
        scrolledNav.value = true;
        return;
    }
    scrolledNav.value = false;
};
const dark = ref(localStorage.getItem('dark') ? true : false)

function darkChange() {
    if (localStorage.getItem('dark')) {
        localStorage.removeItem('dark')
        dark.value = false
        document.querySelector('body').classList.remove('dark')
    } else {
        localStorage.setItem('dark', true)
        dark.value = true
        document.querySelector('body').classList.add('dark')
    }
}
if (localStorage.getItem('dark')) {
    document.querySelector('body').classList.add('dark')
}
onMounted(() => {
    window.addEventListener("scroll", updateScroll);
})
</script>

<style lang="scss" scoped></style>