import styles from './place.module.scss';
import { Link } from 'react-router-dom';
import placesData from 'Data/placeData.json';
import PlaceButton from "./PlacesButton";
import useProgressStore from 'utils/progressStore';
import Cards from "./Card";

export default function Place() {
  const { setPlanStep, setPlaceStep, setPlaceSelect } = useProgressStore();

  const onClickPrev = () => {
    setPlaceStep(false);
    setPlaceSelect(false);
  }

  const onClickNext = () => {
    setPlanStep(true);
  }

  console.log(placesData);

  if (!placesData) return null;

  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div>
          <div className={styles['template__navigation']}>
            <PlaceButton placeData={placesData} />
          </div>
          <div>
            <Cards placesData={placesData} />
          </div>
        </div>
        <div className={styles['template__buttons']}>
          <button className={styles['template__button']} onClick={onClickPrev}>
            <Link className={styles.template__link} to="/user-select/partner">
              뒤로가기
            </Link>
          </button>
          <button className={styles['template__button']} onClick={onClickNext}>
            <Link className={styles.template__link} to="/user-select/plan">
              다음으로
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}