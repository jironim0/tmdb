import { useDebounce } from "@/shared/lib/useDebounce";
import { useState } from "react";
import { useSearchParams } from "react-router";

import type { SortBy } from "@/widgets/movie-filters/ui/FilterDropDown/model/consts";

export const useMovieFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rangeValue, setRangeValue] = useState<number>(0);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("popularity.desc");

  const { debounce: debouncedRange } = useDebounce(rangeValue);
  const { debounce: debouncedGenres } = useDebounce(selectedGenres.join(","));

  const resetFilters = () => {
    setRangeValue(0);
    setSelectedGenres([]);
    setSortBy("popularity.desc");
    setSearchParams({ page: "1" });
  };

  const queryParams = {
    with_genres: debouncedGenres || undefined,
    sort_by: sortBy,
    vote_average_gte: debouncedRange || undefined,
    vote_average_lte: 10,
    page: Number(searchParams.get("page")) || 1,
  };

  return {
    rangeValue,
    selectedGenres,
    sortBy,
    setRangeValue,
    setSelectedGenres,
    setSortBy,
    queryParams,
    resetFilters,
  };
};
