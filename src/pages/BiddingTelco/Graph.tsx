import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis } from 'react-vis';

const Graph = () => {
  const myDATA = [
    {
      x: 0,
      y: 10,
    },
    {
      x: 1,
      y: 8.683081231776637,
    },
    {
      x: 2,
      y: 8.171208698882731,
    },
    {
      x: 3,
      y: 6.927024534856714,
    },
    {
      x: 4,
      y: 5.729457123260862,
    },
    {
      x: 5,
      y: 6.37538656467437,
    },
    {
      x: 6,
      y: 6.215093142715168,
    },
  ];
  return (
    <div>
      <XYPlot margin={{ left: 0 }} width={300} height={100} xType='ordinal'>
        <VerticalBarSeries barWidth={1} style={{}} data={myDATA} />
      </XYPlot>
    </div>
  );
};

export default Graph;
