import React from 'react';
import DateRangePicker from 'components/datePicker';
import moment from 'moment';

export default function dateChoice(): JSX.Element {
    const handleDateSelect = (date: Date) => {
      console.log('Selected date:', moment(date).format('YYYY-MM-DD'));
    };
  return (
    <div>
      <h1>시작일과 도착일 선택</h1>
      <DateRangePicker />
    </div>
  );
};