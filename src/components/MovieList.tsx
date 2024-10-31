import { MovieModel } from "../models/movie.model";
import { Movie } from "./Movie";

interface Prop {
  movies: MovieModel[];
}

export const MovieList = ({ movies }: Prop) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};
