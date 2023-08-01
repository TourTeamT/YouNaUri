import React, { useState } from "react";
import { useUserSelectData } from "pages/user-select";
import { ReactComponent as Check } from 'assets/svg/plan/check.svg'
import Next from "components/button/next";
import Back from "components/button/back";
import cn from "utils/classnames";
import styles from './time.module.scss';

const formatDateToMMDD = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month < 10 ? "0" : ""}${month}.${day < 10 ? "0" : ""}${day}`;
};

const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const roundedMinutes = Math.floor(minutes / 30) * 30; // Round down to the nearest 30 minutes
  return `${hours < 10 ? "0" : ""}${hours}:${roundedMinutes === 0 ? "00" : roundedMinutes}`;
};

const TimeInput: React.FC<{
  hours: string;
  minutes: string;
  onChange: (hours: string, minutes: string) => void;
}> = ({ hours, minutes, onChange }) => {
  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, minutes);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(hours, e.target.value);
  };

  const hoursOptions = [];
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0");
    hoursOptions.push(
      <option key={hour} value={hour}>
        {hour}
      </option>
    );
  }

  const minutesOptions = ["00", "30"].map((minute) => (
    <option key={minute} value={minute}>
      {minute}
    </option>
  ));

  return (
    <div>
      <select className={styles.select} value={hours} onChange={handleHourChange}>
        {hoursOptions}
      </select>
      :
      <select className={styles.select} value={minutes} onChange={handleMinuteChange}>
        {minutesOptions}
      </select>
    </div>
  );
};

