<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useMoviesControlsStore } from '@/stores/moviesControls';

const schema = toTypedSchema(
  object({
    search: string().required('Поле обязательно к заполнению.'),
  }),
);

const { handleSubmit } = useForm({ validationSchema: schema });

const { value: search, errorMessage } = useField('search');

const onSubmit = handleSubmit((values) => console.log(values));
</script>

<template>
  <form
    class="flex flex-col pt-20 px-[14px] md:px-[30px] xl:px-[70px]"
    @submit.prevent="onSubmit"
    name="searchForm"
    id="searchForm"
    noValidate
  >
    <div class="search-form__container">
      <input
        v-model="search"
        class="search-form__input"
        placeholder="Фильм"
        autoComplete="off"
        name="search"
        id="search"
      />
      <Button class="search-form__button-submit" type="submit" />
      <InputError
        class="search-form__error"
        isValid="{searchString.isValid}"
        errorMessage="{MESSAGE_NEED_KEYWORD}"
      />
    </div>
    <FilterCheckbox title="Короткометражки" onChange="{handleCheckboxChange}" value="{onlyShort}" />
    <div class="search-form__underline"></div>
  </form>
</template>
