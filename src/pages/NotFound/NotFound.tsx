import { Link } from 'react-router-dom';
import s from './s.module.css';
import { MyButton } from '@/shared/ui/MyButton';

export const NotFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.code}>404</h1>
      <p className={s.text}>Page does not exist</p>
      <MyButton className={s.button}>
            <Link to="/">
        Home
      </Link>
      </MyButton>
    </div>
  );
};
