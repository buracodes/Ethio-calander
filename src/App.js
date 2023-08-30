import './App.css';
import React, { useState } from 'react';
import { getEthiopianMonth, getEthiopianYear, getEthiopianDaysInMonth } from './ethiopianCalendarUtils';

function EthiopianCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const ethiopianMonth = getEthiopianMonth(selectedDate);
  const ethiopianYear = getEthiopianYear(selectedDate);
  const daysInMonth = getEthiopianDaysInMonth(ethiopianMonth, ethiopianYear);

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, selectedDate.getDate()));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()));
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevMonth}>Prev</button>
        <span>{ethiopianMonth}{ethiopianYear}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>እሁድ</th>
            <th>ሰኞ</th>
            <th>ማክሰኞ</th>
            <th>እሮብ</th>
            <th>ሃሙስ</th>
            <th>አርብ</th>
            <th>ቅዳሜ</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(daysInMonth / 7))].map((_, weekIndex) => (
            <tr key={weekIndex}>
              {[...Array(7)].map((_, dayIndex) => {
                const dayOfMonth = weekIndex * 7 + dayIndex + 1;
                return (
                  <td key={dayOfMonth}>
                    {dayOfMonth <= daysInMonth && (
                      <div>{dayOfMonth}</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EthiopianCalendar;