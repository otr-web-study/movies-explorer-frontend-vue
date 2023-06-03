import { DURATION_SHORT_MOVIE } from '@/constants';
import type { Movie } from '@/types';

interface IsMovieMatched {
  (movie: Movie, searchString: string, onlyShorh: boolean): boolean;
}

export const isMovieMatched: IsMovieMatched = (movie, searchString, onlyShort) => {
  return (
    (!onlyShort &&
      (movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchString.toLowerCase()))) ||
    (onlyShort &&
      movie.duration <= DURATION_SHORT_MOVIE &&
      (movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchString.toLowerCase())))
  );
};
