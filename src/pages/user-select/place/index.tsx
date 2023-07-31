import styles from './place.module.scss';
import placesData from 'Data/placeData.json'
import PlaceButton from "./PlacesButton";
import Cards from "./Card";

export default function Place() {
  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div>
          <div className={styles['template__navigation']}>
            <PlaceButton placeData={placesData} />
          </div>
          <div>
            <Cards placeData={placesData}/>
          </div>
        </div>
        <div className={styles['template__buttons']}>
          <button className={styles['template__button']}>뒤로가기</button>
          <button className={styles['template__button']}>다음으로</button>
        </div>
      </div>
    </div>
  )
}