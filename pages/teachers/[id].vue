<template>
    <div class="teachers-banner">
        <img
            class="teachers-banner__bg"
            src="@/assets/images/jpg/courses.jpg"
            alt=""
        />
        <div class="container">
            <ul class="teachers-banner__nav">
                <li>
                    <NuxtLink to="/">{{ $t('MainPage') }}</NuxtLink>
                </li>
                /
                <li>
                    <NuxtLink to="/">{{ $t('Teachers') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="teacher-main">
        <div class="container">
            <div class="teacher-main__wrapper">
                <div class="teacher-main__left">
                    <div class="teacher-main__image">
                        <img
                            :src="teacher?.profile_image"
                            :alt="teacher?.full_name"
                        />
                    </div>
                    <p
                        
                        class="teacher-main__connect"
                        >{{ $t('Connection') }}:
                    </p>
                    <a :href="`tel:${teacher.phone_number}`" class="teacher-main__phone">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000000"
                                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                            />
                        </svg>
                        {{ teacher.phone_number }}
                    </a>
                    <a :href="`mailto:${teacher.email}`" class="teacher-main__email">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="#000000"
                                d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"
                            />
                        </svg>
                        {{ teacher.email }}
                    </a>
                </div>
                <div class="teacher-main__right">
                    <h2 class="teacher-main__title"> {{ $t('DetailedInformation') }}</h2>
                    <p class="teacher-main__text" v-html="teacher.body"></p>
                    <!-- <div class="teacher-main__socials teacher-socials">
                        <h4 class="teacher-socials__title">Ijtimoiy tarmoqlar</h4>

                        <ul class="teacher-socials__list">
                            <li class="teacher-socials__item">
                                <a href="" class="teacher-socials__link"></a>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//=================================== imports ====================================
import Service from '~/services/Service';
const { locale } = useI18n()

//=================================== show teachers =====================================
//variables
const teacher = ref({});
const { id: teacher_id } = useRoute().params;

//functions
async function getOneTeachers() {
    const res = await Service.getOneTeachers(teacher_id,locale.value);
    teacher.value = res?.data;
    console.log(res?.data);
}

getOneTeachers();
</script>

<style lang="scss" scoped></style>
