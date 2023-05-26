<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <section
    class="bg-[#202020] py-[70px] px-[14px] md:py-[90px] md:px-[50px] xl:pt-[110px] xl:pb-[101px] xl:px-[70px]"
  >
    <AppTitle>Студент</AppTitle>
    <div
      class="mt-[60px] flex flex-col-reverse justify-start md:flex-row md:justify-between md:mt-[66px]"
    >
      <div class="flex flex-col">
        <h3
          class="mt-10 text-3xl tracking-[-0.04em] md:mt-0 md:text-[40px] md:leading-[40px] xl:text-[50px] xl:leading-[58px]"
        >
          Олег
        </h3>
        <p
          class="mt-5 font-medium text-[11px] leading-[11px] md:mt-4 md:text-[12px] md:leading-[18px] xl:mt-[18px] xl:text-[18px] xl:leading-[20px]"
        >
          Full-stack разработчик, 44 года
        </p>
        <p
          class="max-w-[600px] mt-5 mb-10 text-[11px] leading-[16px] md:mb-auto md:pr-[49px] md:text-[13px] md:leading-[18px] xl:mt-[26px] xl:text-[14px] xl:leading-[22px]"
        >
          Ищу работу по специальности
        </p>
        <ExternalLink
          href="https://github.com/otr-web-study"
          class="!font-medium !text-[14px] !leading-[17px]"
        >
          Github
        </ExternalLink>
      </div>
      <img
        class="w-full h-full mx-auto rounded-[10px] object-cover min-[419px]:w-[290px] min-[419px]:h-[352px] md:mx-0 md:w-[255px] md:h-[307px] xl:w-[270px] xl:h-[327px]"
        alt="Фото студента"
        src="/images/Python.jpg"
      />
    </div>
  </section>
</template>
