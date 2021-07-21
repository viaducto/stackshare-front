import { Paragraph } from '@jp-olvera/jp-viaducto-components';
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
    >
      <Paragraph color={todayDay === number && todayMonth === month ? '#7cb305' : 'dark'}>
        {name} {number}
      </Paragraph>
    </div>
  );
};

export default Day;
