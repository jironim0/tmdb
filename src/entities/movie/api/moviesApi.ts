import { baseApi } from "@/shared/api/baseApi";
import type {
  GenresResponse,
  MovieCreditsResponse,
  MovieDetail,
  TMDBResponse,
} from "./moviesApi.type";

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPopularMovies: build.query<TMDBResponse, { page: number }>({
      query: (params) => {
        return {
          url: "movie/popular",
          params: params,
        };
      },
      providesTags: ["PopularMovies"],
      keepUnusedDataFor: 300,
    }),
    fetchMoviesByCategory: build.query<
      TMDBResponse,
      { category: string; page: number }
    >({
      query: ({ category, page }) => ({
        url: `movie/${category}`,
        params: { page },
      }),
      providesTags: (_, __, arg) => [{ type: "Movies", id: arg.category }],
      keepUnusedDataFor: 300,
    }),
    getMovie: build.query<MovieDetail, number>({
      query: (movieId) => `movie/${movieId}`,
      keepUnusedDataFor: 600,
    }),
    getMovieGenres: build.query<GenresResponse, void>({
      query: () => `/genre/movie/list`,
      keepUnusedDataFor: 600,
    }),
    getMovieCredits: build.query<MovieCreditsResponse, number>({
      query: (movieId) => `/movie/${movieId}/credits`,
      keepUnusedDataFor: 600,
    }),
    getMovieSimilar: build.query<TMDBResponse, number>({
      query: (movieId) => `/movie/${movieId}/similar`,
      keepUnusedDataFor: 600,
    }),
    searchMovies: build.query<TMDBResponse, { value: string; page: number }>({
      query: ({ value, page = 1 }) => ({
        url: "search/movie",
        params: {
          query: value,
          page: page,
        },
      }),
      keepUnusedDataFor: 60,
    }),
    getMovies: build.query<
      TMDBResponse,
      {
        with_genres?: string;
        sort_by?: string;
        vote_average_gte?: number;
        vote_average_lte?: number;
        page: number;
      }
    >({
      query: (params) => ({
        url: "/discover/movie",
        params: {
          ...params,
          "vote_average.gte": params.vote_average_gte,
          "vote_average.lte": params.vote_average_lte,
        },
      }),
      keepUnusedDataFor: 300,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieSimilarQuery,
  useGetMovieCreditsQuery,
  useGetMovieGenresQuery,
  useGetMovieQuery,
  useFetchMoviesByCategoryQuery,
  useFetchPopularMoviesQuery,
} = movieApi;
