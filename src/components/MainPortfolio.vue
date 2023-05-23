<script setup lang="ts">
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <section
    class="bg-[#202020] px-[14px] pb-[70px] md:px-[50px] md:pb-[90px] xl:px-[70] xl:pb-[125px]"
  >
    <h2 class="text-[#8B8B8B] text-sm md:text-[18px] md:leading-[20px]">Портфолио</h2>
    <ul class="mt-10 md:mt-[50px]">
      <li class="mt-5 pb-[19px] border-b border-b-solid border-b-[#424242]">
        <ExternalLink
          href="https://otr-web-study.github.io/how-to-learn/"
          class="flex justify-between tracking-[-0.04em] text-lg md:text-[28px] md:leading-[50px] xl:text-[30px]"
        >
          Статичный сайт
          <span>&#8599;</span>
        </ExternalLink>
      </li>
      <li class="mt-5 pb-[19px] border-b border-b-solid border-b-[#424242]">
        <ExternalLink
          href="https://otr-web-study.github.io/my-third-project/"
          class="flex justify-between tracking-[-0.04em] text-lg md:text-[28px] md:leading-[50px] xl:text-[30px]"
        >
          Адаптивный сайт
          <span>&#8599;</span>
        </ExternalLink>
      </li>
      <li class="mt-5 pb-[19px]">
        <ExternalLink
          href="https://frontend.otrproject.nomoredomains.sbs"
          class="flex justify-between tracking-[-0.04em] text-lg md:text-[28px] md:leading-[50px] xl:text-[30px]"
        >
          Одностраничное приложение
          <span>&#8599;</span>
        </ExternalLink>
      </li>
    </ul>
  </section>
</template>
