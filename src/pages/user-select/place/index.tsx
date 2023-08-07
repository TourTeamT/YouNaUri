import styles from './place.module.scss';
import { Link } from 'react-router-dom';
import placesData from 'Data/placeData.json';
import useProgressStore from 'utils/progressStore';
import Cards from "./Card";
import { useState, useEffect } from 'react';


export default function Place() {
  const { setPlanStep, setPlaceStep, setPlaceSelect } = useProgressStore();

  const onClickPrev = () => {
    setPlaceStep(false);
    setPlaceSelect(false);
  }

  const onClickNext = () => {
    setPlanStep(true);
  }

  const [places, setPlaces] = useState<{ region: string; name: string; image: string; local: string }[]>([]);
  const [output, setOutput] = useState<{ region: string; name: string; image: string; local: string }[]>([]);
  useEffect(() => {
    if (placesData.length > 0) {
      const allPlaces = placesData.flatMap(place => 
        place.attractions.map(attraction => ({
          region: place.name,
          name: attraction.name,
          image: attraction.image,
          local: attraction.local
        }))
      );
      setPlaces(allPlaces);
      setOutput(allPlaces);
    }
  }, []);

const handlePlaceClick = (regionName: string) => {
  const selectedPlaces = places.filter(place => place.region === regionName);
  setOutput(selectedPlaces);
}


  if (!placesData) return null;

  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div>
          <div className={styles['template__navigation']}>
            <div className={styles.topNavigation}>
            {
              placesData.map((place) => (
                <div key={place.id}>
                  <button
                    className={styles.card}
                    onClick={() => handlePlaceClick(place.name)}
                  >
                    {place.name}
                  </button>
                </div>
              ))
            }
            </div>
          </div>
          <div>
            <Cards places={output} />
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