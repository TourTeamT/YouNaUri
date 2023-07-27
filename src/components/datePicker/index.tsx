import React, { useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './DateRangeSelector.css'; // 컴포넌트 스타일을 위한 CSS 파일

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
    <div className="date-range-selector">
      <div className="button-group">
        <div>
          <div onClick={() => setShowCalendars(true)}>{startDate ?  `${startDate}` : '시작일' }</div>
          <div onClick={() => setShowCalendars(true)}>{endDate ? `${endDate}` : '종료일' }</div>
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