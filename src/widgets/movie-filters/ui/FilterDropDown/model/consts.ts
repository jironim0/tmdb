export type SortBy =
  | "popularity.desc"
  | "popularity.asc"
  | "vote_average.desc"
  | "vote_average.asc"
  | "primary_release_date.desc"
  | "primary_release_date.asc"
  | "original_title.asc"
  | "original_title.desc";


export const sortOptions: { title: string; value: SortBy }[] = [
  { title: "Популярность ↓", value: "popularity.desc" },
  { title: "Популярность ↑", value: "popularity.asc" },
  { title: "Рейтинг ↓", value: "vote_average.desc" },
  { title: "Рейтинг ↑", value: "vote_average.asc" },
  { title: "Дата выхода ↓", value: "primary_release_date.desc" },
  { title: "Дата выхода ↑", value: "primary_release_date.asc" },
  { title: "Название A–Z", value: "original_title.asc" },
  { title: "Название Z–A", value: "original_title.desc" },
];