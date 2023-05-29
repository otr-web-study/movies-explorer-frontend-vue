export interface Movie {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
}

export interface ExternalMovie {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: { url: string; formats: { thumbnail: { url: string } } };
  trailerLink: string;
  id: number;
  nameRU: string;
  nameEN: string;
}
