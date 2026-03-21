import s from "./s.module.css";
import { MovieList } from "@/widgets/movie-list";
import { MyButton } from "@/shared/ui/MyButton";
import { useSearchFilters } from "../model/useSearchFilters";


export function SearchPage() {

  const {
    searchResult,
    inputValue,
    setInputValue,
    handleSearch,
    handleClear,
    query,
    movies,
  } = useSearchFilters()

  return (
    <div className={s.container}>
      <div className={s.search__section}>
        <input
          type="text"
          placeholder="Search the movie..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MyButton onClick={handleSearch} disabled={!inputValue.trim()}>
          Search
        </MyButton>
        {query && (
          <MyButton variant="secondary" onClick={handleClear}>
            Clear
          </MyButton>
        )}
      </div>
      <span className={s.search__result}>{searchResult}</span>
      {query && movies && (
        <MovieList data={movies.results} totalPages={movies.total_pages} />
      )}
    </div>
  );
}
