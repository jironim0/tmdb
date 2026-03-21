export const Path = {
    Main: '/',
    MoviesList: '/movies/:queryCategory?',
    MovieDetails: '/movie/:movieId',
    FilteredMovies: '/filtered-movies',
    Search: '/search',
    FavoritesPage: '/favorites',
    NotFound: '*'
} as const