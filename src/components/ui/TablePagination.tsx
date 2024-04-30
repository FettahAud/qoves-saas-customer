import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TablePagination({
  table,
  rowsPerPageArr = [10, 20, 30, 40, 50],
}: {
  table: any;
  rowsPerPageArr?: number[];
}) {
  const currentPageIndex = table.getState().pagination.pageIndex;
  const startPageIndex = Math.max(currentPageIndex - 1, 0);
  const endPageIndex = Math.min(startPageIndex + 3, table.getPageCount());
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-3">
        <p className="text-xs font-medium text-tGray text-nowrap">
          Rows per page
        </p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-max gap-2 p-2 pl-3 text-tGray border-[#E8E8E8]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top" className="w-[6rem] min-w-0">
            {rowsPerPageArr.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Pagination className="justify-end">
        <PaginationContent className="flex items-center border-none">
          <Button
            className="border-none flex gap-1 items-center pl-2 pr-3 text-xs"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <div className="numbers flex items-center">
            {table.getPageCount() > 0 &&
              Array.from(Array(table.getPageCount()).keys())
                .slice(startPageIndex, endPageIndex)
                .map((index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(index)}
                      isActive={currentPageIndex === index}
                      className={`text-xs font-medium cursor-pointer ${
                        currentPageIndex === index
                          ? "text-[black] opacity-70 border-[#E8E8E8]"
                          : "text-tGray"
                      }`}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>
          <Button
            className="border-none flex gap-1 items-center pl-3 pr-2 text-xs"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
