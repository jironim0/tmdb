import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import s from './s.module.css';
import type { Favorite } from "@/entities/movie/api/moviesApi.type";

interface Props {
  id: number,
  titile: string,
  posterUrl: string | null,
  voteAverage: number,
  setIsFavorites?: (movie: Favorite[]) => void
}

export function FavoriteButton({ id, titile, posterUrl, voteAverage, setIsFavorites }: Props) {
  const [isActive, setIsActive] = useState(() => {
    const saved = localStorage.getItem('favorites');
    if (!saved) return false;
    const favorites = JSON.parse(saved);
    return favorites.some((obj: Favorite) => obj.id === id);
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextState = !isActive
    setIsActive(nextState)

    const saved = localStorage.getItem('favorites')
    let favorites = saved ? JSON.parse(saved) : []
    if (nextState) {
      if (!favorites.includes(id)) {
        favorites.push({
          id: id,
          original_title: titile,
          poster_path: posterUrl,
          vote_average: voteAverage
        })
      }
    } else {
      favorites = favorites.filter((obj: Favorite) => obj.id !== id)
      setIsFavorites?.(favorites)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <div className={s.favorite} onClick={(e) => handleClick(e)}>
      <MdFavorite color={isActive ? 'red' : 'white'} size={24} />
    </div>
  );
}
