import type { Favorite, MovieType } from "@/entities/movie/api/moviesApi.type";
import s from "./s.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FavoriteButton } from "@/features/favorite-button";

interface Props {
  movie: MovieType | Favorite;
  setIsFavorites?: (movie: Favorite[]) => void;
  flex?: string;
}

export function MovieCard({ movie, setIsFavorites, flex }: Props) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const width = 300;
  const height = 450;

  const poster = movie.poster_path
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}original${movie.poster_path}`
    : `https://placehold.co/${width}x${height}?text=${encodeURIComponent(movie.original_title)}`;

  const [isHovered, setIsHovered] = useState<boolean>(() => {
    const savedIds = localStorage.getItem("favorites");
    if (!savedIds) return false;
    const favorites = JSON.parse(savedIds);
    if (favorites.some((obj: Favorite) => obj.id === movie.id)) {
      setIsFavorite(true);
      return true;
    }
    return false;
  });

  const onMouseEnter = () => {
    setIsHovered(true);
    setIsFavorite(false);
  };

  return (
    <div
      className={s.poster__item}
      style={{ flex: flex }}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() =>
        setIsHovered(() => {
          const savedIds = localStorage.getItem("favorites");
          if (!savedIds) return false;
          const favorites = JSON.parse(savedIds);
          if (favorites.some((obj: Favorite) => obj.id === movie.id))
            return true;
          return false;
        })
      }
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className={s.image_container}>
        <img
          className={s.item__image}
          src={poster}
          alt={movie.original_title}
        />
        <div className={s.item__rating}>{movie.vote_average.toFixed(1)}</div>
        {(isHovered || isFavorite) && (
          <FavoriteButton
            id={movie.id}
            titile={movie.original_title}
            posterUrl={movie.poster_path}
            voteAverage={movie.vote_average}
            setIsFavorites={setIsFavorites}
          />
        )}
      </div>

      <span className={s.title}>{movie.original_title}</span>
    </div>
  );
}
