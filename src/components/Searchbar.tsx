import { ChangeEvent } from "react";

interface Prop {
  query: string;
  onQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Searchbar = ({ query, onQueryChange }: Prop) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={onQueryChange}
    />
  );
};
