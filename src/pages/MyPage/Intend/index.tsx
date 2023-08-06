import { Link } from "react-router-dom";
import styles from "./intend.module.scss";
import { ReactComponent as Plus} from 'assets/svg/myPage/plus.svg'

export default function Intend(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link to='/user-select/partner' className={styles['card__link']}>
        <div className={styles.card}>
          <Plus className={styles['card__image']} />
          <span className={styles['card__title']}>이번 휴가엔</span>
          <span className={styles['card__title']}>어디로 떠날까요?</span>
        </div>
      </Link>
      <div className={styles.cards}>
        여행지
      </div>
      <div className={styles.cards}>
        여행지
      </div>
      <div className={styles.cards}>
        여행지
      </div>
      <div className={styles.cards}>
        여행지
      </div>
    </div>
  )
}