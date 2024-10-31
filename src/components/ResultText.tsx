interface Prop {
  movieLength: number;
}

export const ResultText = ({ movieLength }: Prop) => {
  return (
    <p className="num-results">
      Found <strong>{movieLength}</strong> results
    </p>
  );
};
