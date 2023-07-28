import React, { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { ReactComponent as Calender } from 'assets/svg/plan/calendar_icon.svg'
import 'react-datepicker/dist/react-datepicker.css';
import styles from './datePicker.module.scss';

const DateRangeSelector: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showCalendars, setShowCalendars] = useState(false);

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    console.log(dates);
    setStartDate(start);
    setEndDate(end);
    console.log(start);
    console.log(end);
    if (start !== null && end !== null) {
      setShowCalendars(false);
    }
  };

  return (
    <div className={styles.template}>
      <div className={styles.plan}>
        <div className={styles.plan__calender} onClick={() => setShowCalendars(true)}>
          <Calender className={styles.plan__icon} />
          <input className={styles.plan__input} type="text" placeholder="어디서 출발하시나요?" />
        </div>
        <div className={styles.plan__calender} onClick={() => setShowCalendars(true)}>
          <Calender className={styles.plan__icon} />
          <input className={styles.plan__input} type="text" placeholder="어디서 출발하시나요?" />
        </div>
      </div>
      {showCalendars && (
        <div className="calendars">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            monthsShown={2}
            inline
            calendarClassName="start-calendar"
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;