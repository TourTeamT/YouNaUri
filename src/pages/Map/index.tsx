import React from "react";
import KakaoMap from "components/kakaoMap";
import {xmlToJSON} from "utils/xmlToJSON";
import * as api from 'api';

const useMap = () => {
  React.useEffect(() => {
    const getLocationData = async () => {
      const data = await api.plan.getLocation();
      console.log(data);
      // 예제 실행
    xmlToJSON(data)
      .then((jsonData: any) => {
        console.log(jsonData);
    })
      .catch((error: any) => {
      console.error(error);
    });

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