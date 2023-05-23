<script setup lang="ts">
import AppLink from './AppLink.vue';
</script>

<template>
  <nav class="flex items-center gap-[14px] md:gap-[30px]">
    <AppLink class="text-[10px] font-medium md:text-xs" :to="{ name: 'signup' }"
      >Регистрация</AppLink
    >
    <AppLink
      class="text-[10px] text-black bg-[#3DDC84] rounded-[3px] py-[5px] px-3 font-medium md:text-xs md:py-2 md:px-5"
      :to="{ name: 'signin' }"
      >Войти</AppLink
    >
  </nav>
</template>
