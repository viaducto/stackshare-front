import { useMemo } from 'react';
import { Title, Container, WrapperTable } from '@jp-olvera/jp-viaducto-components';
import { useTable } from 'react-table';
import { BodyContent, BodyMain, BodyHeader } from '../../components/layout';
import fetchResult from './data';

const UserList = () => {
  const data = useMemo(() => fetchResult, []);
  const columns = useMemo<any>(
    () => [
      {
        Header: 'Customer',
        accessor: 'customer', // accessor is the "key" in the data
      },
      {
        Header: 'Invoice Id',
        accessor: 'invoice',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'ammount',
        accessor: 'ammount',
      },
      {
        Header: 'status',
        accessor: 'status',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <BodyContent>
      <BodyHeader>
        <Container vertical='sm'>
          <Title level='3'>User Management</Title>
        </Container>
      </BodyHeader>
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <BodyMain
          style={{
            boxSizing: 'border-box',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <WrapperTable
            fontSize='md'
            zebra={false}
            verticalSpacing='md'
            border='horizontal'
            borderColor='#E8E8E8'
            horizontalSpacing='sm'
          >
            <table {...getTableProps()}>
              <thead>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th {...column.getHeaderProps()}>
                            {
                              // Render the header
                              column.render('Header')
                            }
                          </th>
                        ))
                      }
                    </tr>
                  ))
                }
              </thead>
              {/* Apply the table body props */}
              <tbody {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  rows.map((row) => {
                    // Prepare the row for display
                    prepareRow(row);
                    return (
                      // Apply the row props
                      <tr {...row.getRowProps()}>
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props
                            return (
                              <td {...cell.getCellProps()}>
                                {
                                  // Render the cell contents
                                  cell.render('Cell')
                                }
                              </td>
                            );
                          })
                        }
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </WrapperTable>
        </BodyMain>
      </div>
    </BodyContent>
  );
};

export default UserList;
