import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SelectIntroduceDialog } from "utils/selectIntroduceDialog";
import { useOutletContext } from "react-router-dom";
import SelectProgressBar from "components/SelectProgressBar";
import SelectIntroduce from "components/SelectIntroduce";
import styles from './user-select.module.scss';

export default function UserSelect() {
  const location = useLocation();
  const introText = location.pathname === "/user-select/partner"
  ? SelectIntroduceDialog.partner
  : location.pathname === "/user-select/place"
  ? SelectIntroduceDialog.place
  : location.pathname === "/user-select/plan"
  ? SelectIntroduceDialog.plan
  : SelectIntroduceDialog.partner;

  return (
    <div className={styles.template}>
      <SelectIntroduce 
        subTitle={introText.subTitle}
        title={introText.title} 
        content={introText.content}
      />
      <SelectProgressBar /> 
      {/* 전역변수로 프로그래스바 조정 */}
      <Outlet />
    </div>
  )
}