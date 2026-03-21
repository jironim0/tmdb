import s from "./s.module.css";

export function MainBannerSkeleton() {
  return (
    <section className={s.section} style={{ backgroundColor: '#1a1a1a' }}>
      <div className={s.content}>
        <div className={`${s.skeleton__item} ${s.skeleton__title}`} />
        
        <div className={s.input__group}>
          <div className={`${s.skeleton__item} ${s.skeleton__input}`} />
          <div className={`${s.skeleton__item} ${s.skeleton__button}`} />
        </div>
      </div>
    </section>
  );
}