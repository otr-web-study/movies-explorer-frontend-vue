<script setup lang="ts">
import { useField } from 'vee-validate';

interface InputProps {
  name: string;
  class?: string;
  errorClass?: string;
  placeholder?: string;
  autocomplete?: string;
  type?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  autoComplete: 'off',
  type: 'text',
});

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <input
    v-model="value"
    class="pb-[10px] bg-[#202020] text-white text-[14px] leading-[17px] border-b border-solid border-b-[#424242] focus-visible:outline-none focus-visible:border-b focus-visible:border-solid focus-visible:border-b-[#4285F4]"
    :class="props.class"
    :type="props.type"
    :placeholder="props.placeholder"
    :autocomplete="props.autocomplete"
  />
  <span
    class="min-h-[12px] my-[6px] text-[#EE3465] text-[10px] leading-[12px] opacity-0 transition-opacity"
    :class="[
      {
        'opacity-100': errorMessage,
      },
      props.errorClass,
    ]"
    >{{ errorMessage }}</span
  >
</template>
