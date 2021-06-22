import React from 'react';
import EmptySlot from './EmptySlot';
import Slot from './Slot';

interface BiddingTimeProps {
  price: number;
  start_time: string;
  end_time: string;
  title: string;
}
interface PricingColumnProps {
  bidding: BiddingTimeProps[];
  className?: string;
}
const PricingColumn = ({ bidding, className = '', ...rest }: PricingColumnProps) => {
  const getTop = (start: string) => {
    let minutos1 = parseInt(start.split(':')[0], 10) * 60;
    minutos1 += parseInt(start.split(':')[1], 10);
    // console.log(minutos1);
    let top = (minutos1 * 56) / 60;
    return top + 'px';
  };
  const getHeight = (start: string, end: string) => {
    let minutos1 = parseInt(start.split(':')[0], 10) * 60;
    minutos1 += parseInt(start.split(':')[1], 10);
    let minutos2 = parseInt(end.split(':')[0], 10) * 60;
    minutos2 += parseInt(end.split(':')[1], 10);
    const time = minutos2 - minutos1;
    const h = (time * 56) / 60;

    return h + 'px';
  };
  // obtener la duración de un tiempo definido
  const getTimeLapse = (start: string, end: string) => {
    let minutos1 = parseInt(start.split(':')[0], 10) * 60;
    minutos1 += parseInt(start.split(':')[1], 10);
    let minutos2 = parseInt(end.split(':')[0], 10) * 60;
    minutos2 += parseInt(end.split(':')[1], 10);

    if (minutos2 < minutos1) {
      return '0min';
    }
    const r = minutos2 - minutos1;
    if (r < 60) {
      return `${r}min`;
    }
    if (r % 60 === 0) {
      return `${r / 60}hrs`;
    }
    return `${Math.round(r / 60)}hrs ${r % 60}mins`;
  };

  const getEmptySlots = () => {
    let blocks = [];
    for (let i = 1; i <= 48; i++) {
      blocks.push(<EmptySlot key={i} />);
    }
    return blocks;
  };

  return (
    <div
      style={{
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={className}
      {...rest}
    >
      {getEmptySlots()}
      {bidding.map((e, i) => (
        <Slot
          key={i}
          title={e.title}
          timeLapse={getTimeLapse(e.start_time, e.end_time)}
          top={getTop(e.start_time)}
          height={getHeight(e.start_time, e.end_time)}
        />
      ))}
    </div>
  );
};

export default PricingColumn;
