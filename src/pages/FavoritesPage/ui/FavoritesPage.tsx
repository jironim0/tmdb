import s from "./s.module.css";
import { MoviePoster } from "@/entities/movie/ui/MoviePoster/MoviePoster";
import { useState } from "react";

export function FavoritesPage() {
  const [favorites, setIsFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    if(!saved) return []
    const favorites = JSON.parse(saved);
    return favorites;
  });

  return (
    <div className={s.container}>
      <MoviePoster movies={favorites} setIsFavorites={setIsFavorites} flex={"0 0 calc((100% - (20px * 3)) / 5)"}/>
    </div>
  );
}
