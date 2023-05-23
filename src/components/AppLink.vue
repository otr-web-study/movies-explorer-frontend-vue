<script setup lang="ts">
interface LinkProps {
  to: {
    name: string;
  };
  class?: string;
}
const props = defineProps<LinkProps>();
</script>

<template>
  <RouterLink
    class="cursor-pointer text-white no-underline transition-opacity hover:opacity-70"
    v-bind="props"
  >
    <slot></slot>
  </RouterLink>
</template>
