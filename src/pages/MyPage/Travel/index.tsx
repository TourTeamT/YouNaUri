import styles from "./travel.module.scss";

export default function Travel(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles['container__navigation']}>
        <button className={styles['container__button']}>예정된 여행</button>
        <button className={styles['container__button']}>과거 여행</button>
      </div>
    </div>
  )
}