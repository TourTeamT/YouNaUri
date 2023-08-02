import styles from "./profile.module.scss";

export default function Profile(): JSX.Element {

  return (
      <div className={styles.profile}>
        <div className={styles['profile__user']}>김채은</div>
        <div className={styles['profile__title']}>최근 여행지</div>
        <div className={styles['profile__title']}>나의 총 여행 수</div>
      </div>
  )
}