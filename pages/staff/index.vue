<template>
    <div class="teachers-banner">
        <img class="teachers-banner__bg" src="@/assets/images/jpg/courses.jpg" alt="">
        <div class="container">
            <ul class="teachers-banner__nav">
                <li>
                    <NuxtLink to="/">{{ $t('MainPage') }}</NuxtLink>
                </li>
                /
                <li>
                    <NuxtLink to="/">{{ $t('Staffs') }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="teachers-main">
        <div class="container">
            <h2 class="teachers-main__title">{{ $t('Staffs') }}</h2>
            <div class="teachers-main-settings mt-2">
                <input class="search" @input="filter($event)" v-model="search" placeholder="Qidirish..." type="text">
                <div class="relative dropdown">
                    <button type="button" @click.stop="dropdown = !dropdown"
                        class="cursor-pointer button relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                        <span class="flex items-center" @click.stop="dropdown = !dropdown">
                            <span class="ml-3 block truncate">{{ selectedLabel }}</span>
                        </span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                            @click.stop="dropdown = !dropdown">
                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <ul v-if="dropdown"
                        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md py-1 text-base shadow-lg  focus:outline-none"
                        tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3">

                        <!-- <li @click="selectDropdown(fRole)" class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option"> -->
                        <!-- <div class="flex items-center">
                                <span class="font-normal ml-3 block truncate">{{ $t('AllStaffs') }}</span>
                            </div> -->
                        <!-- </li> -->
                        <li v-for="item in POSITION_LEVEL_CHOICES" :key="item" @click="selectDropdown(item)"
                            class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" role="option">
                            <div class="flex items-center">
                                <span class="font-normal ml-3 block truncate">{{ item?.label }}</span>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
            <div class="teachers-main__wrapper" ref="scrollComponent">
                <user-card v-for="item in teacherArray" :key="item" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Service from '~/services/Service';
const { locale } = useI18n()
const dropdown = ref(false)
const route = useRoute()
const router = useRouter()
const teachers = ref([])
const role = ref("")
const POSITION_LEVEL_CHOICES = [
    { value: 'all', label: 'Barcha xodimlar' },
    { value: 'professor', label: 'Professor' },
    { value: 'rahbariyat', label: 'Leadership' },
    { value: 'associate_professor', label: 'Associate Professor' },
    { value: 'assistant_professor', label: 'Assistant Professor' },
    { value: 'lecturer', label: 'Lecturer' },
    { value: 'researcher', label: 'Researcher' },
    { value: 'postdoctoral_fellow', label: 'Postdoctoral Fellow' },
    { value: 'academic_advisor', label: 'Academic Advisor' },
    { value: 'graduate_assistant', label: 'Graduate Assistant' },
    { value: 'teaching_assistant', label: 'Teaching Assistant' },
    { value: 'research_assistant', label: 'Research Assistant' },
    { value: 'department_head', label: 'Department Head' },
    { value: 'dean', label: 'Dean' },
    { value: 'chancellor', label: 'Chancellor' },
    { value: 'vice_chancellor', label: 'Vice Chancellor' },
    { value: 'president', label: 'President' },
    { value: 'vice_president', label: 'Vice President' },
    { value: 'registrar', label: 'Registrar' },
    { value: 'director', label: 'Director' },
    { value: 'manager', label: 'Manager' },
    { value: 'administrative_assistant', label: 'Administrative Assistant' },
    { value: 'it_support', label: 'IT Support Staff' },
    { value: 'librarian', label: 'Librarian' },
    { value: 'lab_technician', label: 'Laboratory Technician' },
    { value: 'maintenance_staff', label: 'Maintenance Staff' },
    { value: 'human_resources', label: 'Human Resources' },
    { value: 'finance_officer', label: 'Finance Officer' },
    { value: 'marketing_officer', label: 'Marketing Officer' },
    { value: 'admissions_counselor', label: 'Admissions Counselor' },
    { value: 'student_services', label: 'Student Services' },
    { value: 'career_services', label: 'Career Services' },
    { value: 'alumni_relations', label: 'Alumni Relations' },
    { value: 'chief_financial_officer', label: 'Chief Financial Officer' },
    { value: 'chief_operating_officer', label: 'Chief Operating Officer' },
    { value: 'chief_academic_officer', label: 'Chief Academic Officer' },
    { value: 'chief_technology_officer', label: 'Chief Technology Officer' },
    { value: 'chief_information_officer', label: 'Chief Information Officer' },
    { value: 'chief_marketing_officer', label: 'Chief Marketing Officer' },
    { value: 'chief_human_resources_officer', label: 'Chief Human Resources Officer' },
    { value: 'executive_assistant', label: 'Executive Assistant' },
    { value: 'adjunct_faculty', label: 'Adjunct Faculty' },
    { value: 'visiting_professor', label: 'Visiting Professor' },
    { value: 'emeritus_professor', label: 'Emeritus Professor' },
    { value: 'other', label: 'Other' }
];

const fRole = POSITION_LEVEL_CHOICES[0]


role.value = route.query?.role ? role.value = route.query?.role : "all"
const label = ref()


const selectedLabel = ref("Barcha hodimlar")

POSITION_LEVEL_CHOICES.forEach(el => {
    if (route.query?.role == el.value) {
        selectedLabel.value = el.label
    }
})

const teacherArray = ref([])

async function getAllStaffs() {
    if (role.value.length) {
        let params = {
            role: role.value
        }
        const res = await Service.getAllStaffs(locale.value, params, 12, 1)
        teachers.value = res?.data
        teacherArray.value = res?.data?.results
    } else {
        const res = await Service.getAllStaffs(locale.value, {}, 12, 1)
        teachers.value = res?.data
        teacherArray.value = res?.data?.results
    }
}

getAllStaffs()
function selectDropdown(item) {
    selectedLabel.value = item.label
    role.value = item.value
    router.push({ query: { role: role.value } })
    getAllStaffs()
}
const pageCount = ref(1)
async function handleScrollApi() {
    if (role.value.length) {
        let params = {
            role: role.value
        }
        const res = await Service.getAllStaffs(locale.value, params, 12, pageCount.value)
        teachers.value = res?.data
        teacherArray.value.push(...res?.data?.results)
    } else {
        const res = await Service.getAllStaffs(locale.value, {}, 12, pageCount.value)
        teachers.value = res?.data
        teacherArray.value.push(...res?.data?.results)
    }
}


const scrollComponent = ref(null)
const handleScroll = (e) => {
    let element = scrollComponent.value
    if (teacherArray.value.length < teachers.value?.count) {
        if (element.getBoundingClientRect().bottom < window.innerHeight) {
            pageCount.value += 1
            handleScrollApi()
        }
    }
}

const search = ref('')
async function filter(event) {
    const res = await Service.searchStaffs(locale.value, {
        search: event.target.value
    })
    pageCount.value = 1
    teachers.value = res?.data
    teacherArray.value = res?.data.results
}


onMounted(() => {
    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('button')) {
            dropdown.value = false
        }
    })

    window.addEventListener("scroll", handleScroll)


})

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>