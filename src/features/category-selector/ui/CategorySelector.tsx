import { MOVIE_CATEGORIES } from "@/widgets/MainBanner/model/consts";
import { useNavigate } from "react-router";
import type { useCategory } from "@/entities/movie/hooks/useCategory";

import s from "./s.module.css";

interface Props {
  category: ReturnType<typeof useCategory>;
}

export function CategorySelector({ category }: Props) {
  const navigate = useNavigate();

  const handleCategoryClick = (key: string) => {
    navigate(`/movies/${key}?page=1`);
    category.setCurrentCategory(key);
  };

  return (
    <div className={s.container}>
      <ul className={s.category__list}>
        {Object.entries(MOVIE_CATEGORIES).map(([key, value]) => (
          <li
            key={key}
            onClick={() => handleCategoryClick(key)}
            className={`${s.category__item} ${category.currentCategory === key ? s.active : ""}`}
          >
            {value.title}
          </li>
        ))}
      </ul>
      <span>
        {
          MOVIE_CATEGORIES[
            category.currentCategory as keyof typeof MOVIE_CATEGORIES
          ]?.title
        }
      </span>
    </div>
  );
}
