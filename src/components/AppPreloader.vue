<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted } from 'vue';
import { ENTER_KEY } from '@/constants';
import { useAppControlsStore } from '@/stores/useAppControlsStore';

const { isPending, isAuthChecked } = storeToRefs(useAppControlsStore());

const handleEnterClick = (evt: KeyboardEvent) => {
  if (evt.key === ENTER_KEY) {
    evt.preventDefault();
  }
};

onMounted(() => window.addEventListener('keydown', handleEnterClick));

onUnmounted(() => window.removeEventListener('keydown', handleEnterClick));
</script>

<template>
  <div
    v-if="isPending"
    class="flex items-center justify-center w-full h-full z-10 px-5 py-5 fixed top-0 left-0"
  >
    <div class="relative h-[100px] w-[100px]">
      <span
        class="absolute h-[100px] w-[100px] top-0 left-0 bg-[#3DDC84] rounded-[50px] after:content-[''] after:h-[100px] after:w-[100px] after:absolute after:top-0 after:left-0 after:rounded-[50px] after:bg-white after:animate-preloader-inside-white before:content-[''] before:h-[100px] before:w-[100px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-[#3DDC84] before:animate-preloader-inside-red before:z-10"
      ></span>
    </div>
    <div
      class="absolute h-full w-full bg-black opacity-20"
      :class="{
        'bg-[#202020] !opacity-100': !isAuthChecked,
      }"
    ></div>
  </div>
</template>
