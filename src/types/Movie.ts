interface ProtoMovie {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  trailerLink: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
}

export interface Movie extends ProtoMovie {
  image: string;
  thumbnail: string;
}

export interface ExternalMovie extends ProtoMovie {
  image: { url: string; formats: { thumbnail: { url: string } } };
  id: number;
}

export interface SavedMovie extends Movie {
  _id: string;
}

export interface PreparedMovie extends Movie {
  saved: boolean;
}
