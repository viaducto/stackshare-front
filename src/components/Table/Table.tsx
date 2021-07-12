import React, { useMemo, useEffect, forwardRef, useRef, useState } from 'react';
import { Button, Paragraph, Input, Container, Spacer } from '@jp-olvera/jp-viaducto-components';
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useColumnOrder,
  useBlockLayout,
  useResizeColumns,
  useExpanded,
  useFilters,
} from 'react-table';
import {
  Apps,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Search,
} from 'react-ikonate';

const GlobalFilter = ({ globalFilter, setGlobalFilter }: any) => {
  const [value, setValue] = useState(globalFilter);
  const onChangeVal = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Input
      label='Search'
      icon={<Search />}
      inputSize='small'
      border='outside'
      value={value || ''}
      onChange={(e: any) => {
        setValue(e.target.value);
        onChangeVal(e.target.value);
      }}
    />
  );
};

const Table = ({
  cols,
  dataTable,
  filter = true,
  pagination = true,
}: {
  cols: any[];
  dataTable: any[];
  filter?: boolean;
  pagination?: boolean;
}) => {
  const defaultColumn = useMemo(() => ({}), []);
  const renderRowSubComponent = React.useCallback(({ row }) => row.original.expandible, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    setColumnOrder,
    visibleColumns,
  } = useTable(
    {
      columns: cols,
      data: dataTable,
      defaultColumn,
      initialState: {
        hiddenColumns: ['hidden'],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useColumnOrder,
    useBlockLayout,
    useResizeColumns,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((oldColumns: any) => [
        {
          id: 'selection',
          width: 'max-content',
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div style={{ userSelect: 'none' }}>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} size='sm' />
            </div>
          ),
          Cell: ({ row }: any) => {
            return (
              <div style={{ width: '100%' }}>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} size='sm' />
              </div>
            );
          },
        },
        ...oldColumns,
      ]);
    }
  );
  const [draggedId, setDraggedId] = useState<null | string>(null);
  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.add('dragColor');
      e.target.parentNode.classList.remove('dragNocolor');
    } else if (e.target.classList.contains('sortable-dropzone')) {
      e.target.classList.add('drag-sort-enter');
    }
  };
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragColor');
      e.target.parentNode.classList.add('dragNocolor');
    } else if (e.target.classList.contains('sortable-dropzone')) {
      e.target.classList.remove('drag-sort-enter');
    }
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: any, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const { classList } = e.target;
    if (classList.contains('dropzone') || classList.contains('sortable-dropzone')) {
      if (classList.contains('dropzone')) {
        e.target.parentNode.classList.remove('dragColor');
        e.target.parentNode.classList.add('dragNocolor');
      } else {
        e.target.classList.remove('drag-sort-enter');
      }
      if (draggedId && id) {
        let id1: any, id2: any;
        for (let i = 0; i < visibleColumns.length; i++) {
          if (visibleColumns[i].id === draggedId) {
            id1 = i;
          } else if (visibleColumns[i].id === id) {
            id2 = i;
          }
        }
        const newOrder = visibleColumns.map((d) => d.id);
        newOrder[id2] = draggedId;
        newOrder[id1] = id;
        setColumnOrder(newOrder);
      }
    }
  };
  const handleDragStart = (e: any, id: any) => {
    e.stopPropagation();
    const { classList } = e.target;
    if (classList.contains('dropzone')) {
      e.target.parentNode.classList.add('dragStart');
      e.target.parentNode.classList.remove('dragEnd');
    } else if (classList.contains('sortable-dropzone')) {
      e.target.classList.add('drag-sort-active');
    }
    setDraggedId(id);
  };
  const handleDragEnd = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { classList } = e.target;
    if (classList.contains('dropzone')) {
      e.target.parentNode.classList.remove('dragStart');
      e.target.parentNode.classList.add('dragEnd');
    } else {
      e.target.classList.remove('drag-sort-active');
    }
  };
  const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return <input type='checkbox' ref={resolvedRef} {...rest} />;
  });

  return (
    <>
      <Container bottom='md' style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {filter && (
          <>
            <Container right='sm'>
              <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
            </Container>
            <Button
              leftSpacing='sm'
              iconSpacing='none'
              rightSpacing='sm'
              icon={<Filter color='#595959' fontSize='1rem' />}
              type='button'
              onClick={() => {}}
              variant='outline'
              height='2.063rem'
              size='small'
              colors={{
                text: '#595959',
                default: '#D9D9D9',
                hover: '#D9D9D9',
                click: '#D9D9D9',
              }}
            />
          </>
        )}
      </Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(
            (headerGroup: any) =>
              headerGroup.headers[0].Header !== '' && (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any, index: number) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        draggable={column.id !== 'selection'}
                        onDragStart={(ev) => {
                          handleDragStart(ev, column.id);
                        }}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={(ev) => {
                          handleDrop(ev, column.id);
                        }}
                        onDragEnd={handleDragEnd}
                        className={column.id !== 'selection' ? 'dropzone' : ''}
                      >
                        {index !== 0 && <Apps />}
                        {index !== 0 && <Spacer direction='horizontal' size='tiny' />}
                        <span style={{ marginRight: 'auto' }}>{column.render('Header')}</span>
                        {column.isSorted ? column.isSortedDesc ? <ArrowDown /> : <ArrowUp /> : '  '}
                      </div>
                      {column.id !== 'selection' && (
                        <div
                          {...column.getResizerProps()}
                          className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                        />
                      )}
                    </th>
                  ))}
                </tr>
              )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, index: number) => {
            prepareRow(row);
            const props = row.getRowProps();
            return (
              <React.Fragment key={`Row${index}`}>
                <tr {...props} className={`${row.isSelected ? 'selected' : ''}`}>
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      onClick={
                        cell.column.id === 'selection'
                          ? () => null
                          : () => (row.original.expandible ? row.toggleRowExpanded() : null)
                      }
                      onKeyUp={() => {}}
                      className={`${typeof cell.value === 'number' ? 'size' : ''} ${
                        cell.column.id !== 'selection'
                          ? row.original.expandible
                            ? 'pointer'
                            : ''
                          : ''
                      } ${cell.column.id === 'selection' ? 'flex' : ''}`}
                    >
                      {typeof cell.value === 'string' || typeof cell.value === 'number' ? (
                        <span className='td-data'>
                          {cell.column.prefix && (
                            <Paragraph weight='bold'>{cell.column.prefix}</Paragraph>
                          )}
                          <Paragraph>{cell.render('Cell')}</Paragraph>
                          {cell.column.sufix && (
                            <Paragraph weight='bold'>{cell.column.sufix}</Paragraph>
                          )}
                        </span>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  ))}
                </tr>
                {row.isExpanded ? (
                  <tr className='expandible'>
                    <td>{renderRowSubComponent({ row })}</td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>

        {pagination && (
          <tfoot>
            <tr style={{ display: 'flex', justifyContent: 'center' }}>
              <td colSpan={10} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='pagination'>
                  <Button
                    leftSpacing='sm'
                    iconSpacing='none'
                    rightSpacing='sm'
                    icon={<ChevronsLeft />}
                    onClick={() => gotoPage(0)}
                    type='button'
                    disabled={!canPreviousPage}
                    variant='outline'
                    height='2.063rem'
                  />
                  <Button
                    leftSpacing='sm'
                    iconSpacing='none'
                    rightSpacing='sm'
                    icon={<ChevronLeft />}
                    type='button'
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    variant='outline'
                    height='2.063rem'
                  />
                  <Button
                    leftSpacing='sm'
                    iconSpacing='none'
                    rightSpacing='sm'
                    type='button'
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    variant='outline'
                    height='2.063rem'
                    icon={<ChevronRight />}
                  />
                  <Button
                    leftSpacing='sm'
                    iconSpacing='none'
                    rightSpacing='sm'
                    icon={<ChevronsRight />}
                    type='button'
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    variant='outline'
                    height='2.063rem'
                  />
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
};

export default Table;
