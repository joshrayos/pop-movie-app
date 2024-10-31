import { ChangeEventHandler, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { MovieModel, WatchedModel } from "./models/movie.model";
import { ListBox } from "./components/ListBox";
import { MovieList } from "./components/MovieList";
import { WatchStats } from "./components/WatchStats";
import { WatchList } from "./components/WatchList";
import { ResultText } from "./components/ResultText";
import { Searchbar } from "./components/Searchbar";
import { Logo } from "./components/Logo";

const tempWatchedData: WatchedModel[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const tempMovieData: MovieModel[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  const handleQueryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(() => e.target.value);
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Searchbar query={query} onQueryChange={handleQueryChange} />
        <ResultText movieLength={movies.length} />
      </Navbar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>

        <ListBox>
          <WatchStats watched={watched} />
          <WatchList watched={watched} />
        </ListBox>
      </Main>
    </>
  );
}
