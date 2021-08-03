import { Grid, Row, Column } from '@jp-olvera/jp-viaducto-components';
import styled from 'styled-components';
/**
 * categorize and divide data into groups
 */

const DATA = {
  cohorts: [
    { label: 'Time', values: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6'] },
    { label: 'Users', values: ['1500', '6000', '3000', '400', '500', '600'] },
  ],
  data: [
    {
      label: 'Day 1',
      values: [100, 90, 95, 87, 92, 70],
      format: 'percent',
    },
    {
      label: 'Day 2',
      values: [85, 70, 86, 60, 60],
      format: 'percent',
    },
    {
      label: 'Day 3',
      values: [70, 75, 55, 57],
      format: 'percent',
    },
    {
      label: 'Day 4',
      values: [100, 80, 70],
      format: 'percent',
    },
    {
      label: 'Day 5',
      values: [20, 5],
      format: 'percent',
    },
    {
      label: 'Day 6',
      values: [0],
      format: 'percent',
    },
  ],
};

const CohortColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.primaryText};
`;
const Dato = styled.div<{
  red: number;
  blue: number;
  green: number;
  opacity: number;
  bold?: boolean;
}>`
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  padding: 5px 10px;
  text-align: center;
  /* background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`}; */
  font-weight: ${(p) => (p.bold ? 'bold' : 'regular')};
  /* border-bottom: 1px solid rgb(235, 235, 235); */
`;

const Valor = styled.div<{ red: number; blue: number; green: number; opacity: number }>`
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  padding: 5px 10px;
  text-align: center;
  position: relative;
  &:hover {
    background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`};
    transition: background-color 230ms linear;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`};
  }
`;
export const CohortTable = () => {
  return (
    <Grid expanded>
      <Row style={{ justifyContent: 'center' }}>
        <Column md={10}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              {DATA.cohorts.map((e) => (
                <CohortColumn>
                  <Dato red={245} blue={245} green={245} opacity={100} bold>
                    {e.label}
                  </Dato>
                  {e.values.map((d) => (
                    <Dato red={245} blue={245} green={245} opacity={100}>
                      {d}
                    </Dato>
                  ))}
                </CohortColumn>
              ))}
            </div>
            <div style={{ flexGrow: 1, overflowX: 'auto', display: 'flex' }}>
              {DATA.data.map((e) => (
                <CohortColumn>
                  <Dato red={245} blue={245} green={245} opacity={100} bold>
                    {e.label}
                  </Dato>
                  {e.values.map((d) => (
                    <Valor red={0} blue={120} green={255} opacity={d}>
                      {d}
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

export default CohortTable;
