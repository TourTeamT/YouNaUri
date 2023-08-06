import React from 'react';
import styles from './PlacesButton.module.scss';

interface Region {
  id: number;
  name: string;
};

interface Props {
  placeData: Region[];
};

const PlaceButton: React.FC<Props> = ({ placeData }) => {
    console.log(placeData);

  return (
    <div>
      <div className={styles.topNavigation}>
        {
          placeData.map((place) => (
            <div key={place.id}>
              <div className={styles.card}>{place.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PlaceButton;
