import React from "react";
import KakaoMap from "components/kakaoMap";
import PlaceCard from "components/MapCard/PlaceCard";
import useSelectedPlace from "utils/selectPlace";
import RecommendPlaceCard from "components/MapCard/RecommendPlaceCard";
import * as api from 'api';
import styles from './Map.module.scss';
import useUserSelect from "utils/userSelectStore";

type SelectedCard = {
  img: string;
  title: string;
  address: string;
  contentId: string;
  filter: any[];
}

export default function Map() {
  const [recommendPlace, setRecommendPlace] = React.useState<any[]>([]);
  const { selectedPlace } = useSelectedPlace();
  const { time, startPlace, endPlace } = useUserSelect();
  const onClickNext = async () => {
    const serverResponse = await api.plan.getServerRoute([{
      times: time,
      startPoint: startPlace,
      destination: endPlace,
      courses: selectedPlace,
    }]);
    console.log(serverResponse);
  }
  React.useEffect(() => {
    const getLocationData = async () => {
      const data = await api.plan.getLocation(endPlace.longitude ,endPlace.latitude );
      console.log(data);
      setRecommendPlace(data);
    }
    getLocationData();
  }, []);
  return (
    <div className={styles.template}>
      <div className={styles.template__tab}>
        <div className={styles.tab__info}>
          <div className={styles.info}>
            <div className={styles.info__title}>제주 여행</div>
            <div className={styles.info__date}>8월 11일 금 - 8월 13일 일</div>
          </div>          
          <button className={styles.tab__change}>
            변경
          </button>
        </div>
        <div className={styles.tab__list}>
        {
          selectedPlace.length > 0 && (
            selectedPlace.map((item: SelectedCard, index: number) => (
              <PlaceCard 
                img={item?.img ?? ''} 
                title={item?.title ?? ''}
                address={item?.address ?? ''}
                contentId={item?.contentId ?? ''}
                parking={item?.filter.includes('전용주차구역')}
                wheelChair={item?.filter.includes('휠체어대여')}
                dotBlock={item?.filter.includes('점자블록')}
                audioGuide={item?.filter.includes('오디오가이드')}
                helpDog={item?.filter.includes('보조견동반')}
                signGuide={item?.filter.includes('수어안내')}
                videoGuide={item?.filter.includes('자막해설')}
                babySpareChair={item?.filter.includes('유아용의자')}
                lactationRoom={item?.filter.includes('수유실')}
                stroller={item?.filter.includes('유모차대여')}
                index={index}
              />
            ))
          )
        }
        </div>
        <div className={styles.tab__footer}>
          <div className={styles.footer}>
            <button className={styles.footer__place} onClick={() => onClickNext()}>장소 확정하기</button>
            <button className={styles.footer__back}>뒤로가기</button>
          </div>
        </div>
      </div>
      <div className={styles.template__map}>
        <KakaoMap />
      </div>
      <div className={styles.recommend}>
        <div className={styles.recommend__header}> 
          <div className={styles.recommend__title}>추천 장소</div>
          <div className={styles.recommend__hide}>추천 접기</div>
        </div>
        <div className={styles.recommend__content}>
        {
            recommendPlace.length > 0 && (
              recommendPlace.map((item, index) => (
                <RecommendPlaceCard
                  contentId={item.contentid}
                  title={item.title}
                  firstImage={item.firstimage}
                  mapX={item.mapx}
                  mapY={item.mapy}
                  contentTypeId={item.contenttypeid}
                  address={item.addr1}
                />
              ))
            )
          }
          </div>
      </div>
    </div>
  );
}
