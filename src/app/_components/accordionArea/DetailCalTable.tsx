import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DetailCalInfo } from './dto/AccordionAreaInfo';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface DetailCalTableProps {
  detailCalInfos: DetailCalInfo[];
}

const DetailCalTable: React.FC<DetailCalTableProps> = ({ detailCalInfos }) => {
  // テーブルヘッダ定義
  const columns: ColumnDef<DetailCalInfo>[] = [
    {
      header: '品目',
      accessorKey: 'item',
    },
    {
      header: 'カロリー',
      accessorKey: 'cal',
      cell: (info) => `${info.getValue()} kcal`,
    },
  ];

  // テーブル要素定義
  const data: DetailCalInfo[] = detailCalInfos;

  // テーブル情報の作成
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        {/* ヘッダ */}
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        {/* 要素 */}
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailCalTable;
