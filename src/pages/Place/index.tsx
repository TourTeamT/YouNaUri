import styles from './Place.module.scss';
import placesData from 'Data/placeData.json'
import PlaceButton from './PlacesButton';
import Cards from './Card';

export default function Place(): JSX.Element {

  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div className={styles['template__container']}>
          <span className={styles['template__title']}>여행지 설정</span>
          <span className={styles['template__subTitle']}>여행을 계획하고 계신 지역을 선택해주세요.</span>
          <span className={styles['template__text']}>지역 필터를 사용해서 각 필터에 해당하는 지역만 모아볼 수 있어요.</span>
        </div>
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
  );
}
