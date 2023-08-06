import React from 'react';
import styles from './PlacesButton.module.scss';

interface City {
  rnum: number;
  code: string;
  name: string;
}

interface Props {
  placesData: City[];
};

const PlaceButton: React.FC<Props> = ({ placesData }) => {

  return (
    <div>
      <div className={styles.topNavigation}>
        {placesData&&
          placesData.map((data) => (
            <div key={data.code}>
                <div className={styles.card}>{data.name}</div>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default PlaceButton;
