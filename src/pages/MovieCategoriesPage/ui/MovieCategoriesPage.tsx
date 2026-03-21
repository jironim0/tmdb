import { useFetchMoviesByCategoryQuery } from "@/entities/movie/api/moviesApi";
import { MovieList } from "@/widgets/movie-list";
import { CategorySelector } from "./CategorySelector";
import { useCategory } from "../model/useCategory";

import s from "./s.module.css";

export function MovieCategoriesPage() {
  const category = useCategory();

  const { data } = useFetchMoviesByCategoryQuery(category.queryParams);

  if (!data) return "Error";

  return (
    <div className={s.container}>
      <CategorySelector category={category} />

      <MovieList
        key={category.currentCategory}
        data={data.results}
        totalPages={data.total_pages}
      />
    </div>
  );
}
