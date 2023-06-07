<script setup lang="ts">
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import type { SearchArgs } from '@/types';

interface SearchFormProps extends SearchArgs {
  searchStringRequired?: boolean;
}

interface SearchSubmitEvent {
  (e: 'search-submit', value: SearchArgs): void;
}

const props = defineProps<SearchFormProps>();
const emits = defineEmits<SearchSubmitEvent>();

let searchStringValidation = string();
if (props.searchStringRequired) {
  searchStringValidation = searchStringValidation.required('Нужно ввести ключевое слово.');
}

const schema = toTypedSchema(
  object({
    search: searchStringValidation,
  }),
);

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: { search: props.searchString },
});

const { value: search, errorMessage } = useField<string>('search');
const onlyShort = ref(props.onlyShort);

const onSubmit = handleSubmit(() =>
  emits('search-submit', { searchString: search.value, onlyShort: onlyShort.value }),
);

const handleChecboxChange = (value: boolean) => {
  onlyShort.value = value;
  emits('search-submit', { searchString: search.value, onlyShort: onlyShort.value });
};
</script>

<template>
  <form
    class="flex flex-col pt-20 px-[14px] md:px-[30px] xl:px-[70px]"
    @submit.prevent="onSubmit"
    name="searchForm"
    id="searchForm"
    noValidate
  >
    <div class="grid grid-cols-[1fr_min-content] items-center gap-[10px]">
      <input
        v-model="search"
        class="bg-[#2F2F2F] text-white text-[14px] leading-[18px] rounded-lg px-[13px] py-[13px] min-w-[224px] placeholder:text-[#8B8B8B] focus-visible:outline focus-visible:outline-[#8B8B8B] md:py-[16px] md:px-[20px] md:min-w-fit"
        placeholder="Фильм"
        autoComplete="off"
        name="search"
        id="search"
      />
      <button
        class="w-11 h-11 bg-[#4285F4] rounded-lg bg-no-repeat bg-center"
        style="background-image: url(/images/magnifier.svg)"
        type="submit"
      />
      <span
        class="px-[13px] min-h-[34px] my-[6px] text-[#EE3465] text-[10px] leading-[12px] opacity-0 transition-opacity md:px-5 md:min-h-[28px] xl:min-h-[16px]"
        :class="{
          'opacity-100': errorMessage,
        }"
        >{{ errorMessage }}</span
      >
    </div>
    <FilterCheckbox :checked="onlyShort" @on-change="handleChecboxChange" />
    <div class="mt-[39px] mb-[10px] border-b border-b-[#424242]"></div>
  </form>
</template>
