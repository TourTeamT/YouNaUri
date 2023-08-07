import React from 'react';
import styles from './Cards.module.scss';
import { useState, useEffect } from 'react';

interface Attraction {
  name: string;
  type?: string;
  image?: string;
}

interface Region {
  id: number;
  name: string;
  attractions: Attraction[];
}

interface CardsProps {
  placesData: Region[];
}

const Cards: React.FC<CardsProps> = ({ placesData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState<{ name: string; image: string }[]>([]);
  
  
  useEffect(() => {
    if (placesData.length > 0) {
      setIsLoading(false);
      placesData.forEach((place) => {
        place.attractions.forEach((attraction) => {
          setPlaces((prevPlaces) => [...prevPlaces, { name: attraction.name, image: attraction.image || '' }]);
        });
      });
    }
  }, [placesData]);

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
                  <div>{place.name}</div>
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
