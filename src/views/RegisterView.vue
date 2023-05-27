<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useIsFormValid, useIsFormDirty } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppLogo from '@/components/UI/AppLogo.vue';
import AppLink from '@/components/AppLink.vue';
import InputWhithValidation from '@/components/InputWhithValidation.vue';

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
    password: string()
      .required('Поле обязательно к заполнению.')
      .min(8, 'Минимальная длина поля 8 символов.'),
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
    <section class="flex flex-col w-[260px] self-center min-[500px]:w-[396px]">
      <form
        name="registerForm"
        id="registerForm"
        class="flex flex-col justify-between min-h-[100vh] pt-[56px] pb-[30px] min-[500px]:pb-[56px] xl:py-[70px]"
        noValidate
        @submit.prevent="onSubmit"
      >
        <div class="flex flex-col">
          <AppLogo class="!self-center min-[500px]:!self-start" />
          <h1
            class="text-[24px] leading-[29px] font-medium self-center mt-[50px] mb-20 min-[500px]:self-start min-[500px]:mt-12 min-[500px]:mb-10"
          >
            Добро пожаловать!
          </h1>
          <label class="mb-[5px] text-[10px] leading-[12px] text-[#8B8B8B]"> Имя </label>
          <InputWhithValidation name="name" />
          <label class="mb-[5px] text-[10px] leading-[12px] text-[#8B8B8B]"> E-mail </label>
          <InputWhithValidation name="email" />
          <label class="mb-[5px] text-[10px] leading-[12px] text-[#8B8B8B]"> Пароль </label>
          <InputWhithValidation name="password" type="password" class="!text-[#EE3465]" />
        </div>
        <div class="flex flex-col">
          <button
            type="submit"
            class="transition-opacity hover:opacity-80 h-[45px] bg-[#4285F4] text-white border-none rounded-[3px] font-medium text-[12px] leading-[15px] min-[500px]:text-[14px] min-[500px]:leading-[17px]"
            :class="{
              '!text-black pointer-events-none !select-none !opacity-50': disabled,
            }"
            :disabled="disabled"
          >
            Зарегистрироваться
          </button>
          <div class="flex justify-center gap-[6px] my-4">
            <p
              class="text-[#8B8B8B] text-[12px] leading-[15px] min-[500px]:text-[14px] min-[500px]:leading-[17px]"
            >
              Уже зарегистрированы?
            </p>
            <AppLink
              :to="{ name: 'signin' }"
              class="!text-[#4285F4] !text-[12px] !leading-[15px] min-[500px]:!text-[14px] min-[500px]:!leading-[17px]"
            >
              Войти
            </AppLink>
          </div>
        </div>
      </form>
    </section>
  </ContentContainer>
</template>
