import { useState, useEffect } from 'react';
import styled from 'styled-components';
/**
 * categorize and divide data into groups
 */
interface CohortData {
  cohorts: {
    label: string;
    values: string[];
  }[];
  data: {
    label: string;
    values: number[];
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

const Valor = styled.button<{
  red: number;
  blue: number;
  green: number;
  opacity: number;
  format: null | string;
}>`
  align-items: center;
  appearance: none;
  background-color: ${(p) => `rgba(${p.red}, ${p.green},${p.blue},${p.opacity}%)`};
  box-sizing: border-box;
  display: flex;
  color: ${(p) => p.theme.primaryText} !important;
  height: 40px;
  justify-content: ${(p) => (p.format ? 'flex-end' : 'center')};
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

export const CohortTable = ({
  data,
  cellClick,
  cellMouseEnter,
  compare = false,
  format = null,
}: {
  data: CohortData;
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
  compare?: boolean;
  format?: null | 'percent' | 'currency';
}) => {
  if (!data.cohorts.length) {
    throw new Error(
      'You should provide at least one object with a label and a list ov values in data.cohorts'
    );
  }
  let symbol = '';
  let prefix = true;
  if (format === 'percent') {
    symbol = '%';
    prefix = false;
  } else if (format === 'currency') {
    symbol = '$';
  }
  const [dataToShow, setdataToShow] = useState<CohortData>(data);
  useEffect(() => {
    if (compare) {
      const refactoredData: {
        label: string;
        values: number[];
        symbol?: string | null;
      }[] = [];

      refactoredData.push(data.data[0]);
      for (let i = 1; i < data.data.length; i++) {
        const newValues = data.data[i].values.map(
          (value, valueId) => value - data.data[i - 1].values[valueId]
        );
        const newColumn = {
          label: data.data[i].label,
          values: newValues,
        };
        refactoredData.push(newColumn);
      }
      console.log(refactoredData);
      setdataToShow({
        cohorts: data.cohorts,
        data: refactoredData,
      });
    } else {
      setdataToShow(data);
    }
  }, [compare, data]);

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <div style={{ display: 'flex' }}>
        {dataToShow.cohorts.map((cohort, i) => (
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
        {dataToShow.data.map((column, columnId) => (
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
                opacity={data.data[columnId].values[valueId]}
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
                format={format}
              >
                {prefix ? `${symbol} ${value}` : `${value} ${symbol}`}
              </Valor>
            ))}
          </CohortColumn>
        ))}
      </div>
    </div>
  );
};
