<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import HamburgerButton from './HamburgerButton.vue';
import AppLink from './AppLink.vue';
import CloseButton from './CloseButton.vue';
import AppAvatar from './UI/AppAvatar.vue';

const isHamburgerToggle = ref(false);

const handleHamburgerToggle = () => {
  isHamburgerToggle.value = !isHamburgerToggle.value;
};

const handleResize = () => {
  if (window.innerWidth > 1279) {
    isHamburgerToggle.value = false;
  }
};

watchEffect(() => {
  if (isHamburgerToggle.value) {
    window.addEventListener('resize', handleResize);
  } else {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<template>
  <HamburgerButton @btn-click="handleHamburgerToggle" />
  <div
    class="hidden bg-black absolute left-0 top-0 right-0 bottom-0 opacity-0 z-[1] transition-opacity"
    :class="{ '!block !opacity-30': isHamburgerToggle }"
  ></div>
  <div
    class="fixed right-0 top-0 flex flex-col items-center z-[1] bg-[#202020] h-[100vh] w-[100vw] translate-x-full transition-transform md:w-[68vw]"
    :class="{ '!translate-x-0': isHamburgerToggle }"
  >
    <CloseButton class="self-end" @click="handleHamburgerToggle" />
    <nav class="flex flex-col gap-6 items-center mt-[115px] md:gap-7">
      <AppLink
        @click="handleHamburgerToggle"
        :to="{ name: 'home' }"
        class="text-[18px] leading-[22px] font-medium"
        :activeClass="'border-b-2 border-b-white'"
        >Главная</AppLink
      >
      <AppLink
        @click="handleHamburgerToggle"
        :to="{ name: 'movies' }"
        class="text-[18px] leading-[22px] font-medium"
        :activeClass="'border-b-2 border-b-white'"
        >Фильмы</AppLink
      >
      <AppLink
        @click="handleHamburgerToggle"
        :to="{ name: 'saved-movies' }"
        class="text-[18px] leading-[22px] font-medium"
        :activeClass="'border-b-2 border-b-white'"
        >Сохраненные фильмы</AppLink
      >
      <AppLink
        @click="handleHamburgerToggle"
        :to="{ name: 'profile' }"
        class="text-[18px] leading-[22px] font-medium inline-flex items-center gap-[13px] mt-[50vh]"
        :activeClass="'border-b-2 border-b-white'"
      >
        Аккаунт
        <AppAvatar />
      </AppLink>
    </nav>
  </div>
</template>
