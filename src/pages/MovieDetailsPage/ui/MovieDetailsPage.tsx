import { useNavigate, useParams } from "react-router";
import s from "./s.module.css";
import {
  useGetMovieCreditsQuery,
  useGetMovieQuery,
  useGetMovieSimilarQuery,
} from "@/entities/movie/api/moviesApi";
import { MyButton } from "@/shared/ui/MyButton";
import { MovieCard } from "@/features/movie-card";
import { getImageUrl } from "@/shared/lib/useImage";

const formatRuntime = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}m`;
};

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { data: movie } = useGetMovieQuery(Number(movieId));
  const { data: credits } = useGetMovieCreditsQuery(Number(movieId));
  const { data: similar } = useGetMovieSimilarQuery(Number(movieId));

  if (!movie || !credits || !similar) return "Error";

  const poster = getImageUrl({
    imageEndpointUrl: movie.poster_path,
    originalTitle: movie.original_title,
  });

  return (
    <div className={s.container}>
      <div className={s.movie__main}>
        <img src={poster} alt={movie.title} className={s.movie__poster} />

        <div className={s.movie__content}>
          <h1 className={s.movie__title}>{movie.title}</h1>

          <div className={s.movie__specs}>
            <span>{movie.release_date.split("-")[0]}</span>
            <span className={s.rating}>★ {movie.vote_average.toFixed(1)}</span>
            <span>{formatRuntime(Number(movie.runtime))}</span>
          </div>

          <p className={s.movie__description}>{movie.overview}</p>

          <div className={s.movie__genres}>
            {movie.genres.map((el) => (
              <span className={s.genre__item} key={el.id}>
                {el.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className={s.section__title}>Top Cast</h2>
      <div className={s.movie__cast}>
        {[...credits.cast]
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 6)
          .map((actor) => {
            const actorPhoto = getImageUrl({
              imageEndpointUrl: actor.profile_path,
              originalTitle: actor.original_name,
            });

            return (
              <div key={actor.id} className={s.actor__card}>
                <img src={actorPhoto} alt={actor.original_name} />
                <div className={s.actor__info}>
                  <div className={s.actor__name}>{actor.original_name}</div>
                  <div className={s.actor__char}>{actor.character}</div>
                </div>
              </div>
            );
          })}
      </div>

      <h2 className={s.section__title}>Similar Movies</h2>
      <div className={s.movie__similar}>
        {similar.results.slice(0, 6).map((item) => (
          <MovieCard movie={item} />
        ))}
      </div>

      <MyButton variant="secondary" onClick={() => navigate(-1)}>
        Back
      </MyButton>
    </div>
  );
}
