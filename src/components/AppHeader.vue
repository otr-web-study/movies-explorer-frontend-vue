<script setup lang="ts">
import { storeToRefs } from 'pinia';
import AppLogo from '@/components/UI/AppLogo.vue';
import MainNavigation from './MainNavigation.vue';
import ExtendedNavigation from './ExtendedNavigation.vue';
import { useAppControlsStore } from '@/stores/useAppControlsStore';

const { isLoggedIn } = storeToRefs(useAppControlsStore());
</script>

<template>
  <header
    class="min-h-[74px] flex justify-between items-center px-[14px] md:px-[30px] xl:px-[70px]"
  >
    <AppLogo />
    <ExtendedNavigation v-if="isLoggedIn" />
    <MainNavigation v-else />
  </header>
</template>
