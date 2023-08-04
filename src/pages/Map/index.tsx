import React from "react";
import KakaoMap from "components/kakaoMap";
import * as api from 'api';

const useMap = () => {
  React.useEffect(() => {
    const getLocationData = async () => {
      const data = await api.plan.getLocation();
      console.log(data);
    }
    getLocationData();
  });
  return (
    <div>
      <KakaoMap />
    </div>
  );
}

export default useMap;