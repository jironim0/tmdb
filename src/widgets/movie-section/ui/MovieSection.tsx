import { useNavigate } from 'react-router';
import { MoviePoster } from '@/entities/movie/ui/MoviePoster/MoviePoster';
import { useFetchMoviesByCategoryQuery } from '@/entities/movie/api/moviesApi';
import { MyButton } from '@/shared/ui/MyButton';

import s from './s.module.css'

interface Props {
  title: string;
  url: string
}

export function MovieSection({title, url}: Props) {
  const {data, isLoading} = useFetchMoviesByCategoryQuery({
    category: url,
    page: 1
  })

  const navigate = useNavigate();

  if(isLoading) return <div>Skeleton</div>
  if(!data) return 'Error'

  const movies = data.results.slice(0, 6)

  return (
    <section className={s.content}>
      <div className={s.content__header}>
        <span className={s.header__title}>{title}</span>
        <MyButton variant='secondary' onClick={() => navigate(`/movies/${url}`)}>View More</MyButton>
      </div>
      <MoviePoster movies={movies}/>
    </section>
  )
}