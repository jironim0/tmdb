import { useSearchMoviesQuery } from "@/entities/movie/api/moviesApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("value") || "";
  const page = searchParams.get("page") || 1;

  const { data: movies, isFetching } = useSearchMoviesQuery({
    value: query,
    page: Number(page),
  });

  const getSearchResultLabel = () => {
    if (!query.trim()) return "Enter a movie title to start searching.";

    if (!isFetching && movies?.results.length === 0) {
      return `No matches found for "${query}"`;
    }

    return `Search result: "${query}"`;
  };

  const searchResult = getSearchResultLabel();

  const [inputValue, setInputValue] = useState(query);

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchParams({
        value: inputValue,
        page: "1",
      });
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSearchParams({});
  };

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return {
    searchResult,
    inputValue,
    setInputValue,
    handleSearch,
    handleClear,
    query,
    movies,
  };
};
