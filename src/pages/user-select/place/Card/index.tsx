import React from 'react';
import styles from './Cards.module.scss';

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
    placeData: Region[];
};

const Cards : React.FC<Props> = ({ placeData }) => {
    console.log(placeData);

  return (
    <div>
      <div className={styles.container}>
        {
          placeData.map((place) => (
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
