import { WatchedModel } from "../models/movie.model";
import { Watched } from "./Watched";

interface Prop {
  watched: WatchedModel[];
}

export const WatchList = ({ watched }: Prop) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Watched key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};
