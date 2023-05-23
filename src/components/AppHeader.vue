<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import MainNavigation from './MainNavigation.vue';
</script>

<template>
  <header
    class="min-h-[74px] flex justify-between items-center px-[14px] md:px-[30px] xl:px-[70px]"
  >
    <AppLogo />
    <MainNavigation />
  </header>
</template>
