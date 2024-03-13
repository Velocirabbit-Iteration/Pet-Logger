import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { addDays, differenceInCalendarDays } from 'date-fns';

const CalendarComponent = ({ dates }) => {
  // type ValuePiece = Date | null;

  // type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState(new Date());

  // console.log(value);

  // const matchDates = ['2024-03-01','2024-03-02', '2024-03-03'];

  const now = new Date();

  const tomorrow = addDays(now, 1);
  const in3Days = addDays(now, 3);

  const testDates = [tomorrow, in3Days];
  // console.log(testDates)
  const newDates = [];
  dates.forEach((date) => newDates.push(date.split('T')[0]));
  console.log(newDates);
  // const dateMatch = (date) => {
  //   const formatDate = date.toISOString().split('T')[0];
  //   return matchDates.includes(formatDate);
  // };

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  const tileClassName = ({ date, view }) => {
    // Create a new Date object using the date string
    var dateObject = new Date(date);

    // Format the date to YYYY-MM-DD
    var year = dateObject.getFullYear();
    var month = ('0' + (dateObject.getMonth() + 1)).slice(-2); // add leading zero and get the last two digits
    var day = ('0' + dateObject.getDate()).slice(-2); // add leading zero and get the last two digits

    var formattedDate = year + '-' + month + '-' + day;

    if (
      view === 'month' &&
      newDates.find((dDate) => isSameDay(dDate, formattedDate))
    ) {
      return 'highlight';
    }
  };

  return (
    <div>
      <Calendar
        value={value}
        onChange={onChange}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default CalendarComponent;
