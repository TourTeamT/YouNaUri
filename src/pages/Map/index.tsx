import React from "react";
import * as api from "../../api/plan/index"
import KakaoMap from "../../components/kakaoMap";

const useMap = () => {
  React.useEffect(() => {
    const getLocationData = async () => {
      const data = await api.getLocation();
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