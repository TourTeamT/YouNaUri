import { Link } from "react-router-dom";
import styles from "./travelNavigation.module.scss";

export default function TravelNavigation(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles['container__navigation']}>
        <Link to={'/myPage/intend'} className={styles['container__link']}>
          <button className={styles['container__button']}>예정된 여행</button>
        </Link>
        <Link to={'/myPage/past'} className={styles['container__link']}>
          <button className={styles['container__button']}>과거 여행</button>
        </Link>
      </div>
    </div>
  )
}