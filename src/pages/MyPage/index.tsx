import styles from './MyPage.module.scss';
import Profile from './Profile';
import TravelNavigation from './TravelNavigation';
import { Outlet } from 'react-router-dom';

export default function MyPage(): JSX.Element {

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Profile />
        <div>
          <div className={styles.travel}>
            <TravelNavigation />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
