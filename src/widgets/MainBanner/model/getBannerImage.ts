import type { MovieType } from "@/entities/movie/api/moviesApi.type";
import { IMAGE_SETTINGS } from "./consts";


export const getBannerImage = (movie: MovieType[]) => {
    const backdropPath =  movie[Math.floor(Math.random() * movie.length)].backdrop_path
    return `${import.meta.env.VITE_IMAGE_BASE_URL}${IMAGE_SETTINGS}${backdropPath}`
}