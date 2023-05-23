<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
</script>

<template>
  <section
    className="flex flex-col bg-[#202020] py-[70px] px-[18px] md:bg-[#272727] md:py-[90px] md:px-[50px] xl:py-[100px] xl:px-[70px]"
  >
    <AppTitle>Технологии</AppTitle>
    <h3
      className="mx-auto mt-[89px] text-3xl tracking-[-0.04em] md:mt-20 md:text-[50px] md:leading-[58px] xl:mt-[90px]"
    >
      7 технологий
    </h3>
    <p
      className="mx-auto max-w-[460px] text-center tracking-[-0.04em] mt-6 text-[11px] leading-[16px] md:mt-[22px] md:text-[12px] md:leading-[18px] xl:text-sm"
    >
      На курсе и вне его были освоены сдедующие технологии, которые применены в дипломном проекте.
    </p>
    <ul
      className="flex flex-wrap gap-[10px] mx-auto mt-[50px] md:flex-nowrap md:mt-[83px] xl:mt-[100px]"
    >
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          Tailwind
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          TS
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          Vue
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          GraphQL
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          Apollo
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          Express.js
        </p>
      </li>
      <li
        className="flex justify-center items-center text-center bg-[#303030] rounded-[10px] w-[84px] h-[57px] xl:w-[90px] xl:h-[60px]"
      >
        <p
          className="text-[12px] leading-[14.5px] tracking-[-0.04em] xl:text-[14px] xl:leading-[17px]"
        >
          mongoDB
        </p>
      </li>
    </ul>
  </section>
</template>
