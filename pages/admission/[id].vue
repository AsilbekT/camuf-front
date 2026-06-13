<template>
  <div class="contact">
    <div class="contianer">
      <div
        class="mx-auto max-w-3xl space-y-8 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
      >
        <div class="space-y-2 text-center">
          <h1 class="contact__title">{{ $t('ApplyForAdmission') }}</h1>
        </div>
        <form class="space-y-6 contact__form" @submit.prevent="handleSubmit">
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none" for="language">{{ $t('EducationLanguage') }}</label>
            <button
              @click="toggleDropdown('language')"
              type="button"
              class="flex h-10 w-full select-btn items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span>{{ selectedLabels.language || $t('SelectEducationLanguage') }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div v-if="dropdown.language" class="relative select-dropdown">
              <ul class="absolute w-full list bg-white border border-input rounded-md shadow-lg z-10">
                <li
                  v-for="option in languageOptions"
                  :key="option.value"
                  @click="selectLanguage(option.value)"
                  class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {{ option.label }}
                </li>
              </ul>
            </div>
            <p v-if="errors.language" class="text-sm text-red-500 mt-1">{{ errors.language }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="last-name"
                >{{ $t('Surname') }}</label
              >
              <input
                v-model="formData.lastName"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.lastName }"
                id="last-name"
                :placeholder="$t('EnterSurname')"
              />
              <p v-if="errors.lastName" class="text-sm text-red-500">{{ errors.lastName }}</p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="first-name"
                >{{ $t('Name') }}</label
              >
              <input
                v-model="formData.firstName"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.firstName }"
                id="first-name"
                :placeholder="$t('EnterName')"
              />
              <p v-if="errors.firstName" class="text-sm text-red-500">{{ errors.firstName }}</p>
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none" for="third-name"
              >{{ $t('FatherName') }}</label
            >
            <input
              v-model="formData.thirdName"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              :class="{ 'border-red-500': errors.thirdName }"
              id="third-name"
              :placeholder="$t('EnterFatherName')"
            />
            <p v-if="errors.thirdName" class="text-sm text-red-500">{{ errors.thirdName }}</p>
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none"
              for="passport-number"
              >{{ $t('PassportNumber') }}</label
            >
            <input
              v-model="formData.passportNumber"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              :class="{ 'border-red-500': errors.passportNumber }"
              id="passport-number"
              :placeholder="$t('EnterPassportNumber')"
            />
            <p v-if="errors.passportNumber" class="text-sm text-red-500">{{ errors.passportNumber }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="countrie"
                >{{ $t('Country') }}</label
              >
              <button
                @click="toggleDropdown('countrie')"
                type="button"
                class="flex h-10 w-full select-btn items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <span>{{ selectedLabels.country || $t('SelectCountry') }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div v-if="dropdown.countrie" class="relative select-dropdown">
                <ul
                  class="absolute w-full list bg-white border border-input rounded-md shadow-lg z-10"
                >
                  <li
                    v-for="label in countries"
                    :key="label"
                    @click="selectConutrie(label.code)"
                    class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {{ label.name }}
                  </li>
                </ul>
              </div>
              <p v-if="errors.country" class="text-sm text-red-500 mt-1">{{ errors.country }}</p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="region"
                >{{ $t('Region') }}</label
              >
              <input
                v-model="formData.region"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.region }"
                id="region"
                :placeholder="$t('EnterRegion')"
              />
              <p v-if="errors.region" class="text-sm text-red-500">{{ errors.region }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="district"
                >{{ $t('District') }}</label
              >
              <input
                v-model="formData.district"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.district }"
                id="district"
                :placeholder="$t('EnterDistrict')"
              />
              <p v-if="errors.district" class="text-sm text-red-500">{{ errors.district }}</p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="schooling"
                >{{ $t('EducationLevel') }}</label
              >
              <button
                @click="toggleDropdown('schooling')"
                type="button"
                class="flex h-10 w-full select-btn items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                :class="{ 'border-red-500': errors.schooling }"
              >
                <span>{{ selectedLabels.schooling || $t('SelectEducationLevel') }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div v-if="dropdown.schooling" class="relative select-dropdown">
                <ul
                  class="absolute w-full list bg-white border border-input rounded-md shadow-lg z-10"
                >
                  <li
                    v-for="option in schoolingOptions"
                    :key="option.value"
                    @click="selectSchooling(option.value)"
                    class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {{ option.label }}
                  </li>
                </ul>
              </div>
              <p v-if="errors.schooling" class="text-sm text-red-500 mt-1">{{ errors.schooling }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none"
                for="social-status"
                >{{ $t('SocialStatus') }}</label
              >
              <button
                @click="toggleDropdown('socialStatus')"
                type="button"
                class="flex h-10 w-full select-btn items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                :class="{ 'border-red-500': errors.socialStatus }"
              >
                <span>{{ selectedLabels.socialStatus || $t('SelectSocialStatus') }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div v-if="dropdown.socialStatus" class="relative select-dropdown">
                <ul
                  class="absolute w-full list bg-white border border-input rounded-md shadow-lg z-10"
                >
                  <li
                    v-for="option in socialStatusOptions"
                    :key="option.value"
                    @click="selectSocialStatus(option.value)"
                    class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {{ option.label }}
                  </li>
                </ul>
              </div>
              <p v-if="errors.socialStatus" class="text-sm text-red-500 mt-1">{{ errors.socialStatus }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="phone-number"
                >{{ $t('PhoneNumber') }}</label
              >
              <input
                v-model="formData.phoneNumber"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.phoneNumber }"
                id="phone-number"
                :placeholder="$t('EnterPhoneNumber')"
              />
              <p v-if="errors.phoneNumber" class="text-sm text-red-500">{{ errors.phoneNumber }}</p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="email"
                >{{ $t('Email') }}</label
              >
              <input
                v-model="formData.email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                :class="{ 'border-red-500': errors.email }"
                id="email"
                :placeholder="$t('EnterEmail')"
                type="email"
              />
              <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
            </div>
          </div>
          <vue-recaptcha @verify="onVerify"></vue-recaptcha>
          <button class="contact__submit" type="submit">{{ $t('Submit') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Service from "~/services/Service";
import { useToast } from "vue-toastification";
import { useReCaptcha } from "vue-recaptcha-v3";
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const { executeRecaptcha } = useReCaptcha();
const { id } = useRoute().params;
const languageOptions = computed(() => [
  { value: "uz", label: t("LangUz") },
  { value: "ru", label: t("LangRu") },
]);

const formData = reactive({
  lastName: "",
  firstName: "",
  thirdName: "",
  passportNumber: "",
  country: "",
  region: "",
  district: "",
  schooling: "",
  socialStatus: "",
  phoneNumber: "",
  email: "",
  language: "",
});

const errors = reactive({
  lastName: "",
  firstName: "",
  thirdName: "",
  passportNumber: "",
  country: "",
  region: "",
  district: "",
  schooling: "",
  socialStatus: "",
  phoneNumber: "",
  email: "",
  language: "",
});

const validateForm = () => {
  let valid = true;

  const required = (key) => {
    if (!formData[key] || !formData[key].toString().trim()) {
      errors[key] = t("ErrorRequired");
      valid = false;
    } else {
      errors[key] = "";
    }
  };

  required("language");
  required("lastName");
  required("firstName");
  required("thirdName");
  required("passportNumber");
  required("country");
  required("region");
  required("district");
  required("schooling");
  required("socialStatus");
  required("phoneNumber");

  if (!formData.email || !formData.email.trim()) {
    errors.email = t("ErrorRequired");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = t("ErrorEmail");
    valid = false;
  } else {
    errors.email = "";
  }

  return valid;
};

const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AX", name: "Aland Islands" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia, Plurinational State of" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cape Verde" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, The Democratic Republic of the" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CW", name: "Curaçao" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands (Malvinas)" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GG", name: "Guernsey" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "VA", name: "Holy See (Vatican City State)" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran, Islamic Republic of" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JE", name: "Jersey" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea, Democratic People's Republic of" },
  { code: "KR", name: "Korea, Republic of" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MK", name: "Macedonia, Republic of" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia, Federated States of" },
  { code: "MD", name: "Moldova, Republic of" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestinian Territory, Occupied" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "MF", name: "Saint Martin (French part)" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SX", name: "Sint Maarten (Dutch part)" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SS", name: "South Sudan" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SZ", name: "Swaziland" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan, Province of China" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania, United Republic of" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela, Bolivarian Republic of" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands, British" },
  { code: "VI", name: "Virgin Islands, U.S." },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];
const onVerify = (token) => {
  console.log("Recaptcha token:", token);
};
const schoolingOptions = computed(() => [
  { value: "secondary_school", label: t("SchoolSecondary") },
  { value: "lyceum", label: t("SchoolLyceum") },
  { value: "college", label: t("SchoolCollege") },
  { value: "other", label: t("SchoolOther") },
]);


const socialStatusOptions = computed(() => [
  { value: "youth_register", label: t("SocialYouth") },
  { value: "women_register", label: t("SocialWomen") },
  { value: "iron_register", label: t("SocialIron") },
  { value: "none", label: t("SocialNone") },
  { value: "other", label: t("SocialOther") },
]);

const selectedLabels = computed(() => ({
  language:
    languageOptions.value.find((o) => o.value === formData.language)?.label || "",
  country: countries.find((o) => o.code === formData.country)?.name || "",
  schooling:
    schoolingOptions.value.find((o) => o.value === formData.schooling)?.label ||
    "",
  socialStatus:
    socialStatusOptions.value.find((o) => o.value === formData.socialStatus)
      ?.label || "",
}));

const dropdown = ref({
  schooling: false,
  socialStatus: false,
  countrie: false,
  language: false,
});

const toggleDropdown = (field) => {
  dropdown.value[field] = !dropdown.value[field];
};

const selectLanguage = (value) => {
  formData.language = value;
  dropdown.value.language = false;
};

const selectSchooling = (value) => {
  formData.schooling = value;
  dropdown.value.schooling = false;
};
const selectConutrie = (value) => {
  formData.country = value;
  dropdown.value.countrie = false;
};

const selectSocialStatus = (value) => {
  formData.socialStatus = value;
  dropdown.value.socialStatus = false;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  const token = await executeRecaptcha("homepage");
  console.log("reCAPTCHA token:", token);
  const formdata = new FormData();
  formdata.append("program", id);
  formdata.append("surname", formData.lastName);
  formdata.append("name", formData.firstName);
  formdata.append("fathers_name", formData.thirdName);
  formdata.append("passport_number", formData.passportNumber);
  formdata.append("country", formData.country);
  formdata.append("region", formData.region);
  formdata.append("district", formData.district);
  formdata.append("schooling", formData.schooling);
  formdata.append("social_status", formData.socialStatus);
  formdata.append("completed", true);
  formdata.append("language", formData.language);
  formdata.append("phone_number", formData.phoneNumber);
  formdata.append("email", formData.email);
  const data = await Service.registerCourse(formdata);
  if (data.status < 299) {
    useToast().success(t("ApplicationSuccess"));
    router.push('/');
  } else if (data.status === 400) {
    const body = await data.json().catch(() => null);
    if (body?.non_field_errors || body?.email || body?.passport_number) {
      useToast().error(t("ErrorDuplicate"));
    } else {
      useToast().error(t("FillCorrectly"));
    }
  } else {
    useToast().error(t("FillCorrectly"));
  }
};
</script>

<style scoped>
/* Add any additional styles you need here */
</style>
