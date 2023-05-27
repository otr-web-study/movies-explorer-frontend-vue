<script setup lang="ts">
import { useRouter } from 'vue-router';
import ContentContainer from '@/components/UI/ContentContainer.vue';

const router = useRouter();
</script>

<template>
  <ContentContainer>
    <section className="min-h-[100vh] flex flex-col justify-center items-center">
      <div className="relative flex flex-col justify-center">
        <h1
          className="text-[80px] leading-[97px] min-[500px]:text-[140px] min-[500px]:leading-[169px]"
        >
          404
        </h1>
        <p
          className="mt-[5px] text-center text-[12px] leading-[15px] min-[500px]:text-[16px] min-[500px]:leading-[19px]"
        >
          Страница не найдена
        </p>
        <button
          className="transition-opacity hover:opacity-80 absolute left-2/4 bottom-[-284px] -translate-x-2/4 text-[#4285F4] text-[12px] leading-[15px] min-[500px]:text-[14px] min-[500px]:leading-[17px]"
          @click="router.go(-1)"
        >
          Назад
        </button>
      </div>
    </section>
  </ContentContainer>
</template>
