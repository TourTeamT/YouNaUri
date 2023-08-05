import React, { useState, useRef } from 'react';
import moment from 'moment';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import useUserSelect from 'utils/userSelectStore';
import { ko } from 'date-fns/esm/locale';
import { ReactComponent as Calendar } from 'assets/svg/plan/calendar_icon.svg';
import { ReactComponent as Next } from 'assets/svg/plan/arrow_next_icon.svg';
import { ReactComponent as Prev } from 'assets/svg/plan/arrow_prev_icon.svg';
import 'moment/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import styles from './datePicker.module.scss';

type CustomHeaderProps = {
  date: Date | null;
  customHeaderCount: number;
};

const customHeader = ({ date, customHeaderCount }: CustomHeaderProps) => {
  const currentMonth = moment(date);
  const nextMonth = moment(date).add(1, 'month');

  return (
    <div className={styles.header}>
      {customHeaderCount === 0 ? currentMonth.format('YYYY년 MM월') : nextMonth.format('YYYY년 MM월') }
    </div>
  );
};

const DateRangeSelector: React.FC = () => {
  const { startDate, endDate, setStartDate, setEndDate} = useUserSelect();
  const [showCalendars, setShowCalendars] = useState(false);

  const datePickerRef = useRef<any>(null);
  moment.locale('ko');

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start !== null && end !== null) {
      setShowCalendars(false);
    }
  };

  const openDatePicker = () => {
    datePickerRef.current?.setOpen(true);
  };

  const handlePreviousMonth = (date: Date | null) => {
    if(date === null) return;
    setStartDate(moment(date).subtract(1, 'month').toDate());
  };
  
  const handleNextMonth = (date: Date | null) => {
    if(date === null) return;
    setStartDate(moment(date).add(1, 'month').toDate());
  }

  return (
    <div className={styles.template}>
      <div className={styles.plan}>
        <div className={styles.plan__calender} onClick={() => setShowCalendars(true)}>
          <Calendar className={styles.plan__icon} />
          <input
            className={styles.plan__input}
            value={startDate ? moment(startDate).format('MMM Do') : ''}
            type="text"
            placeholder="출발일"
          />
        </div>
        <div className={styles.plan__calender} onClick={() => setShowCalendars(true)}>
          <Calendar className={styles.plan__icon} />
          <input
            className={styles.plan__input}
            value={endDate ? moment(endDate).format('MMM Do') : ''}
            type="text"
            placeholder="도착일"
          />
        </div>
      </div>
      {showCalendars && (
        <div className={styles.calender}>
          <Prev onClick={() => handlePreviousMonth(startDate)} />
          <DatePicker
            ref={datePickerRef}
            onChange={handleDateChange}
            minDate={new Date()}
            selected={startDate}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            monthsShown={2}
            dateFormat="YYYY년 MM월 DD일"
            renderCustomHeader={customHeader}
            inline
            popperClassName={styles.calender__popper}
            wrapperClassName={styles.calender__wrapper}
            calendarClassName={styles.calender__start}
          />
          <Next onClick={() => handleNextMonth(startDate)} />
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;
