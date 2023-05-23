<script setup lang="ts">
interface ExternalLinkProps {
  href: string;
  class?: string;
}
const props = defineProps<ExternalLinkProps>();
</script>

<template>
  <a
    class="cursor-pointer text-white uno-underline transition-opacity hover:opacity-70"
    target="_blank"
    rel="noreferrer"
    v-bind="props"
  >
    <slot></slot>
  </a>
</template>
