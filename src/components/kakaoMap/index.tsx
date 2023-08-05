import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MarkerData {
  [key: string]: {
    latitude: number;
    longitude: number;
  }[];
}

const KakaoMap: React.FC = () => {
  const marker = {
  "data": {
    "1": [
      {
        "latitude": 36.647,
        "longitude": 127.0818,
      },
      {
        "latitude": 37.61453,
        "longitude": 127.013106,
      },
      {
        "latitude":  37.614533,
        "longitude": 127.913106,
      }
    ],
    "2": [
      {
        "latitude": 37.68853,
        "longitude": 127.993106,
      },
      {
        "latitude":  36.904533,
        "longitude": 126.333106,
      }
    ],
    "3": [
      {
        "latitude": 36.98853,
        "longitude": 127.006,
      },
      {
        "latitude":  36.194533,
        "longitude": 127.993106,
      }
    ]
  } as MarkerData,
}
  
useEffect(() => {
  const container = document.getElementById('map');
  const options = {
    center: new window.kakao.maps.LatLng(37.420125, 127.126665),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container, options);

  if (marker && marker.data) {
    Object.keys(marker.data).forEach((key) => {
      let imageUrl = "";
      let lineColor = "";

      switch (key) {
      case '1':
        imageUrl = "http://localhost:3000/image/map/GreenMarker.svg";
        lineColor = 'green';
        break;
      case '2':
        imageUrl = "http://localhost:3000/image/map/OrangeMarker.svg";
        lineColor = 'orange';
        break;
      case '3':
        imageUrl = "http://localhost:3000/image/map/RedMarker.svg"; // 3일차 마커 이미지 URL
        lineColor = 'red';
        break;
    }
      marker.data[key].forEach((position, index) => {
        const markerPosition = new window.kakao.maps.LatLng(position.latitude, position.longitude);
        const mapMarker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: new window.kakao.maps.MarkerImage(
            imageUrl,
            new window.kakao.maps.Size(24, 35)
          ),
        });

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          yAnchor: 1
        });

        mapMarker.setMap(map);
        customOverlay.setMap(map);
      });

      const linePath = marker.data[key].map((position) => 
        new window.kakao.maps.LatLng(position.latitude, position.longitude)
      );

      const polylineOptions = {
        path: linePath,
        strokeWeight: 3,
        strokeColor: lineColor,
        strokeOpacity: 1,
        strokeStyle: 'solid'
      };

      const polyline = new window.kakao.maps.Polyline(polylineOptions);
      polyline.setMap(map);
    });
  }
}, [marker]);

  return (
    <div>
      <div id='map' style={{ width: '1500px', height: '1000px' }} />
    </div>
  );
};

export default KakaoMap;
