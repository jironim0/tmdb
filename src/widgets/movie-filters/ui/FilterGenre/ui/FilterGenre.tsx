import type { Genre } from "@/entities/movie/api/moviesApi.type";
import s from "./s.module.css";
import { MyButton } from "@/shared/ui/MyButton";
import { useGetMovieGenresQuery } from "@/entities/movie/api/moviesApi";

interface Props {
  selectedGenres: number[];
  handleClick: (genreId: number) => void;
}

export function FilterGenre({ selectedGenres, handleClick }: Props) {
  const { data } = useGetMovieGenresQuery()

  return (
    <div className={s.genres}>
      {data?.genres.map((genre: Genre) => (
        <MyButton
          onClick={() => handleClick(genre.id)}
          variant={selectedGenres.includes(genre.id) ? "primary" : "secondary"}
          key={genre.id}
        >
          {genre.name}
        </MyButton>
      ))}
    </div>
  );
}
