import styles from "./profile.module.scss";

export default function Profile(): JSX.Element {

  return (
    <div className={styles.profile}>
      <div className={styles.user}>
        <div className={styles['user__photo']}></div>
        <div className={styles['user__name']}>김채은</div>
      </div>
      <div className={styles.form}>
        <div className={styles['form__title']}>최근 여행지</div>
        <div className={styles['form__box']}>
          <div className={styles['form__destination']}>포항</div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles['form__title']}>나의 총 여행 수</div>
        <div className={styles['form__number']}>12회</div>
      </div>
      </div>
  )
}