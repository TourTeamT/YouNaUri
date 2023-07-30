import React from "react";
import DateRangeSelector from "components/datePicker";
import * as api from 'api';
import { ReactComponent as Search } from 'assets/svg/plan/search_icon.svg'
import styles from './plan.module.scss';

export default function Plan() {
  const [local, setLocal] = React.useState<string>('');

  const handleLocalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.template}>
        <span className={styles.template__subTitle}>출발지</span>
        <div className={styles.place}>
          <Search className={styles.place__icon} />
          <input 
            className={styles.place__input}
            value={local}
            type="text"
            placeholder="어디서 출발하시나요?"
            onChange={handleLocalChange}
          />
        </div>
        <span className={styles.template__subTitle}>일정</span>
        <DateRangeSelector />
      </div>
    </div>
  )
}