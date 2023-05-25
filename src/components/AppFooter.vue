<script setup lang="ts">
import ExternalLink from './ExternalLink.vue';
</script>

<template>
  <footer class="bg-[#202020] px-[10px] pt-[79px] pb-[10px] md:px-[30px] md:pb-[20px] xl:px-[70px]">
    <h2
      class="text-[#8B8B8B] text-center border-b border-solid border-b-[#424242] pb-[21px] text-[12px] leading-[14.5px] md:pb-[20px] md:text-[13px] md:leading-[16px]"
    >
      Учебный проект Яндекс.Практикум х BeatFilm.
    </h2>
    <div
      class="mt-[30px] flex flex-col-reverse items-center md:flex-row md:justify-between md:mt-5"
    >
      <p class="mt-[30px] text-[12px] leading:[14.5px] md:mt-0 md:text-[13px] md:leading-[16px]">
        &copy; 2023
      </p>
      <nav>
        <ul class="flex flex-col gap-3 items-center md:gap-5 md:flex-row">
          <li>
            <ExternalLink
              href="https://practicum.yandex.ru/"
              class="!text-[12px] !leading:[14.5px] md:!text-[12px] md:!leading:[14.5px]"
              >Яндекс.Практикум</ExternalLink
            >
          </li>
          <li>
            <ExternalLink
              href="https://github.com/otr-web-study"
              class="!text-[12px] !leading:[14.5px] md:!text-[12px] md:!leading:[14.5px]"
              >Github</ExternalLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
