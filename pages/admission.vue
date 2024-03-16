<template>
    <div class="admission-page">
      <div class="container">
        <h1 class="admission-page__title">{{ $t('Admissions') }}</h1>
        <p class="admission-page__message">{{ $t('AdmissionsNotOpen') }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  </script>
  
  <style lang="scss" scoped>
  .admission-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  
    &__title {
      font-size: 2rem;
      color: #333;
      text-align: center;
    }
  
    &__message {
      font-size: 1.5rem;
      color: #666;
      text-align: center;
      margin-top: 20px;
    }
  }
  </style>
  