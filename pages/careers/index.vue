<template>
  <main class="pt-[120px]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-4 lg:py-24">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-[var(--pr-color)]">
                2025-2026 O'quv yili
              </div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[var(--card-journal-text)]">
                Ishga 
                <span class="bg-gradient-to-r from-[var(--pr-color)] to-[var(--border-color)] bg-clip-text text-transparent">
                  Marhamat
                </span>
              </h1>
              <p class="text-xl text-[var(--text-color)] leading-relaxed">
                Central Asian Medical University xalqaro tibbiyot universitetida kafedra mudirlari va professor-o'qituvchilar uchun vakant lavozimlar
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+998954850070" 
                class="inline-flex items-center justify-center rounded-lg bg-[var(--pr-color)] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[var(--border-color)] transition-all duration-200 hover:shadow-xl"
              >
                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ariza topshirish
              </a>
          
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[var(--pr-color)] to-[var(--border-color)] rounded-2xl transform rotate-3"></div>
            <img
              src="@/assets/images/jpg/welcome.png"
              alt="Central Asian Medical University"
              class="relative rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Job Listings Section -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[var(--card-journal-text)] sm:text-4xl mb-4">
            Vakant Lavozimlar
          </h2>
          <p class="text-xl text-[var(--card-journal-text)] max-w-3xl mx-auto">
            2025-2026 o'quv yili uchun kafedra mudirlari va assistentlar lavozimlariga tanlov
          </p>
        </div>

        <div class="grid gap-4 lg:p-8 lg:grid-cols-2">
          <!-- Department Heads -->
          <div class="rounded-2xl shadow-lg p-4 lg:p-8 bg-white dark:bg-[var(--card-journal)] transition-all duration-300 hover:shadow-3xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-blue-100 dark:bg-[var(--pr-color)] dark:bg-opacity-10">
                <svg class="w-6 h-6 text-blue-600 dark:text-[var(--pr-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H7m2 0v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-[var(--card-journal-text)]">Kafedra Mudirlari</h3>
            </div>
            
            <div class="space-y-3 mb-6">
              <div v-for="department in departments" :key="department" 
                   class="flex items-start p-4 rounded-lg transition-colors duration-200">
                <div class="w-2 h-2 bg-blue-500 dark:bg-[var(--pr-color)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)] leading-relaxed">{{ department }}</span>
              </div>
            </div>
            
            <div class="bg-blue-50 dark:bg-[var(--pr-color)] dark:bg-opacity-5 rounded-lg p-4">
              <p class="text-sm text-white font-medium">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kafedra mudirligi lavozimiga tanlovda fan doktorlari, professorlar yoki fan nomzodlari, dotsentlar qatnashishi mumkin.
              </p>
            </div>
          </div>

          <!-- Assistant Positions -->
          <div class="rounded-2xl shadow-lg p-4 lg:p-8 bg-white dark:bg-[var(--card-journal)] transition-all duration-300 hover:shadow-3xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-indigo-100 dark:bg-[var(--border-color)] dark:bg-opacity-10">
                <svg class="w-6 h-6 text-indigo-600 dark:text-[var(--border-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-[var(--card-journal-text)]">Assistentlar</h3>
            </div>
            
            <div class="space-y-3 overflow-y-auto max-h-[800px] pr-2">
              <div v-for="position in assistantPositions" :key="position.name" 
                   class="flex items-center justify-between p-4">
                <div class="flex-1">
                  <span class="text-gray-700 dark:text-[var(--card-journal-text)] leading-relaxed">{{ position.name }}</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-indigo-100 dark:bg-[var(--border-color)] dark:bg-opacity-10">
                    {{ position.count }} o'rin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Requirements Section -->
        <div class="mt-6 lg:mt-16 rounded-2xl shadow-lg p-4 lg:p-8 bg-white dark:bg-[var(--card-journal)] transition-all duration-300 hover:shadow-3xl">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-[var(--card-journal-text)] mb-6 flex items-center">
            <svg class="w-6 h-6 text-green-600 dark:text-[var(--pr-color)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Talab qilinadigan hujjatlar
          </h3>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-3">
              <div v-for="document in requiredDocuments.slice(0, 5)" :key="document" 
                   class="flex items-start p-3 rounded-lg">
                <svg class="w-5 h-5 text-green-600 dark:text-[var(--pr-color)] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)]">{{ document }}</span>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="document in requiredDocuments.slice(5)" :key="document" 
                   class="flex items-start p-3 rounded-lg">
                <svg class="w-5 h-5 text-green-600 dark:text-[var(--pr-color)] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)]">{{ document }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Important Notice -->
        <div class="mt-8 rounded-2xl shadow-lg p-6 bg-white dark:bg-[var(--card-journal)] transition-all duration-300 hover:shadow-3xl">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-amber-600 dark:text-[var(--pr-color)] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 class="font-semibold text-amber-800 dark:text-[var(--pr-color)] mb-2">Muhim eslatma</h4>
              <p class="text-gray-700 dark:text-[var(--card-journal-text)]">
                Tanlovda ishtirok etuvchi talabgorlarda ilmiy daraja, pedagogik staj va xorijiy tillarni bilish sertifikati borlarga ustuvorlik beriladi.
              </p>
              <p class="text-gray-700 dark:text-[var(--card-journal-text)] mt-2">
                Hujjatlar to'plami e'lon chiqarilgan kundan boshlab 1 oy muddat ichida topshirilishi zarur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Department heads data
const departments = [
  '"Akusherlik – ginekologiya va neontologiya kursi" kafedrasi',
  '"Ftiziatriya va metabolik kasalliklar" kafedrasi',
  '"Nevrologiya va psixiatriya kursi" kafedrasi',
  '"Oilaviy tibbiyotda ichki kasalliklar" kafedrasi',
  '"Onkologiya va tibbiy radiologiya" kafedrasi',
  '"Patologik anatomiya va sud tibbiyoti" kafedrasi',
  '"Xirurgik va ortopedik stomatologiya" kafedrasi',
  '"Xirurgik va klinik fanlar" kafedrasi',
  '"Yuqumli kasalliklar va dermatovenerologiya kursi" kafedrasi'
]

// Assistant positions data
const assistantPositions = [
  { name: 'Ichki kasalliklar. Kasb kasalliklari. XDT. Gigiyena. Tibbiy ekologiya', count: 8 },
  { name: 'Pediatriya', count: 5 },
  { name: 'Tibbiy radiologiya', count: 7 },
  { name: 'Dermatovenerologiya', count: 7 },
  { name: 'Psixiatriya, narkologiya. Tibbiy psixologiya', count: 1 },
  { name: 'Onkologiya. Gematologiya', count: 2 },
  { name: 'Terapiya: Ichki kasalliklar', count: 5 },
  { name: 'Xirurgiya: Xirurgik kasalliklar', count: 5 },
  { name: 'Travmatologiya va ortopediya. Bolalar travmatologiyasi va ortopediyasi', count: 4 },
  { name: 'Ftiziatriya', count: 4 },
  { name: 'Sud tibbiyoti va varch faoliyatining huquqiy asoslari', count: 3 },
  { name: 'Klinik farmokologiya', count: 5 },
  { name: 'Klinik restavratsion stomatologiya', count: 2 },
  { name: 'Xirurgik stomatologiya', count: 2 },
  { name: 'Klinik endodontiya', count: 3 },
  { name: 'Stomatologik kasalliklar profilaktikasi', count: 3 },
  { name: 'Ogʻiz boʻshligʻi jarrohligi', count: 1 },
  { name: 'Olinadigan tishlar bilan protezlash', count: 2 },
  { name: 'Ortodontiya', count: 1 },
  { name: 'Yuz-jagʻ kasalliklari va jarohatlari', count: 2 },
  { name: 'Dermatovenerologiya va bolalar dermatovenerologiyasi', count: 2 }
]

// Required documents data
const requiredDocuments = [
  'Rektor nomiga ariza',
  'Tarjimai hol',
  'Pasport nusxasi',
  'Obyektivka maʼlumotnoma',
  '3.5x4.5 rasm 6 dona',
  'Diplom nusxalari (bakalavr, magistr, klinik ordinatura, ilmiy daraja)',
  'Ilmiy ishlar roʻyxati (3.4 shakl)',
  'Pedagog xodimning malaka oshirish sertifikati',
  'Til bilish sertifikati (agar mavjud boʻlsa)'
]
</script>

<style scoped>
/* Custom scrollbar for assistant positions */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: var(--card);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: var(--pr-color);
}

/* Smooth animations */
* {
  transition: all 0.2s ease-in-out;
}
</style>
