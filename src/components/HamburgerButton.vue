<script setup lang="ts">
const emits = defineEmits<{ (e: 'btn-click'): void }>();

const handleClick = () => emits('btn-click');
</script>

<template>
  <div
    @click="handleClick"
    class="flex flex-col justify-center items-center w-11 h-11 cursor-pointer transition-opacity hover:opacity-70 xl:hidden"
  >
    <div
      class="absolute bg-white w-7 h-[3px] before:absolute before:bg-white before:w-7 before:h-[3px] before:content-[''] before:-mt-[10px] after:absolute after:bg-white after:w-7 after:h-[3px] after:content-[''] after:mt-[10px]"
    ></div>
  </div>
</template>
