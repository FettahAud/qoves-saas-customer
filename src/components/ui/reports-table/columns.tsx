"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Report = {
  name: string;
  type: string;
  status: {
    label:
      | "Image Not Submitted"
      | "Report in Production"
      | "Report Delivered"
      | "Consultation Meeting Scheduled";
    state: "danger" | "success" | "warning";
  };
  date: string;
  email: string;
};

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M8 8.5L6 10.5L4 8.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
            <path
              d="M4 4.5L6 2.5L8 4.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
          </svg>
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Report Type
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M8 8.5L6 10.5L4 8.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
            <path
              d="M4 4.5L6 2.5L8 4.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
          </svg>
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M8 8.5L6 10.5L4 8.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
            <path
              d="M4 4.5L6 2.5L8 4.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
          </svg>
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          className={`list-item list-inside text-${row.original.status.state}`}
          style={{ listStyleType: "square" }}
        >
          {row.original.status.label}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M8 8.5L6 10.5L4 8.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
            <path
              d="M4 4.5L6 2.5L8 4.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
          </svg>
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <path
              d="M8 8.5L6 10.5L4 8.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
            <path
              d="M4 4.5L6 2.5L8 4.5"
              stroke="#7D828E"
              stroke-width="0.7"
              stroke-linecap="square"
            />
          </svg>
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
