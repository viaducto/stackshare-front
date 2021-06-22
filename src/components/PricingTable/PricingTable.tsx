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
  months?: { [key: string]: string };
}
const PricingTable = ({
  months = {
    1: 'JANUARY',
    2: 'FEBRUARY',
    3: 'MARCH',
    4: 'APRIL',
    5: 'MAY',
    6: 'JUNE',
    7: 'JULY',
    8: 'AUGUST',
    9: 'SEPTEMBER',
    10: 'OCTOBER',
    11: 'NOVEMBER',
    12: 'DECEMBER',
  },
}: PricingTableProps) => {
  const [month, setMonth] = useState<number>(1);
  useEffect(() => {
    const d = new Date();
    setMonth(d.getMonth());
  }, []);

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
          <Button label='<' shapeColor='success' variant='outline' />
          <Button label='>' shapeColor='success' variant='outline' />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <StyledPricingTable>
          <div></div>
          <div>{WEEK_DAYS[1]}</div>
          <div>{WEEK_DAYS[2]}</div>
          <div className='pc-hide'>{WEEK_DAYS[3]}</div>
          <div className='pc-hide'>{WEEK_DAYS[4]}</div>
          <div className='pc-hide'>{WEEK_DAYS[5]}</div>
          <div className='pc-hide'>{WEEK_DAYS[6]}</div>
          <div className='pc-hide'>{WEEK_DAYS[0]}</div>
          <div>{getTimeBlocks()}</div>
          <PricingColumn bidding={MONDAY} />
          <PricingColumn bidding={TUESDAY} />
          <PricingColumn className='pc-hide' bidding={MONDAY} />
          <PricingColumn className='pc-hide' bidding={TUESDAY} />
          <PricingColumn className='pc-hide' bidding={MONDAY} />
          <PricingColumn className='pc-hide' bidding={TUESDAY} />
          <PricingColumn className='pc-hide' bidding={TUESDAY} />
        </StyledPricingTable>
      </div>
    </>
  );
};

export default PricingTable;
