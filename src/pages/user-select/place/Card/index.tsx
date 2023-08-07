import React from 'react';
import styles from './Cards.module.scss';
import { useState, useEffect } from 'react';
import { ReactComponent as Marker } from 'assets/svg/Place/marker.svg'


interface Region {
  name: string;
  image: string;
  local: string;
}

interface CardsProps {
  places: Region[];
}

const Cards: React.FC<CardsProps> = ({ places }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (places.length > 0) {
      setIsLoading(false);
    }
  }, [places]);

  if (isLoading) {
        // 로딩 상태일 때 로딩 스켈레톤을 렌더링
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.box}>
            {
              new Array(5).fill(null).map((_, index) => (
                <div key={index} className={styles.skelton}>
                  <img src={'loading_image_placeholder'} alt="로딩 중" className={styles['card__image']}></img>
                  <div className={styles['skelton__box']}>
                    <div>로딩 중...</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          {
            places.map((place) => (
              <div className={styles.card}>
                <img src={place.image} alt={place.name} className={styles['card__image']}></img>
                <div className={styles['card__box']}>
                  <div className={styles['card__title']}>{place.name}</div>
                  <div className={styles['card__container']}>
                    <Marker className={styles['card__marker']}/>
                    <div className={styles['card__subTitle']}>{place.local}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
