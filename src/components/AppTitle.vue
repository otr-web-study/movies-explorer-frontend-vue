<script setup lang="ts">
const props = defineProps<{ class?: string }>();
</script>

<template>
  <h2
    v-bind="props"
    class="pb-7 text-lg tracking-[-0.04em] border-b border-solid border-[#DADADA] md:pb-[23px] md:text-[22px] md:leading-[27px]"
  >
    <slot></slot>
  </h2>
</template>
