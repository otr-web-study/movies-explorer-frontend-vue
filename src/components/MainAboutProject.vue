<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
</script>

<template>
  <section
    class="py-[70px] px-[18px] flex flex-col bg-[#202020] md:py-[90px] md:px-[50px] xl:py-[110px] xl:px-[70px]"
  >
    <AppTitle>О проекте</AppTitle>
    <ul class="flex flex-col mt-1 justify-between md:flex-row md:mt-[70px] md:gap-[30px] xl:gap-10">
      <li>
        <h3
          class="mt-[52px] text-[18px] leading-[22px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]"
        >
          Дипломный проект включал 5 этапов
        </h3>
        <p
          class="mt-4 text-[11px] leading-[16px] md:mt-[22px] md:text-[12px] md:leading-[18px] xl:mt-[26px] xl:text-sm"
        >
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
          доработки.
        </p>
      </li>
      <li>
        <h3
          class="mt-[52px] text-[18px] leading-[22px] tracking-[-0.04em] md:text-[20px] md:leading-[24px]"
        >
          На выполнение диплома ушло 5 недель
        </h3>
        <p
          class="mt-4 text-[11px] leading-[16px] md:mt-[22px] md:text-[12px] md:leading-[18px] xl:mt-[26px] xl:text-sm"
        >
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
          защититься.
        </p>
      </li>
    </ul>
    <div class="mt-[60px] text-center grid grid-cols-[1fr_4fr] gap-y-4 md:mt-[93px] xl:mt-[110px]">
      <p
        class="py-[11px] bg-[#3DDC84] text-black text-[11px] leading-[13px] md:py-[9px] md:text-[14px] md:leading-[17px]"
      >
        1 неделя
      </p>
      <p
        class="py-[11px] bg-[#303030] text-[11px] leading-[13px] md:py-[9px] md:text-[14px] md:leading-[17px]"
      >
        4 недели
      </p>
      <p
        class="text-[#8B8B8B] font-medium text-[11px] leading-[13px] md:text-[14px] md:leading-[17px]"
      >
        Back-end
      </p>
      <p
        class="text-[#8B8B8B] font-medium text-[11px] leading-[13px] md:text-[14px] md:leading-[17px]"
      >
        Front-end
      </p>
    </div>
  </section>
</template>
