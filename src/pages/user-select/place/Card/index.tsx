import React from 'react';
import styles from './Cards.module.scss';
//import { useState,useEffect } from 'react';

interface City {
  rnum: number;
  code: string;
  name: string;
};

interface Props {
  cityData: City[];
};

const Cards: React.FC<Props> = ({ cityData }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //       if (placeData.length > 0) {
  //         setIsLoading(false);
  //         // placeData가 로드되면 로딩 상태를 false로 설정
  //       }
  // }, [placeData]);

  // if (isLoading) {
  //       // 로딩 상태일 때 로딩 스켈레톤을 렌더링
  //       return (
  //         <div>
  //           <div className={styles.container}>
  //             {
  //               placeData.map((place) => (
  //                 <div key={place.id}>
  //                   {
  //                     place.attractions.map((attraction, index) => (
  //                       <div className={styles.skelton}>
  //                         <div className={styles['skelton__box']}>
  //                           <div key={index}>{attraction.name}</div>
  //                           <div key={index}>{attraction.type}</div>
  //                         </div>
  //                       </div>
  //                   ))}
  //                 </div>
  //               ))
  //             }
  //           </div>
  //         </div>
  //       );
  //   }


  return (
    <div>
      <div className={styles.container}>
        {cityData&&
          cityData.map((place) => (
            <div key={place.rnum} className={styles.bbb}>
              <div className={styles.card}>
                <div className={styles['card__box']}>
                  <div key={place.rnum}>{place.name}</div>
                  {/* <div key={place.contentid}>{place.addr1}</div> */}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
