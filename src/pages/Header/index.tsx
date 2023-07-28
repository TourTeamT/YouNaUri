import { Outlet, useLocation } from 'react-router-dom';
import TopNavigation from 'pages/TopNavigation';
import MainPage from 'pages/MainPage';
import styles from './Header.module.scss'

interface IClassname {
  [key: string]: boolean;
}

const classNames = (classes: IClassname) => 
  Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');

export default function Header(): JSX.Element {
  const location = useLocation();

  const style = classNames({
    [styles.home]: location.pathname !== '/',
  });

  return (
    <div>
      <TopNavigation />
      <Outlet />
      <div className={style}>
        <MainPage />
      </div>
    </div>
  );
}
