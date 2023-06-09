<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SearchForm from '@/components/SearchForm.vue';
import MoviesCard from '@/components/MoviesCard.vue';
import MoviesListContainer from '@/components/MoviesListContainer.vue';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { useMoviesLimits } from '@/hooks/useMoviesLimits';
import { useMovies } from '@/hooks/useMovies';
import { useCreateMovie } from '@/hooks/useCreateMovie';
import { useDeleteMovie } from '@/hooks/useDeleteMovie';
import type { PreparedMovie, SavedMovie } from '@/types';

useMoviesLimits();
const moviesStore = useMoviesStore();
const { handleSearch, nextPage } = moviesStore;
const { onlyShort, searchString, visibleMovies, isMoreMovies } = storeToRefs(moviesStore);
const { movies: savedMovies } = useMovies();
const { createMovie } = useCreateMovie();
const { deleteMovie } = useDeleteMovie();

const preparedMovies = computed(() =>
  visibleMovies.value.map((m) => ({
    ...m,
    saved: savedMovies.value.findIndex((movie) => movie.movieId === m.movieId) !== -1,
  })),
);

const handleLikeClick = (preparedMovie: PreparedMovie) => {
  if (preparedMovie.saved) {
    const id = savedMovies.value.find((m) => m.movieId === preparedMovie.movieId)?._id;
    if (id) {
      deleteMovie(id);
    }
  } else {
    const movie: Partial<PreparedMovie> = { ...preparedMovie };
    delete movie.saved;
    createMovie(movie as SavedMovie);
  }
};
</script>

<template>
  <ContentContainer class="!justify-between min-h-[100vh]">
    <div>
      <AppHeader />
      <section class="flex flex-col bg-[#202020]">
        <SearchForm
          :search-string="searchString"
          :only-short="onlyShort"
          :search-string-required="true"
          @search-submit="handleSearch"
        />
        <MoviesListContainer>
          <li v-for="movie in preparedMovies" :key="movie.movieId">
            <MoviesCard :movie="movie">
              <button
                class="absolute right-[14px] top-[14px] h-[21px] pointer"
                :class="{
                  'w-[72px] bg-[#313131] rounded-[30px] text-[10px] leading-[9px] text-white opacity-0 transition-opacity hover:opacity-100':
                    !movie.saved,
                  'w-[21px] bg-[#EE3465] rounded-[50px]': movie.saved,
                }"
                :style="movie.saved ? 'background-image: url(/images/card_saved.svg)' : ''"
                @click="handleLikeClick(movie)"
              >
                {{ movie.saved ? '' : 'Сохранить' }}
              </button>
            </MoviesCard>
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
