import React, { useState, useEffect } from 'react';
interface DayProps {
  name: string;
  number: number;
  month: number;
}
const Day = ({ name, number, month }: DayProps) => {
  const [todayDay, setTodayDay] = useState(0);
  const [todayMonth, setTodayMonth] = useState(1);
  useEffect(() => {
    const d = new Date();
    setTodayDay(d.getDate());
    setTodayMonth(d.getMonth());
  }, []);
  return (
    <div
      style={{
        height: '50px',
        width: '11rem',
        float: 'left',
      }}
      className={todayDay === number && todayMonth === month ? 'is-today ' : ''}
    >
      {name} {number}
    </div>
  );
};

export default Day;
