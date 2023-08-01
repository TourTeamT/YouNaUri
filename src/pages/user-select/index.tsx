import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SelectIntroduceDialog } from "utils/selectIntroduceDialog";
import SelectProgressBar from "components/SelectProgressBar";
import SelectIntroduce from "components/SelectIntroduce";
import styles from './user-select.module.scss';

type OutletProviderProps = {
  partner: string | null
  place: string | null,
  date: {
    startDate: Date | null,
    endDate: Date | null,
  }
  time: {
    activeTime: number,
    eating: boolean[],
    eatingTime: number,
  }[] | null
} | null;

export default function UserSelect() {
  const location = useLocation();
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 2);
  const date = {
    startDate: currentDate,
    endDate: endDate,
  };
  const [userSelectData, setUserSelectData] = React.useState<OutletProviderProps | null>({
    partner: null,
    place: null,
    date: {
      startDate: date.startDate,
      endDate: date.endDate,
    },
    time: null,
  });
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
      <Outlet context={[useUserSelectData, useUserSelectData]} />
    </div>
  )
}

export function useUserSelectData() {
  return useOutletContext<OutletProviderProps>();
}