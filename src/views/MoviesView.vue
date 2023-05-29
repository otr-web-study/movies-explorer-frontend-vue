<script setup lang="ts">
import { ref } from 'vue';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SearchForm from '@/components/SearchForm.vue';

const isMoreMovies = ref(true);
const onMoreClick = () => {};
</script>

<template>
  <ContentContainer class="!justify-between min-h-[100vh]">
    <div>
      <AppHeader />
      <section class="flex flex-col bg-[#202020]">
        <SearchForm :search-string="'tst'" :only-short="true" />
        <button
          v-if="isMoreMovies"
          class="w-60 h-9 mt-[50px] mb-20 mx-auto bg-[#2F2F2F] text-[12px] leading-[15px] text-white font-medium rounded-md transition-opacity hover:opacity-80 md:w-80"
          @click="onMoreClick"
        >
          Ещё
        </button>
      </section>
    </div>
    <AppFooter />
  </ContentContainer>
</template>

<!-- <MoviesCardList movies="{movies}" /> -->

<!-- {isPending && <Preloader />} -->
