import { MainBanner } from "@/widgets/MainBanner";
import s from "./s.module.css";
import { MovieSection } from "./MovieSection/MovieSection";

export function MainPage() {
  return (
    <>
      <div className={s.dynamic__background}>
        <MainBanner />
      </div>
      <div className={s.container}>
        <MovieSection title="Popular Movies" url={'popular'}/>
        <MovieSection title="Top Rated Movies" url={'top_rated'}/>
        <MovieSection title="Upcoming Movies" url={'upcoming'}/>
        <MovieSection title="Now Playing Movies" url={'now_playing'}/>
      </div>
    </>
  );
}
