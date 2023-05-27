<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useField, useForm, useIsFormValid, useIsFormDirty } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import { useUserStore } from '@/stores/user';

const { user: currentUser } = storeToRefs(useUserStore());

const schema = toTypedSchema(
  object({
    name: string()
      .required('Поле обязательно к заполнению.')
      .min(2, 'Миниальная длина поля 2 символа.')
      .max(30, 'Максимальная длина поля 30 символов.')
      .matches(
        new RegExp('[ A-Za-zА-Яа-яёЁ-]+'),
        'Поле может содержать только символы русского и английского алфавита.',
      ),
    email: string().required('Поле обязательно к заполнению.').email('Введите корректный email.'),
  }),
);

const initialValues = {
  name: currentUser.value?.name ?? '',
  email: currentUser.value?.email ?? '',
};

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues,
});
const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');

const isValid = useIsFormValid();
const isDirty = useIsFormDirty();
const disabled = computed(() => {
  return (
    !isValid.value ||
    !isDirty.value ||
    (name.value === currentUser.value?.name && email.value === currentUser.value?.email)
  );
});

const onSubmit = handleSubmit((values) => console.log(values));
</script>

<template>
  <ContentContainer class="!min-h-[100vh]">
    <AppHeader />
    <form
      name="profileForm"
      id="profileForm"
      class="frex flex-col self-center w-[260px] pt-[70px] min-[500px]:w-[410px] min-[500px]:pt-[236px] xl:pt-[74px]"
      noValidate
      @submit.prevent="onSubmit"
    >
      <h1
        class="text-center text-[24px] leading-[29px] font-medium mb-20 min-[500px]:mb-24 xl:mb-[123px]"
      >
        {{ `Привет, ${currentUser?.name ?? ''}!` }}
      </h1>
      <label
        class="flex justify-between pb-4 text-[11px] leading-[13px] font-medium border-b border-b-[#424242]"
      >
        Имя
        <input
          name="name"
          id="name"
          class="text-end text-white text-[11px] leading-[13px] bg-[#202020] rounded-[3px] border-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#424242]"
          v-model="name"
          autoComplete="off"
        />
      </label>
      <span
        class="block min-h-[12px] mb-[5px] pb-[5px] text-[#EE3465] text-[10px] leading-[12px] opacity-0 transition-opacity"
        :class="{
          'opacity-100': nameError,
        }"
        >{{ nameError }}</span
      >
      <label
        class="flex justify-between pb-4 text-[11px] leading-[13px] font-medium border-b border-b-[#424242]"
      >
        E-mail
        <input
          name="email"
          id="email"
          class="text-end text-white text-[11px] leading-[13px] bg-[#202020] rounded-[3px] border-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#424242]"
          v-model="email"
          autoComplete="off"
        />
      </label>
      <span
        class="block min-h-[12px] mb-[5px] pb-[5px] text-[#EE3465] text-[10px] leading-[12px] opacity-0 transition-opacity"
        :class="{
          'opacity-100': nameError,
        }"
        >{{ emailError }}</span
      >
      <button
        type="submit"
        class="w-full mt-[362px] text-[12px] leading-[15px] transition-opacity hover:opacity-80 min-[500px]:mt-[193px] min-[500px]:text-[13px] min-[500px]:leading-[16px] xl:mt-[203px]"
        :class="{
          '!pointer-events-none select-none opacity-50': disabled,
        }"
        :disabled="disabled"
      >
        Редактировать
      </button>
      <button
        class="w-full mt-[15px] text-[#EE3465] font-medium text-[12px] leading-[15px] transition-opacity hover:opacity-80 min-[500px]:text-[13px] min-[500px]:leading-[16px]"
      >
        Выйти из аккаунта
      </button>
    </form>
  </ContentContainer>
</template>
