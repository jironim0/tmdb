import s from "./s.module.css";
import {
  useGetMoviesQuery,
} from "@/entities/movie/api/moviesApi";

import { MovieList } from "@/widgets/movie-list";
import { MovieFilters } from "@/widgets/movie-filters";
import { useMovieFilters } from "@/entities/movie/hooks/useMovieFilter";

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
