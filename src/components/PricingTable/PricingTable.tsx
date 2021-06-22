import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PricingColumn from './PricingColumn';
import TimeBlock from './TimeBlock';
import { Button } from '@jp-olvera/jp-viaducto-components';
// TODO: OPACIDAD PARA LOS DÍAS QUE NO PERTENECEN A UN MES
// TODO: INDICADOR PAR UN DÍA DEL MES ANTERIOR JULY/31
// TODO: DAR CLICK EN UN MARCO PARA CREAR EL CONTEO
// TODO: AGREGAR LA POSIBILIDAD DE AGREGAR EL MES DEL AÑO
// TODO: AGREGAR LA POSIBILIDAD DE AGREGAR EL DÍA DEL AÑO
// TODO: EVALUAR LA POSIBILIDAD DE FLECHAS PARA UNA SEMANA ANTES Y UNA ANTERIOR
// TODO: I18N, RECIBIR LOS NOMBRES DE LOS MESES COMO PARÁMETROS PARA LA INTERNACIONALIZACIÓN
// TODO: I18N, RECIBIR LOS NOMBRES DE LOS DÍAS DE LA SEMANA COMO PARÁMETROS PARA LA INTERNACIONALIZACIÓN
// TODO: CÓMO MANEJAR LOS TEXTOS DE NOON, NIGHT
// FIXME: EL BORDE DE LA COLUMNA DE HORAS NO DEBE SALIR COMPLETO
// FIXME: CUANDO LLEGAS A JUNE 30 TODO SE VE GRIS
const StyledPricingTable = styled.div`
  display: grid;
  grid-template-columns: 90px repeat(7, minmax(11rem, 1fr));
  grid-template-rows: 27px 1fr;
  grid-auto-columns: 200px;

  @media (max-width: 768px) {
    grid-template-columns: 90px repeat(2, minmax(11rem, 1fr));
    .pc-hide {
      display: none !important;
    }
  }
`;

