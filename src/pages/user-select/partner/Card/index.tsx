import React from 'react';
import styles from './Cards.module.scss';

interface Kind {
    id: number;
    name: string;
};

interface Props {
    partnerData: Kind[];
};

const Cards : React.FC<Props> = ({ partnerData }) => {
    console.log(partnerData);

  return (
    <div>
      <div className={styles.container}>
        {
          partnerData.map((data) => (
            <div className={styles.card}>
              <div className={styles['card__image']}></div>
              <div key={data.id} className={styles['card__title']}>{data.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
