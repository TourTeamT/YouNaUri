import styles from './place.module.scss';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import placesData from 'Data/placeData.json'
import PlaceButton from "./PlacesButton";
import useProgressStore from 'utils/progressStore';
=======
import placesData from 'Data/placeData.json'
import PlaceButton from "./PlacesButton";
>>>>>>> 6b5393a (feat: api 연결)
import Cards from "./Card";
import { useEffect, useState } from 'react';


export default function Place() {
  const [cityData, setCityData] = useState<any | undefined>();
  const { setPlanStep, setPlaceStep, setPlaceSelect } = useProgressStore();
  //const [areaCode, setAreaCode] = useState(1);
  const onClickPrev = () => {
    setPlaceStep(false);
    setPlaceSelect(false);
  }
  const onClickNext = () => {
    setPlanStep(true);
  }
  useEffect(() => {
  fetch(`http://apis.data.go.kr/B551011/KorWithService1/areaCode1?serviceKey=BwoLebLpztIG3bXaz2pSaRNQPd4K3UylwKCU1qf6TeB%2B%2FEj%2B4fs55oaRtcON2TnD2bEJHW9E8ocH9toev66qow%3D%3D&areaCode=1&numOfRows=25&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`)
  .then(response => response.json())
  .then(data => setCityData(data.response.body.items.item));
  }, []);

  if (!setCityData) {
    return null;
  }
  console.log(cityData);

  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div>
          <div className={styles['template__navigation']}>
            <PlaceButton placeData={placesData} />
          </div>
          <div>
            <Cards cityData={cityData}/>
          </div>
        </div>
        <div className={styles['template__buttons']}>
          <button className={styles['template__button']} onClick={() => onClickPrev()}>
            <Link className={styles.template__link} to="/user-select/partner">
              뒤로가기
            </Link>
          </button>
          <button className={styles['template__button']} onClick={() => onClickNext()}>
            <Link className={styles.template__link} to="/user-select/plan">
              다음으로
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
