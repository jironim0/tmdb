import { Link } from 'react-router'
import s from './s.module.css'
import logo from '@/assets/logo_tmdb.svg'
import { useAppDispatch, useAppSelector } from '@/app/model/hooks/stateHooks';
import { toggleTheme } from '@/shared/model/theme/themeSlice';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export function Header() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <header className={s.container}>
      <div className={s.header}>
        <Link to="/" className={s.logoLink}>
          <img src={logo} alt="TMDB Logo" className={s.logo} />
        </Link>
        
        <nav className={s.navigation}>
          <Link to="/" className={s.navLink}>Main</Link>
          <Link to="/movies" className={s.navLink}>Categories</Link>
          <Link to="/filtered-movies" className={s.navLink}>Filters</Link>
          <Link to="/search" className={s.navLink}>Search</Link>
          <Link to="/favorites" className={s.navLink}>Favorites</Link>
        </nav>

        <button 
          className={s.themeToggle} 
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <MdDarkMode size={22} /> : <CiLight size={22} />}
        </button>
      </div>
    </header>
  );
}