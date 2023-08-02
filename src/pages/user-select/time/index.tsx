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


export default function Time() {
  const userSelectDataArray = useUserSelectData();

  const userSelectData = Array.isArray(userSelectDataArray)
    ? userSelectDataArray[0]
    : userSelectDataArray;

  const { partner, place, date, time } = userSelectData || {};
  const [formState, setFormState] = React.useState<any[]>([]);
  const [selectedDayIndex, setSelectedDayIndex] = React.useState<number | null>(null); // Keep track of the selected day index

  const getDatesBetween = (): string[] => {
    if (date && date.startDate && date.endDate) {
      const dates: string[] = [];
      let currentDate = new Date(date.startDate);
      const endDate = new Date(date.endDate);

      while (currentDate <= endDate) {
        dates.push(formatDateToMMDD(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }
    return [];
  };

  const datesBetween: string[] = getDatesBetween();
  const handleFormChange = (index: number, field: string, value: any) => {
    const updatedForm = [...formState];
    if (!updatedForm[index]) {
      updatedForm[index] = {};
    }
    updatedForm[index][field] = value;
    setFormState(updatedForm);
  };

  const handleDayClick = (index: number) => {
    setSelectedDayIndex(index === selectedDayIndex ? null : index); // Toggle the selected day index
  };

  // Rest of your Time component code...
  return (
    <div>
      <div>
        {datesBetween.map((item: string, index: number) => (
          <div key={item}>
            <div>
              <span onClick={() => handleDayClick(index)}>{index + 1}일차</span>
            </div>
            <div>
            {selectedDayIndex === index && (
              <div>
                {/* Example form inputs */}
               <div>
                <div>
                  <span>Start Time:</span>
                  <TimeInput
                    value={formState[index]?.startTime || ""}
                    onChange={(value) => handleFormChange(index, "startTime", value)}
                  />
                </div>
                <div>
                  <span>End Time:</span>
                  <TimeInput
                    value={formState[index]?.endTime || ""}
                    onChange={(value) => handleFormChange(index, "endTime", value)}
                  />
                </div>
               </div>
                <input
                  type="checkbox"
                  checked={formState[index]?.isBreakfast || false}
                  onChange={(e) => handleFormChange(index, "isBreakfast", e.target.checked)}
                />
                <input
                  type="checkbox"
                  checked={formState[index]?.isLunch || false}
                  onChange={(e) => handleFormChange(index, "isLunch", e.target.checked)}
                />
                <input
                  type="checkbox"
                  checked={formState[index]?.isDinner || false}
                  onChange={(e) => handleFormChange(index, "isDinner", e.target.checked)}
                />
                <div>
                  <span>Meal Time:</span>
                  <TimeInput
                    value={formState[index]?.mealTime || ""}
                    onChange={(value) => handleFormChange(index, "mealTime", value)}
                  />
                </div>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
