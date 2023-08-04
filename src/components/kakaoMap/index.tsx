import React, { useEffect } from 'react';
import styles from './kakaoMap.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  const positions = [
    {
      title: "뱅기",
      latlng: { lat: 37.450705, lng: 126.570677 },
    },
    {
      title: "숙소",
      latlng: { lat: 37.450936, lng: 127.569477 },
    },
    {
      title: "놀곳",
      latlng: { lat: 36.450879, lng: 126.96994 },
    },
    {
      title: "놀곳2",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.420125, 127.126665),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    positions.forEach((position, index) => {
      const markerPosition = new window.kakao.maps.LatLng(position.latlng.lat, position.latlng.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: new window.kakao.maps.MarkerImage(
          "http://localhost:3000/image/map/GreenMarker.svg",
          new window.kakao.maps.Size(24, 35)
        ),
      });

    //const content = `<div style="padding:5px; font-weight:bold;">${index + 1}</div>`;

    const customOverlay = new window.kakao.maps.CustomOverlay({
      //content: content,
      position: markerPosition,
      yAnchor: 1
    });

    const linePath = positions.map((position) => 
      new window.kakao.maps.LatLng(position.latlng.lat, position.latlng.lng)
    );
      
    const polylineOptions = {
      path: linePath,
      strokeWeight: 2,      
      strokeColor: 'green',
      strokeOpacity: 1,
      strokeStyle: 'solid'
    }; 
    const polyline = new window.kakao.maps.Polyline(polylineOptions);
      
    polyline.setMap(map);
    marker.setMap(map);
    customOverlay.setMap(map); 
  });
  }, [positions]);

  return (
    <div className={styles.map}>
      <div id='map' style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export default KakaoMap;
