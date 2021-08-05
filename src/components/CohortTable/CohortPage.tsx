import { useState, useEffect } from 'react';
import { Checkbox, Modal, Column, Grid, Row } from '@jp-olvera/jp-viaducto-components';
import { XYPlot, VerticalBarSeries } from 'react-vis';
import { MainBackground } from '../Backgrounds';
import { CohortTable } from './CohortTable';
const CohortPage = () => {
  const DATA = {
    cohorts: [
      { label: 'Time', values: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6'] },
      { label: 'Users', values: ['1500', '6000', '3000', '400', '500', '600'] },
    ],
    data: [
      {
        label: 'Day 1',
        values: [100, 96, 92, 87, 82, 70],
      },
      {
        label: 'Day 2',
        values: [85, 70, 66, 60, 59],
      },
      {
        label: 'Day 3',
        values: [78, 75, 55, 51],
      },
      {
        label: 'Day 4',
        values: [100, 80, 70],
        prefix: 'percent',
      },
      {
        label: 'Day 5',
        values: [20, 5],
      },
      {
        label: 'Day 6',
        values: [0],
      },
    ],
  };
  // const DATA: datos = ;
  const plotData: { x: number; y: number }[] = [];
  for (let i = 0; i < DATA.data.length; i++) {
    const column = DATA.data[i];
    for (let cId = 0; cId < column.values.length; cId++) {
      const value = column.values[cId];
      plotData.push({ x: i, y: value });
    }
  }

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const handleModalActive = () => {
    setIsModalActive((d) => !d);
  };
  const [selectedCell, setSelectedCell] = useState<any | null>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (selectedCell !== null && plotData.length) {
      let sequenceStart = 0;
      for (let i = 0; i < plotData.length; i++) {
        if (plotData[i].x === selectedCell.columnId) {
          sequenceStart = i;
          break;
        }
      }
      setIndex(sequenceStart + selectedCell.valueIndex);
    }
  }, [selectedCell]);
  const handleCellClick = (columnDetails: any) => {
    setSelectedCell(columnDetails);
    handleModalActive();
  };
  const handleCellMouseEnter = (columnDetails: any) => {
    setSelectedCell(columnDetails);
  };

  const [compare, setCompare] = useState(false);
  return (
    <Grid expanded style={{ overflow: 'auto' }}>
      <Row style={{ justifyContent: 'center' }}>
        <Column md={10}>
          <MainBackground>
            <XYPlot height={150} width={300} colorRange={['blue', 'red']}>
              <VerticalBarSeries
                data={plotData.map((d, i) => ({ ...d, color: i === index ? 1 : 0 }))}
                stroke='white'
                barWidth={0.35}
              />
            </XYPlot>
          </MainBackground>
          <Checkbox
            id='compare'
            checked={compare}
            onChange={(ev) => {
              setCompare((d) => !d);
            }}
            label='Compare with the previous day'
          />
          <CohortTable
            data={DATA}
            cellClick={handleCellClick}
            cellMouseEnter={handleCellMouseEnter}
            compare={compare}
          />
          <CohortTable
            data={DATA}
            cellClick={handleCellClick}
            cellMouseEnter={handleCellMouseEnter}
            compare={compare}
            format='percent'
          />
          <CohortTable
            data={DATA}
            cellClick={handleCellClick}
            cellMouseEnter={handleCellMouseEnter}
            compare={compare}
            format='currency'
          />
          <Modal active={isModalActive} handleActive={handleModalActive}>
            {selectedCell !== null ? <pre>{JSON.stringify(selectedCell, null, 3)}</pre> : null}
          </Modal>
        </Column>
      </Row>
    </Grid>
  );
};

export default CohortPage;
