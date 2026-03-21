import { Path } from "@/shared/config/routing/Routing"
import { Route, Routes } from "react-router"
import { SearchPage } from "@/pages/SearchPage"
import { FavoritesPage } from "@/pages/FavoritesPage"
import { MovieCategoriesPage } from "@/pages/MovieCategoriesPage"
import { MainPage } from "@/pages/MainPage"
import { MovieDetailsPage } from "@/pages/MovieDetailsPage"
import { MovieFilteredListPage } from "@/pages/MovieFilteredListPage"
import { NotFound } from "@/pages/NotFound/NotFound"


export const AppRouter = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage/>}/>
        <Route path={Path.MoviesList} element={<MovieCategoriesPage />}/>
        <Route path={Path.MovieDetails} element={<MovieDetailsPage />}/>
        <Route path={Path.FilteredMovies} element={<MovieFilteredListPage />}/>
        <Route path={Path.Search} element={<SearchPage />}/>
        <Route path={Path.FavoritesPage} element={<FavoritesPage />}/>
        <Route path={Path.NotFound} element={<NotFound />}/>
    </Routes>
)