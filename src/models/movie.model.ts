export interface MovieModel {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedModel {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
}
