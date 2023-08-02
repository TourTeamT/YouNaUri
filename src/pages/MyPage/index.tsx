import styles from './MyPage.module.scss';
import Travel from './Travel';
import Profile from './Profile';

export default function MyPage(): JSX.Element {

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Profile />
        <div className={styles.travel}>
          <Travel />
        </div>
      </div>
    </div>
  );
}
