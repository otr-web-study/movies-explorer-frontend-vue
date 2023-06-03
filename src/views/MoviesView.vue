<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SearchForm from '@/components/SearchForm.vue';
import MoviesCard from '@/components/MoviesCard.vue';
import MoviesListContainer from '@/components/MoviesListContainer.vue';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { useMoviesLimits } from '@/hooks/useMoviesLimits';

const MoviesStore = useMoviesStore();
const { handleSearch, nextPage } = MoviesStore;
const { onlyShort, searchString, visibleMovies, isMoreMovies } = storeToRefs(MoviesStore);
useMoviesLimits();
</script>

<template>
  <ContentContainer class="!justify-between min-h-[100vh]">
    <div>
      <AppHeader />
      <section class="flex flex-col bg-[#202020]">
        <SearchForm
          :search-string="searchString"
          :only-short="onlyShort"
          @search-submit="handleSearch"
        />
        <MoviesListContainer>
          <li v-for="movie in visibleMovies" :key="movie.movieId">
            <MoviesCard :movie="movie" />
          </li>
        </MoviesListContainer>
        <button
          v-if="isMoreMovies"
          class="w-60 h-9 mt-[50px] mb-20 mx-auto bg-[#2F2F2F] text-[12px] leading-[15px] text-white font-medium rounded-md transition-opacity hover:opacity-80 md:w-80"
          @click="nextPage"
        >
          Ещё
        </button>
      </section>
    </div>
    <AppFooter />
  </ContentContainer>
</template>

<!-- {isPending && <Preloader />} -->
