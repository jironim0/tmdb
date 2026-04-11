import { FilterDropDown } from "./FilterDropDown";
import { FilterRangeInput } from "./FilterRangeInput";
import { FilterGenre } from "./FilterGenre";
import { MyButton } from "@/shared/ui/MyButton";
import type { useMovieFilters } from "@/entities/movie/hooks/useMovieFilter";

import s from "./s.module.css";


interface Props {
  filters: ReturnType<typeof useMovieFilters>;
}

export function MovieFilters({ filters }: Props) {
  const {
    rangeValue,
    selectedGenres,
    sortBy,
    setRangeValue,
    setSelectedGenres,
    setSortBy,
    resetFilters
  } = filters;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  const handleClick = (genreId: number) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId],
    );
  };

  return (
    <div className={s.filter}>
      <FilterDropDown sortBy={sortBy} setSortBy={setSortBy} />
      <FilterRangeInput handleChange={handleChange} rangeValue={rangeValue} />
      <FilterGenre handleClick={handleClick} selectedGenres={selectedGenres} />
      <MyButton onClick={resetFilters} className={s.reset__button}>Reset</MyButton>
    </div>
  );
}
