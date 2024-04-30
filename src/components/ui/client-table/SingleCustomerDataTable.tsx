import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { reportsData, columns } from "@/components/ui/reports-tables/columns";
import { useEffect, useState } from "react";
import TablePagination from "../TablePagination";

export default function SingleCustomerDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data, setData] = useState(reportsData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // enableHiding: true,
    state: {
      sorting,
    },
  });

  useEffect(() => {
    table.getColumn("name")?.toggleVisibility(false);
    table.getColumn("email")?.toggleVisibility(false);
    table.setPageSize(5);
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={`h-[3.25rem] pl-0 font-medium text-black ${
                      header.id === "actions" ? "w-0" : ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={`pl-0 py-0 h-[3.25rem] text-tGray font-normal ${
                      cell.column.id === "actions" ? "pr-0" : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination table={table} rowsPerPageArr={[5, 10, 20, 30, 40, 50]} />
    </>
  );
}
