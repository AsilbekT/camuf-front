<template>
  <div class="courses-banner">
    <img class="courses-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
    <div class="container">
      <ul class="courses-banner__nav">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('MainPage') }}</NuxtLink>
        </li>
        <span class="breadcrumb-separator">/</span>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('Connection') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="connect">
    <div class="container">
      <div class="connect__row">
        <div class="connect__main">
          <h2 class="connect__title">{{ $t('Connection') }}</h2>
          <p class="connect__text">
            {{ $t('ConnectionText') }}
          </p>
          <!-- ? Connect form -->
          <form action="#" class="connect__form connect-form" @submit.prevent>
            <div class="connect-form__row">
              <label for="firstname" class="connect-form__label">
                {{ $t('Firstname') }}
                <input type="text" name="firstname" id="firstname" class="connect-form__input" required>
              </label>
              <label for="lastname" class="connect-form__label">
                {{ $t('Lastname') }}
                <input type="text" name="lastname" id="lastname" class="connect-form__input" required>
              </label>
            </div>
            <div class="connect-form__row">
              <label for="email" class="connect-form__label">
                {{ $t('Email') }}
                <input type="email" name="email" id="email" class="connect-form__input" required>
              </label>
              <label for="phone" class="connect-form__label">
                {{ $t('PhoneLabel') }}
                <input type="text" name="phnoe" id="phone" class="connect-form__input" required>
              </label>
            </div>
            <div class="connect-form__row">
              <label for="message" class="connect-form__label full">
                {{ $t('Message') }}
                <!-- <textareatype="email" name="email" id="email" class="connect-form__input"> -->
                <textarea class="connect-form__input" name="message" id="message" cols="30" rows="10"></textarea>
              </label>
            </div>
            <button class="connect-form__submit">{{ $t('SendMessage') }}</button>
          </form>
          <!-- ? Connect form -->
        </div>
        <!-- ? Connect info -->
        <div class="connect-info">
          <div class="connect-info__item">
            <h4 class="connect-info__title">{{ $t('Phone') }}</h4>
            <div class="connect-info__row">
              <div class="connect-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#161C31"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
                </svg>
              </div>
              <a :href="`tel:${information?.phone_number}`" class="connect-info__text link">
                {{ information?.phone_number }}
              </a>
            </div>
          </div>
          <div class="connect-info__item">
            <h4 class="connect-info__title">{{ $t('Email') }}</h4>
            <div class="connect-info__row">
              <div class="connect-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M19 22q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 18q-.825 0-1.412-.587T1 16V4q0-.825.588-1.412T3 2h16q.825 0 1.413.588T21 4v6h-3.5q-1.45 0-2.475 1.025T14 13.5V18zm8-7l8-5V4l-8 5l-8-5v2z" />
                </svg>
              </div>
              <a :href="`mailto:${information?.contact_email}`" target="_blank" class="connect-info__text link">
                {{ information?.contact_email }}
              </a>
            </div>
          </div>
          <div class="connect-info__item">
            <h4 class="connect-info__title">{{ $t('Address') }}</h4>
            <div class="connect-info__row">
              <div class="connect-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22" />
                </svg>
              </div>
              <p class="connect-info__text">
                {{ $t('AddressConnect') }}
              </p>
            </div>
          </div>
          <div class="connect-info__item">
            <h4 class="connect-info__title">{{ $t('ReceptionTime') }}</h4>
            <div class="connect-info__row">
              <div class="connect-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8h14V6H5zm0 0V6zm0 14q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v5.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm13 1q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"/></svg>
              </div>
              <p class="connect-info__text">
                {{ $t('WorkingTimeOne') }} <br>
                {{ $t('WorkingTimeTwo') }} <br>
                {{ $t('WorkingTimeThree') }}
              </p>
            </div>
          </div>
          <div class="connect-info__item">
            <h4 class="connect-info__title">{{ $t('InSocialNetworks') }}</h4>
            <div class="connect-info__row">
              <NuxtLink :to="localePath('/')" class="connect-info__icon social">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
              </NuxtLink>
              <NuxtLink :to="localePath('/')" class="connect-info__icon social">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
              </NuxtLink>
              <NuxtLink :to="localePath('/')" class="connect-info__icon social">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18Z"/></svg>
              </NuxtLink>
              <NuxtLink :to="localePath('/')" class="connect-info__icon social">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- ? Connect info -->
      </div>
    </div>

    <div class="connect__map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5040.462487637041!2d71.76350205100914!3d40.38858705710268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb835d25981df5%3A0x5d945a3c82991eec!2sCAMU%20Central%20Asian%20Medical%20University%20xalqaro%20tibbiyot%20universiteti!5e0!3m2!1suz!2s!4v1706458305225!5m2!1suz!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>
import Service from '~/services/Service';
const information = ref([])
async function getInformation() {
  const res = await Service.getUnversityInfo()
  information.value = res.data.results[0]
}

getInformation()

const dark = ref(localStorage.getItem('dark') ? true : false);

</script>

<style lang="scss" scoped></style>