interface PricingTableProps {
  months?: { [key: number]: string };
}
const PricingTable = ({
  months = {
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
  },
}: PricingTableProps) => {
  const [month, setMonth] = useState<number>(1);
  const [weekDates, setWeekDates] = useState<{ [key: number]: [number, number] }>({
    0: [0, 0],
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0],
    6: [0, 0],
  });
  const [changeWeeks, setChangeWeeks] = useState(0);
  // const [todayDay, setTodayDay] = useState(0);
  // const [todayMonth, setTodayMonth] = useState(1);
  // useEffect(() => {
  //   const d = new Date();
  //   setTodayDay(d.getDay());
  //   setTodayMonth(d.getMonth());
  // }, []);
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
    curr.setDate(curr.getDate() + changeWeeks * 7); // adjust based on changeWeeks
    console.log(curr);
    setMonth(curr.getMonth());
    const firstDay = curr.getDate() - curr.getDay();
    setWeekDates({
      0: [new Date(curr.setDate(firstDay)).getDate(), new Date(curr.setDate(firstDay)).getMonth()],
      1: [
        new Date(curr.setDate(firstDay + 1)).getDate(),
        new Date(curr.setDate(firstDay + 1)).getMonth(),
      ],
      2: [
        new Date(curr.setDate(firstDay + 2)).getDate(),
        new Date(curr.setDate(firstDay + 2)).getMonth(),
      ],
      3: [
        new Date(curr.setDate(firstDay + 3)).getDate(),
        new Date(curr.setDate(firstDay + 3)).getMonth(),
      ],
      4: [
        new Date(curr.setDate(firstDay + 4)).getDate(),
        new Date(curr.setDate(firstDay + 4)).getMonth(),
      ],
      5: [
        new Date(curr.setDate(firstDay + 5)).getDate(),
        new Date(curr.setDate(firstDay + 5)).getMonth(),
      ],
      6: [
        new Date(curr.setDate(firstDay + 6)).getDate(),
        new Date(curr.setDate(firstDay + 6)).getMonth(),
      ],
    });
  }, [changeWeeks]);

  const MONDAY = [
    {
      price: 5,
      start_time: '00:00',
      end_time: '01:15',
      title: 'comer',
    },
    {
      price: 5,
      start_time: '01:20',
      end_time: '02:25',
      title: 'Uptime',
    },
    {
      price: 5,
      start_time: '03:45',
      end_time: '04:10',
      title: 'Uptime',
    },
    {
      price: 5,
      start_time: '09:00',
      end_time: '10:00',
      title: 'almorzar',
    },
    {
      price: 5,
      start_time: '12:45',
      end_time: '13:30',
      title: 'cenar',
    },
  ];
  const TUESDAY = [
    {
      price: 5,
      start_time: '07:00',
      end_time: '07:30',
      title: 'Uptime',
    },
    {
      price: 5,
      start_time: '09:30',
      end_time: '09:45',
      title: 'quinceminutos',
    },
    {
      price: 5,
      start_time: '10:00',
      end_time: '10:30',
      title: 'Uptime',
    },
  ];

  const getTimeBlocks = () => {
    let blocks = [];
    for (let i = 1; i <= 24; i++) {
      blocks.push(<TimeBlock key={i} hora={i} />);
    }
    return blocks;
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
  return (
    <>
      <div style={{ display: 'flex', fontSize: '2rem' }}>
        <span>
          <b>{months[month]}</b>
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            label='<'
            shapeColor='success'
            variant='outline'
            onClick={() => {
              handleChangeWeek(false);
            }}
          />
          <Button
            label='>'
            shapeColor='success'
            variant='outline'
            onClick={() => {
              handleChangeWeek();
            }}
          />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <StyledPricingTable>
          <div></div>
          <div>
            {WEEK_DAYS[0]} ({weekDates[0][0]} del {weekDates[0][1]})
          </div>
          <div>
            {WEEK_DAYS[1]} ({weekDates[1][0]} del {weekDates[1][1]})
          </div>
          <div className='pc-hide'>
            {WEEK_DAYS[2]} ({weekDates[2][0]} del {weekDates[2][1]})
          </div>
          <div className='pc-hide'>
            {WEEK_DAYS[3]} ({weekDates[3][0]} del {weekDates[3][1]})
          </div>
          <div className='pc-hide'>
            {WEEK_DAYS[4]} ({weekDates[4][0]} del {weekDates[4][1]})
          </div>
          <div className='pc-hide'>
            {WEEK_DAYS[5]} ({weekDates[5][0]} del {weekDates[5][1]})
          </div>
          <div className='pc-hide'>
            {WEEK_DAYS[6]} ({weekDates[6][0]} del {weekDates[6][1]})
          </div>
          <div>{getTimeBlocks()}</div>
          <PricingColumn isCurrentMonth={weekDates[0][1] === month} bidding={MONDAY} />
          <PricingColumn isCurrentMonth={weekDates[1][1] === month} bidding={TUESDAY} />
          <PricingColumn
            isCurrentMonth={weekDates[2][1] === month}
            className='pc-hide'
            bidding={MONDAY}
          />
          <PricingColumn
            isCurrentMonth={weekDates[3][1] === month}
            className='pc-hide'
            bidding={TUESDAY}
          />
          <PricingColumn
            isCurrentMonth={weekDates[4][1] === month}
            className='pc-hide'
            bidding={MONDAY}
          />
          <PricingColumn
            isCurrentMonth={weekDates[5][1] === month}
            className='pc-hide'
            bidding={TUESDAY}
          />
          <PricingColumn
            isCurrentMonth={weekDates[6][1] === month}
            className='pc-hide'
            bidding={TUESDAY}
          />
        </StyledPricingTable>
      </div>
    </>
  );
};

export default PricingTable;
