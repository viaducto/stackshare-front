import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PricingColumn from './PricingColumn';
import TimeBlock from './TimeBlock';
import { Button, Spacer, Title } from '@jp-olvera/jp-viaducto-components';
import { getWeek } from '../../utils/getWeek';
import Day from './Day';

// TODO: OPACIDAD PARA LOS DÍAS QUE NO PERTENECEN A UN MES
// TODO: INDICADOR PAR UN DÍA DEL MES ANTERIOR JULY/31
// TODO: DAR CLICK EN UN MARCO PARA CREAR EL CONTEO
// TODO: AGREGAR LA POSIBILIDAD DE AGREGAR EL DÍA DEL AÑO
// TODO: I18N, RECIBIR LOS NOMBRES DE LOS MESES COMO PARÁMETROS PARA LA INTERNACIONALIZACIÓN
// TODO: I18N, RECIBIR LOS NOMBRES DE LOS DÍAS DE LA SEMANA COMO PARÁMETROS PARA LA INTERNACIONALIZACIÓN
// TODO: CÓMO MANEJAR LOS TEXTOS DE NOON, NIGHT
// FIXME: CUANDO LLEGAS A JUNE 30 TODO SE VE GRIS
// FIXME: CAMBIAR SEMANA MARCA MAL LAS FECHAS
const StyledPricingTable = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(7, minmax(11rem, 1fr));
  grid-template-rows: 50px 50px 1fr;
  grid-auto-columns: 200px;
  padding-bottom: 1rem;
`;

const MONTHS = {
  0: 'JANUARY',
  1: 'FEBRUARY',
  2: 'MARCH',
  3: 'APRIL',
  4: 'MAY',
  5: 'JUNE',
  6: 'JULY',
  7: 'AUGUST',
  8: 'SEPTEMBER',
  9: 'OCTOBER',
  10: 'NOVEMBER',
  11: 'DECEMBER',
};
const WEEK_DAYS = {
  1: 'MON',
  2: 'TUES',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
  0: 'SUN',
};
interface SlotProps {
  price: number;
  start_time: string;
  end_time: string;
  title: string;
}
interface PricingTableProps {
  months?: { [key: number]: string };
  week_days?: { [key: number]: string };
  sun?: SlotProps[];
  mon?: SlotProps[];
  tues?: SlotProps[];
  wed?: SlotProps[];
  thu?: SlotProps[];
  fri?: SlotProps[];
  sat?: SlotProps[];
}
const PricingTable = ({
  months = MONTHS,
  week_days = WEEK_DAYS,
  sun = [],
  mon = [],
  tues = [],
  wed = [],
  thu = [],
  fri = [],
  sat = [],
}: PricingTableProps) => {
  const [month, setMonth] = useState<number>(1);
  const [weekDates, setWeekDates] = useState<{ [key: string]: { day: number; month: number } }>({
    sun: { day: 1, month: 0 },
    mon: { day: 1, month: 0 },
    tues: { day: 1, month: 0 },
    wed: { day: 1, month: 0 },
    thu: { day: 1, month: 0 },
    fri: { day: 1, month: 0 },
    sat: { day: 1, month: 0 },
  });
  const [changeWeeks, setChangeWeeks] = useState(0);
  const handleChangeWeek = (next = true) => {
    // goes forwards
    if (next) {
      setChangeWeeks((d) => d + 1);
      return;
    }
    // goes backwards
    setChangeWeeks((d) => d - 1);
  };

  useEffect(() => {
    const curr = new Date(); // today
    var selectedWeek = new Date(curr.getTime() + changeWeeks * 7 * 24 * 60 * 60 * 1000); // adjust based on changeWeeks
    setMonth(selectedWeek.getMonth());
    const weekDays = getWeek(selectedWeek);
    setWeekDates({
      sun: { day: weekDays[0].getDate(), month: weekDays[0].getMonth() },
      mon: { day: weekDays[1].getDate(), month: weekDays[1].getMonth() },
      tues: { day: weekDays[2].getDate(), month: weekDays[2].getMonth() },
      wed: { day: weekDays[3].getDate(), month: weekDays[3].getMonth() },
      thu: { day: weekDays[4].getDate(), month: weekDays[4].getMonth() },
      fri: { day: weekDays[5].getDate(), month: weekDays[5].getMonth() },
      sat: { day: weekDays[6].getDate(), month: weekDays[6].getMonth() },
    });
  }, [changeWeeks]);

  const getTimeBlocks = () => {
    let blocks = [];
    for (let i = 1; i <= 24; i++) {
      blocks.push(<TimeBlock key={i} hora={i} />);
    }
    return blocks;
  };

  return (
    <StyledPricingTable>
      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 9,
          display: 'flex',
          alignItems: 'center',
          paddingRight: '2px',
        }}
      >
        <Title level='3'>{months[month]}</Title>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            label='<'
            variant='outline'
            onClick={() => {
              handleChangeWeek(false);
            }}
          />
          <Spacer size='sm' direction='horizontal' />
          <Button
            label='>'
            variant='outline'
            onClick={() => {
              handleChangeWeek();
            }}
          />
        </div>
      </div>
      <div></div>
      <Day name={week_days[0]} number={weekDates.sun.day} month={weekDates.sun.month} />
      <Day name={week_days[1]} number={weekDates.mon.day} month={weekDates.mon.month} />
      <Day name={week_days[2]} number={weekDates.tues.day} month={weekDates.tues.month} />
      <Day name={week_days[3]} number={weekDates.wed.day} month={weekDates.wed.month} />
      <Day name={week_days[4]} number={weekDates.thu.day} month={weekDates.thu.month} />
      <Day name={week_days[5]} number={weekDates.fri.day} month={weekDates.fri.month} />
      <Day name={week_days[6]} number={weekDates.sat.day} month={weekDates.sat.month} />

      <div>{getTimeBlocks()}</div>
      <PricingColumn isCurrentMonth={weekDates.sun.month === month} bidding={sun} />
      <PricingColumn isCurrentMonth={weekDates.mon.month === month} bidding={mon} />
      <PricingColumn isCurrentMonth={weekDates.tues.month === month} bidding={tues} />
      <PricingColumn isCurrentMonth={weekDates.wed.month === month} bidding={wed} />
      <PricingColumn isCurrentMonth={weekDates.thu.month === month} bidding={thu} />
      <PricingColumn isCurrentMonth={weekDates.fri.month === month} bidding={fri} />
      <PricingColumn isCurrentMonth={weekDates.sat.month === month} bidding={sat} />
    </StyledPricingTable>
  );
};

export default PricingTable;
