import React from "react";
import KakaoMap from "components/kakaoMap";
import * as api from 'api';

const useMap = () => {
  React.useEffect(()=> {
    const data = api.plan.getLocation();
    console.log(data);
  })
  return (
    <div>
      <KakaoMap />
    </div>
  );
}

export default useMap;