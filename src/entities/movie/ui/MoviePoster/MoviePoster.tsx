import { MovieCard } from "@/features/movie-card";
import s from "./s.module.css";
import type { Favorite, MovieType } from "@/entities/movie/api/moviesApi.type";

interface Props {
  movies: MovieType[] | Favorite[];
  setIsFavorites?: (movie: Favorite[]) => void;
  flex?: string
}

export function MoviePoster({ movies, setIsFavorites, flex }: Props) {
  return (
    <div className={s.posters}>
      {movies?.map((item) => (
        <MovieCard
          key={item.id}
          movie={item}
          setIsFavorites={setIsFavorites}
          flex={flex}
        />
      ))}
    </div>
  );
}
