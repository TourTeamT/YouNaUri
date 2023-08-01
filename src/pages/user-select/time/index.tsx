import React from "react";
import { useUserSelectData } from "pages/user-select";

export default function Time() {
  const userSelectData = useUserSelectData(); // 마지막 요청 버튼

  return (
    <div>시간</div>
  )
}