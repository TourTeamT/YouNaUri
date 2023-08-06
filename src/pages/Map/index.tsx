import React from "react";
import KakaoMap from "components/kakaoMap";
import PlaceCard from "components/MapCard/PlaceCard";
import useSelectedPlace from "utils/selectPlace";
import RecommendPlaceCard from "components/MapCard/RecommendPlaceCard";
import * as api from 'api';
import styles from './Map.module.scss';

type SelectedCard = {
  image: string;
  title: string;
  address: string;
  contentId: string;
  parking: boolean;
  wheelChair: boolean;
  dotBlock: boolean;
  audioGuide: boolean;
  helpDog: boolean;
  signGuide: boolean;
  videoGuide: boolean;
  babySpareChair: boolean;
  lactationRoom: boolean;
  stroller: boolean;
}

export default function Map() {
  const [recommendPlace, setRecommendPlace] = React.useState<any[]>([]);
  const { selectedPlace } = useSelectedPlace();

  React.useEffect(() => {
    const getLocationData = async () => {
      const data = await api.plan.getLocation();
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
            <div className={styles.info__date}>1월 12일 금 - 1월 15일 월</div>
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
                image={item?.image ?? ''} 
                title={item?.title ?? ''}
                address={item?.address ?? ''}
                contentId={item?.contentId ?? ''}
                parking={item?.parking ?? false}
                wheelChair={item?.wheelChair ?? false}
                dotBlock={item?.dotBlock ?? false}
                audioGuide={item?.audioGuide ?? false}
                helpDog={item?.helpDog ?? false}
                signGuide={item?.signGuide ?? false}
                videoGuide={item?.videoGuide ?? false}
                babySpareChair={item?.babySpareChair ?? false}
                lactationRoom={item?.lactationRoom ?? false}
                stroller={item?.stroller ?? false}
                index={index}
              />
            ))
           )
         }
        </div>
        <div className={styles.tab__footer}>
          <div className={styles.footer}>
            <button className={styles.footer__place}>장소 확정하기</button>
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