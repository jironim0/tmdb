import { useSearchParams } from "react-router";
import s from './s.module.css'
import { MyButton } from "./MyButton";

interface Props {
  paramName?: string;
  totalPages: number
}

export function Paginator ({ paramName = 'page', totalPages }: Props){
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get(paramName) || '1', 10);

  const changePage = (step: number) => {
    setSearchParams((prev) => {
      const next = Math.max(1, currentPage + step);
      prev.set(paramName, String(next));
      return prev;
    });
  };

  return (
    <div className={s.container}>
      <MyButton onClick={() => changePage(-1)} disabled={currentPage <= 1}>Prev</MyButton>
      <div className={s.pageInfo}>
        <span className={s.current}>Page {currentPage}</span>
        <span className={s.divider}>of</span>
        <span className={s.total}>{totalPages}</span>
      </div>
      <MyButton onClick={() => changePage(1)} disabled={totalPages === 1}>Next</MyButton>
    </div>
  );
};
