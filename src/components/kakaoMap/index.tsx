import React, { useEffect } from 'react';
import styles from './kakaoMap.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.420125, 127.126665),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <div className={styles.map}>
      <div id='map' style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export default KakaoMap;
