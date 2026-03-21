import { useMemo } from "react";
import { getBannerImage } from "../model/getBannerImage";
import s from "./s.module.css";
import { useFetchPopularMoviesQuery } from "@/entities/movie/api/moviesApi";
import { MyButton } from "@/shared/ui/MyButton";
import { useSearchNavigation } from "../model/useSearchNavigation";
import { MainBannerSkeleton } from "./MainBannerSkeleton";

export function MainBanner() {
  const { data, isLoading } = useFetchPopularMoviesQuery({ page: 1 });

  const { inputValue, setInputValue, handleSearch } = useSearchNavigation();

  const backgroundStyle = useMemo(() => {
    if (!data) return {};
    return {
      backgroundImage: `linear-gradient(
        rgba(var(--gradient-color), 0) 0%,
        rgb(var(--gradient-color)) 90%
      ), url(${getBannerImage(data.results)})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }, [data]);

  if (isLoading) {
    return <MainBannerSkeleton />;
  }
  
  return (
    <section className={s.section} style={backgroundStyle}>
      <div className={s.content}>
        <span className={s.content__titile}>WELCOM</span>
        <div className={s.input__group}>
          <input
            value={inputValue}
            className={s.main__input}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search the movie..."
          />
          <MyButton onClick={handleSearch} disabled={!inputValue.trim()}>
            Search
          </MyButton>
        </div>
      </div>
    </section>
  );
}
