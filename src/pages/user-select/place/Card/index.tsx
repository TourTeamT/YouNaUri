import React from 'react';
import styles from './Cards.module.scss';
import { useState,useEffect } from 'react';

interface Attraction {
    name: string;
    type: string;
};

interface Region {
    id: number;
    name: string;
    attractions: Attraction[];
    images: string[];
};

interface Props {
    cityData: Region[];
};

const Cards: React.FC<Props> = ({ cityData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
        if (cityData.length > 0) {
          setIsLoading(false);
          // cityData가 로드되면 로딩 상태를 false로 설정
        }
  }, [cityData]);

  if (isLoading) {
        // 로딩 상태일 때 로딩 스켈레톤을 렌더링
        return (
          <div>
            <div className={styles.container}>
              {
                cityData.map((place) => (
                  <div key={place.id}>
                    {
                      place.attractions.map((attraction, index) => (
                        <div className={styles.skelton}>
                          <div className={styles['skelton__box']}>
                            <div key={index}>{attraction.name}</div>
                            <div key={index}>{attraction.type}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        );
    }


  return (
    <div>
      <div className={styles.container}>
        {
          cityData.map((place) => (
            <div key={place.id} className={styles.bbb}>
                {
                  place.attractions.map((attraction, index) => (
                    <div className={styles.card}>
                      <div className={styles['card__box']}>
                        <div key={index}>{attraction.name}</div>
                        <div key={index}>{attraction.type}</div>
                      </div>
                    </div>
                ))}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
