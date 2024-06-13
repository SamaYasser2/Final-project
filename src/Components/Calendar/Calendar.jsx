
import React, { useState } from 'react';
import './Calendar.css'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);
    const prevMonthDays = daysInMonth(month - 1, year);
    const monthData = [];

    let day = 1;

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      monthData.push({ day: prevMonthDays - i, month: month - 1, year: year, currentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      monthData.push({ day: i, month: month, year: year, currentMonth: true });
    }

    return monthData;
  };

  const handleDateClick = (day, month, year) => {
    setSelectedDate(new Date(year, month, day));
  };

  const renderMonth = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const monthData = getMonthData(year, month);

    return monthData.map((data, index) => (
      <div key={index} onClick={() => handleDateClick(data.day, data.month, data.year)}>
        {data.currentMonth ? (
          <span>{data.day}</span>
        ) : (
          <span style={{ color: 'gray' }}>{data.day}</span>
        )}
      </div>
    ));
  };

  return (
    <div className="calendar-container mb-2 "> {/* Apply CSS class for styling */}
    <div className="header">
      <h4 className='' >{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</h4>
    </div>
    <div className="weekdays">
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
    </div>
    <div className="days">{renderMonth()}</div>
  </div>
);
};

export default Calendar;

