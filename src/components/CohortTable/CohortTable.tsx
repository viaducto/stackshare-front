import { useState, useEffect } from 'react';
import { Grid, Row, Column } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
import { Modal } from '@jp-olvera/jp-viaducto-components';
import { XYPlot, VerticalBarSeries } from 'react-vis';
import { MainBackground } from '../Backgrounds';

/**
 * categorize and divide data into groups
 */
interface datos {
  cohorts: {
    label: string;
    values: string[];
  }[];
  data: {
    label: string;
    values: number[];
    prefix?: string | undefined;
  }[];
}

const CohortColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const Dato = styled.div<{
  red: number;
  blue: number;
  green: number;
  opacity: number;
  bold?: boolean;
}>`
  background-color: ${(p) => p.theme.secondaryBackground};
  box-sizing: border-box;
  color: ${(p) => p.theme.secondaryText} !important;
  display: flex;
  height: 40px;
  font-weight: ${(p) => (p.bold ? 'bold' : 'regular')};
  flex-direction: column;
  min-width: 80px;
  padding: 5px 10px;
  text-align: center;
`;

const Valor = styled.button<{ red: number; blue: number; green: number; opacity: number }>`
  align-items: center;
  appearance: none;
  background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`};
  box-sizing: border-box;
  display: flex;
  color: ${(p) => p.theme.primaryText} !important;
  height: 40px;
  justify-content: center;
  margin: 0;
  min-width: 80px;
  padding: 5px 10px;
  position: relative;
  text-align: center;
  border: none;
  border-radius: 0px;
  font-size: 1rem !important;
  &:hover {
    background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`};
    transition: background-color 230ms linear;
  }
`;

const CohortTable = ({
  data,
  cellClick,
  cellMouseEnter,
}: {
  data: datos;
  cellClick?: (columnDetails: {
    value: number;
    valueIndex: number;
    columnId: number;
    column: {
      label: string;
      values: number[];
    };
  }) => void | undefined;
  cellMouseEnter?: (columnDetails: {
    value: number;
    valueIndex: number;
    columnId: number;
    column: {
      label: string;
      values: number[];
    };
  }) => void | undefined;
}) => {
  return (
    <Grid expanded>
      <Row style={{ justifyContent: 'center' }}>
        <Column md={10}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              {data.cohorts.map((cohort, i) => (
                <CohortColumn key={`cohort-column-${i}`}>
                  <Dato red={245} blue={245} green={245} opacity={100} bold>
                    {cohort.label}
                  </Dato>
                  {cohort.values.map((d, i) => (
                    <Dato red={245} blue={245} green={245} opacity={100} key={`cohort-value-${i}`}>
                      {d}
                    </Dato>
                  ))}
                </CohortColumn>
              ))}
            </div>
            <div style={{ flexGrow: 1, overflowX: 'auto', display: 'flex' }}>
              {data.data.map((column, columnId) => (
                <CohortColumn key={`column-${columnId}`}>
                  <Dato red={245} blue={245} green={245} opacity={100} bold>
                    {column.label}
                  </Dato>
                  {column.values.map((value, valueId) => (
                    <Valor
                      key={`valor-${valueId}`}
                      red={0}
                      blue={120}
                      green={255}
                      opacity={value}
                      type='button'
                      onClick={(ev) => {
                        if (cellClick) {
                          cellClick({
                            value: value,
                            valueIndex: valueId,
                            columnId: columnId,
                            column: column,
                          });
                        }
                      }}
                      onMouseEnter={(ev) => {
                        if (cellMouseEnter) {
                          cellMouseEnter({
                            value: value,
                            valueIndex: valueId,
                            columnId: columnId,
                            column: column,
                          });
                        }
                      }}
                    >
                      {value}
                    </Valor>
                  ))}
                </CohortColumn>
              ))}
            </div>
          </div>
        </Column>
      </Row>
    </Grid>
  );
};

const Page = () => {
  const DATA = {
    cohorts: [
      { label: 'Time', values: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 4'] },
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

  return (
    <>
      <MainBackground>
        <XYPlot height={150} width={300} colorRange={['blue', 'red']}>
          <VerticalBarSeries
            data={plotData.map((d, i) => ({ ...d, color: i === index ? 1 : 0 }))}
            stroke='white'
            barWidth={0.35}
          />
        </XYPlot>
      </MainBackground>
      <CohortTable data={DATA} cellClick={handleCellClick} cellMouseEnter={handleCellMouseEnter} />
      <Modal active={isModalActive} handleActive={handleModalActive}>
        {selectedCell !== null ? <pre>{JSON.stringify(selectedCell, null, 3)}</pre> : null}
      </Modal>
    </>
  );
};

export default Page;
