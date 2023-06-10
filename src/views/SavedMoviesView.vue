<script setup lang="ts">
import ContentContainer from '@/components/UI/ContentContainer.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SearchForm from '@/components/SearchForm.vue';
import MoviesCard from '@/components/MoviesCard.vue';
import MoviesListContainer from '@/components/MoviesListContainer.vue';
import MoviesListEmpty from '@/components/MoviesListEmpty.vue';
import { useSavedMovies } from '@/hooks/useSavedMovies';
import { useDeleteMovie } from '@/hooks/useDeleteMovie';

const { movies, searchString, onlyShort, handleSearch } = useSavedMovies();
const { deleteMovie } = useDeleteMovie();
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
        <MoviesListEmpty v-if="!movies.length && (searchString || onlyShort)" />
        <MoviesListContainer v-else>
          <li v-for="movie in movies" :key="movie.movieId">
            <MoviesCard :movie="movie">
              <button
                class="absolute right-[14px] top-[14px] h-[21px] pointer w-[21px] bg-[#313131] rounded-[50px]"
                style="background-image: url(/images/card_delete.svg)"
                @click="deleteMovie(movie._id)"
              ></button>
            </MoviesCard>
          </li>
        </MoviesListContainer>
      </section>
    </div>
    <AppFooter />
  </ContentContainer>
</template>
