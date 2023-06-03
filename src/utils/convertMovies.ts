import type { ExternalMovie } from '@/types';
import type { Movie } from '@/types';

const DEFAULT_VALUE = 'unknown';
export const convertMovies = (extMovies: ExternalMovie[]): Movie[] => {
  return extMovies
    .map((m) => ({
      country: m.country || DEFAULT_VALUE,
      director: m.director || DEFAULT_VALUE,
      duration: m.duration,
      year: m.year || DEFAULT_VALUE,
      description: m.description || DEFAULT_VALUE,
      image: m.image?.url || DEFAULT_VALUE,
      trailerLink: m.trailerLink || DEFAULT_VALUE,
      thumbnail: m.image?.formats?.thumbnail?.url || DEFAULT_VALUE,
      movieId: m.id,
      nameRU: m.nameRU || DEFAULT_VALUE,
      nameEN: m.nameEN || DEFAULT_VALUE,
    }))
    .filter((m) => !!m.image);
};
