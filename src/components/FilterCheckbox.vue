<script setup lang="ts">
interface CheckboxProps {
  checked: boolean;
  title?: string;
}
const props = withDefaults(defineProps<CheckboxProps>(), { title: 'Короткометражки' });
const emits = defineEmits<{ (e: 'on-change', value: boolean): void }>();

const handleChange = (evt: Event) => emits('on-change', (evt.target as HTMLInputElement).checked);
</script>

<template>
  <div class="flex gap-3 self-center">
    <label class="relative inline-block w-9 h-5">
      <input
        :checked="props.checked"
        @change="handleChange"
        type="checkbox"
        class="peer w-0 h-0 opacity-0"
      />
      <span
        class="absolute cursor-pointer top-0 left-0 bottom-0 right-0 rounded-[20px] bg-[#EBEBEB] transition-all duration-300 before:absolute before:content-[''] before:w-4 before:h-4 before:left-[2px] before:bottom-[2px] before:rounded-[50%] before:bg-[#F5F5F5] before:transition-all before:duration-300 before:box-shasow-switcher peer-checked:bg-[#3DDC84] peer-checked:before:bg-white peer-checked:before:translate-x-4"
      ></span>
    </label>
    <span class="text-[12px] leading-[18px]">{{ props.title }}</span>
  </div>
</template>
