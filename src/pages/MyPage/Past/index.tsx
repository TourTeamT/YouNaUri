import { Link } from "react-router-dom";
import styles from "./past.module.scss";
import { ReactComponent as Plus} from 'assets/svg/myPage/plus.svg'

export default function past(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link to='/user-select/partner' className={styles['card__link']}>
        <div className={styles.card}>
          <Plus className={styles['card__image']} />
          <span className={styles['card__title']}>과거 여행</span>
          <span className={styles['card__title']}>과거 여행</span>
        </div>
      </Link>
    </div>
  )
}