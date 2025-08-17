<template>
  <main class="pt-[120px]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-4 lg:py-24">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-[var(--pr-color)]">
                {{ $t('AcademicYear') }}
              </div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[var(--card-journal-text)]">
                {{ $t('CareersWelcome') }}
                <span class="bg-gradient-to-r from-[var(--pr-color)] to-[var(--border-color)] bg-clip-text text-transparent">
                  {{ $t('CareersTitle') }}
                </span>
              </h1>
              <p class="text-xl text-[var(--text-color)] leading-relaxed">
                {{ $t('CareersSubtitle') }}
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
                {{ $t('SubmitApplication') }}
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
            {{ $t('VacantPositions') }}
          </h2>
          <p class="text-xl text-[var(--card-journal-text)] max-w-3xl mx-auto">
            {{ $t('VacantPositionsSubtitle') }}
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
              <h3 class="text-2xl font-bold text-gray-900 dark:text-[var(--card-journal-text)]">{{ $t('DepartmentHeads') }}</h3>
            </div>
            
            <div class="space-y-3 mb-6">
              <div v-for="department in departments" :key="department" 
                   class="flex items-start p-4 rounded-lg transition-colors duration-200">
                <div class="w-2 h-2 bg-blue-500 dark:bg-[var(--pr-color)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)] leading-relaxed">{{ $t(department) }}</span>
              </div>
            </div>
            
            <div class="bg-blue-50 dark:bg-[var(--pr-color)] dark:bg-opacity-5 rounded-lg p-4">
              <p class="text-sm text-white font-medium">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ $t('DepartmentHeadsInfo') }}
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
              <h3 class="text-2xl font-bold text-gray-900 dark:text-[var(--card-journal-text)]">{{ $t('Assistants') }}</h3>
            </div>
            
            <div class="space-y-3 overflow-y-auto max-h-[800px] pr-2">
              <div v-for="position in assistantPositions" :key="position.name" 
                   class="flex items-center justify-between p-4">
                <div class="flex-1">
                  <span class="text-gray-700 dark:text-[var(--card-journal-text)] leading-relaxed">{{ $t(position.name) }}</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-indigo-100 dark:bg-[var(--border-color)] dark:bg-opacity-10">
                    {{ position.count }} {{ $t('Positions') }}
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
            {{ $t('RequiredDocuments') }}
          </h3>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-3">
              <div v-for="document in requiredDocuments.slice(0, 5)" :key="document" 
                   class="flex items-start p-3 rounded-lg">
                <svg class="w-5 h-5 text-green-600 dark:text-[var(--pr-color)] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)]">{{ $t(document) }}</span>
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="document in requiredDocuments.slice(5)" :key="document" 
                   class="flex items-start p-3 rounded-lg">
                <svg class="w-5 h-5 text-green-600 dark:text-[var(--pr-color)] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700 dark:text-[var(--card-journal-text)]">{{ $t(document) }}</span>
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
              <h4 class="font-semibold text-amber-800 dark:text-[var(--pr-color)] mb-2">{{ $t('ImportantNotice') }}</h4>
              <p class="text-gray-700 dark:text-[var(--card-journal-text)]">
                {{ $t('ImportantNoticeText1') }}
              </p>
              <p class="text-gray-700 dark:text-[var(--card-journal-text)] mt-2">
                {{ $t('ImportantNoticeText2') }}
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
  'ObstetricsGynecology',
  'PhthisiologyMetabolic',
  'NeurologyPsychiatry',
  'FamilyMedicineInternal',
  'OncologyRadiology',
  'PathologicalAnatomy',
  'SurgicalOrthopedicDentistry',
  'SurgicalClinicalSciences',
  'InfectiousDiseases'
]

// Assistant positions data
const assistantPositions = [
  { name: 'InternalDiseases', count: 8 },
  { name: 'Pediatrics', count: 5 },
  { name: 'MedicalRadiology', count: 7 },
  { name: 'Dermatovenerology', count: 7 },
  { name: 'PsychiatryNarcology', count: 1 },
  { name: 'OncologyHematology', count: 2 },
  { name: 'TherapyInternal', count: 5 },
  { name: 'SurgerySurgical', count: 5 },
  { name: 'TraumatologyOrthopedics', count: 4 },
  { name: 'Phthisiology', count: 4 },
  { name: 'ForensicMedicine', count: 3 },
  { name: 'ClinicalPharmacology', count: 5 },
  { name: 'ClinicalRestorativeDentistry', count: 2 },
  { name: 'SurgicalDentistry', count: 2 },
  { name: 'ClinicalEndodontics', count: 3 },
  { name: 'DentalDiseasePrevention', count: 3 },
  { name: 'OralSurgery', count: 1 },
  { name: 'RemovableProsthetics', count: 2 },
  { name: 'Orthodontics', count: 1 },
  { name: 'MaxillofacialDiseases', count: 2 },
  { name: 'DermatovenerologyPediatric', count: 2 }
]

// Required documents data
const requiredDocuments = [
  'ApplicationToRector',
  'Biography',
  'PassportCopy',
  'ObjectiveData',
  'Photos',
  'DiplomaCopies',
  'ScientificWorksList',
  'PedagogicalStaffCertificate',
  'LanguageCertificate'
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
