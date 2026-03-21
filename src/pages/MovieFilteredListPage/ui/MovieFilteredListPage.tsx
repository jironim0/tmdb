import s from "./s.module.css";
import {
  useGetMoviesQuery,
} from "@/entities/movie/api/moviesApi";

import { MovieList } from "@/widgets/movie-list";
import { useMovieFilters } from "../model/useMovieFilter";
import { MovieFilters } from "@/widgets/movie-filters";

export function MovieFilteredListPage() {
  const filters = useMovieFilters();

  const { data: movies } = useGetMoviesQuery(filters.queryParams);

  if (!movies) return "error";
  return (
    <div className={s.container}>
      <MovieFilters filters={filters}/>
      <div className={s.movies}>
        <MovieList data={movies.results} totalPages={movies.total_pages} />
      </div>
    </div>
  );
}
