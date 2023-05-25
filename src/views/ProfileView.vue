<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useIsFormValid, useIsFormDirty } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import InputWhithValidation from '@/components/InputWhithValidation.vue';
import AppHeader from '@/components/AppHeader.vue';

const currentUser = {
  name: 'tst',
  email: 'tst@tst',
};

const schema = toTypedSchema(
  object({
    name: string()
      .required('Поле обязательно к заполнению.')
      .min(2, 'Миниальная длина поля 2 символа.')
      .max(30, 'Максимальная длина поля 30 символов.')
      .matches(
        new RegExp('[ A-Za-zА-Яа-яёЁ-]+'),
        'Поле может содержать только символы русского и английского алфавита.',
      )
      .default(currentUser.name),
    email: string()
      .required('Поле обязательно к заполнению.')
      .email('Введите корректный email.')
      .default(currentUser.email),
  }),
);

const { handleSubmit } = useForm({ validationSchema: schema });

const onSubmit = handleSubmit((values) => console.log(values));

const isValid = useIsFormValid();
const isDirty = useIsFormDirty();
const disabled = computed(() => {
  return !isValid.value || !isDirty.value;
});
</script>

<template>
  <ContentContainer>
    <AppHeader />
    <form
      name="profileForm"
      id="profileForm"
      class="frex flex-col self-center w-[260px] pt-[70px] [@media(min-width:500px)]:w-[410px] [@media(min-width:500px)]:pt-[236px] xl:pt-[74px]"
      noValidate
      @submit.prevent="onSubmit"
    ></form>
  </ContentContainer>
</template>
