import { memo } from 'react';
import type { MovieType } from "@/entities/movie/api/moviesApi.type"
import { MoviePoster } from "@/entities/movie/ui/MoviePoster/MoviePoster"
import { Paginator } from "@/shared/ui/Paginator"

interface MoviesProps {
    data: MovieType[],
    totalPages: number,
}

export const MovieList = memo(function MovieList({data, totalPages}: MoviesProps){
    return (
        <>
            <MoviePoster movies={data} flex={"0 0 calc((100% - (20px * 3)) / 5)"}/>
            {data.length > 0 ? (<Paginator totalPages={totalPages} />) : ''} 
        </>
    )
});