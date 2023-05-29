import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMoviesControlsStore = defineStore('movies-controls', () => {
  const searchString = ref<string>('');
  const onlyShort = ref<boolean>(false);
  const page = ref<number>(1);

  return { searchString, onlyShort, page };
});
