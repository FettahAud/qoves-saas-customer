"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  FilterFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

import {
  reportsData,
  columns,
  ReportStateTypes,
} from "@/components/ui/reports-tables/columns";

import { rankItem } from "@tanstack/match-sorter-utils";

import ReportsTabs from "../ReportsTabs";
import SearchInput from "../SearchInput";
import TablePagination from "../TablePagination";

// This causing an error in OverviewDataTable.tsx
// declare module "@tanstack/react-table" {
//   interface FilterFns {
//     fuzzy: FilterFn<unknown>;
//   }
//   interface FilterMeta {
//     itemRank: RankingInfo;
//   }
// }

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function ReportFlowDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [type, setType] = useState<ReportStateTypes>("all");
  const [data, setData] = useState(reportsData);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    if (type === "all") {
      setData(reportsData);
    } else {
      setData(reportsData.filter((report) => report.status.key === type));
    }
  }, [type]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    enableHiding: true,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      globalFilter,
    },
  });

  return (
    <div>
      <div className="header mb-4 flex justify-between px-6">
        <ReportsTabs changeType={setType} />
        <SearchInput
          value={globalFilter ?? ""}
          onChange={(value: string | number) => setGlobalFilter(String(value))}
        />
      </div>
      <Table>
        <TableHeader>
          {table.getRowModel().rows?.length
            ? table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className={`h-[3.25rem] pl-0 font-medium text-tGray ${
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
              ))
            : null}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length
            ? table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`pl-0 py-0 h-[3.25rem] text-[black] font-normal ${
                        cell.column.id === "actions" ? "pr-0" : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
      {table.getRowModel().rows?.length ? (
        <TablePagination table={table} />
      ) : (
        <div className="flex items-center flex-col justify-center gap-8 w-full h-[24.75rem] mb-[7.88rem] mx-auto">
          <svg
            width="120"
            height="121"
            viewBox="0 0 120 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.4"
              cx="69.9998"
              cy="50.3602"
              r="47.8602"
              stroke="#7D828E"
            />
            <circle
              opacity="0.4"
              cx="49.8602"
              cy="70.7203"
              r="47.8602"
              stroke="#7D828E"
              stroke-dasharray="3 3"
            />
            <mask
              id="mask0_2014_4408"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="40"
              y="40"
              width="40"
              height="41"
            >
              <rect x="40" y="40.8601" width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2014_4408)">
              <path
                d="M73.3333 70.029L71.9231 68.6187V52.2362H65.2222V45.6037H52.5641V49.0353L51.1538 47.6251V44.1935H65.9273L73.3333 51.5995V70.029ZM52.5641 69.9627H67.0812L52.5641 55.4456V69.9627ZM74.5983 77.4798L68.4915 71.373H51.1538V54.0353L43.3867 46.2682L44.3974 45.2575L75.609 76.4691L74.5983 77.4798ZM45 77.5268V55.3537H46.4102V76.1165H65.4786V77.5268H45Z"
                fill="#7D828E"
              />
            </g>
          </svg>
          <h1 className="font-zagma text-sm text-tGray uppercase">
            No Data To Show
          </h1>
        </div>
      )}
    </div>
  );
}
