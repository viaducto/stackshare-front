import React from 'react';

interface BiddingTimeProps {
  price: number;
  start_time: string;
  end_time: string;
  title: string;
}
interface PricingColumnProps {
  bidding: BiddingTimeProps[];
}
const PricingColumn = ({ bidding }: PricingColumnProps) => {
  const getTop = (start: string) => {
    let minutos1 = parseInt(start.split(':')[0], 10) * 60;
    minutos1 += parseInt(start.split(':')[1], 10);
    console.log(minutos1);
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

  const getBlocks = () => {
    let blocks = [];
    for (let i = 1; i <= 48; i++) {
      blocks.push(<div key={i} className='pt-block'></div>);
    }
    return blocks;
  };

  return (
    <div className='pt-col'>
      {getBlocks()}
      {bidding.map((e) => (
        <div
          className='pt-bidtime'
          style={{ top: getTop(e.start_time), height: getHeight(e.start_time, e.end_time) }}
        >
          <span className='bidding-title'>{e.title} </span>
          <span className='bidding-time'>{getTimeLapse(e.start_time, e.end_time)}</span>
        </div>
      ))}
    </div>
  );
};

export default PricingColumn;
