"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import store from "@/lib/store";
import { ColumnDef } from "@tanstack/react-table";

export type Client = {
  name: string;
  email: string;
  phoneNumber: string;
  status: {
    label: "Report On Progress" | "Report Finished";
    state: "success" | "warning";
    // key: ReportStateTypes;
  };
  action: "See Full Profile";
};

export const clientsData: Client[] = [
  {
    name: "Saad Mahmud",
    phoneNumber: "(406) 555-0120",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "saadmahmud@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "John Dukes",
    phoneNumber: "(480) 555-0103",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "obtusecaptain@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Jacob Clark",
    phoneNumber: "(603) 555-0123",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "jacob.clark@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Autumn Phillips",
    phoneNumber: "(704) 555-0127",
    status: {
      label: "Report On Progress",
      state: "warning",
    },
    email: "fecundsnakes@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Saad Mahmud",
    phoneNumber: "(406) 555-0120",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "saadmahmud@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "John Dukes",
    phoneNumber: "(480) 555-0103",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "obtusecaptain@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Jacob Clark",
    phoneNumber: "(603) 555-0123",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "jacob.clark@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Autumn Phillips",
    phoneNumber: "(704) 555-0127",
    status: {
      label: "Report On Progress",
      state: "warning",
    },
    email: "fecundsnakes@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Saad Mahmud",
    phoneNumber: "(406) 555-0120",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "saadmahmud@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "John Dukes",
    phoneNumber: "(480) 555-0103",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "obtusecaptain@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Jacob Clark",
    phoneNumber: "(603) 555-0123",
    status: {
      label: "Report Finished",
      state: "success",
    },
    email: "jacob.clark@gmail.com",
    action: "See Full Profile",
  },
  {
    name: "Autumn Phillips",
    phoneNumber: "(704) 555-0127",
    status: {
      label: "Report On Progress",
      state: "warning",
    },
    email: "fecundsnakes@gmail.com",
    action: "See Full Profile",
  },
];

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
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
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 py-0 h-auto gap-1 hover:bg-[transparent]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
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
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { setSidebarTab } = store();
      return (
        <Button
          className="but but-table"
          // onClick={() => setSidebarTab("")}
        >
          <span>{row.original.action}</span>
          <div className="vertical-sep"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g opacity="0.7">
              <mask
                id="mask0_332_51076"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_332_51076)">
                <path
                  d="M4.01571 11.5285C4.58238 11.108 5.19968 10.776 5.86763 10.5324C6.53557 10.2888 7.24646 10.167 8.00031 10.167C8.75415 10.167 9.46505 10.2888 10.133 10.5324C10.8009 10.776 11.4182 11.108 11.9849 11.5285C12.3994 11.073 12.7279 10.5456 12.9702 9.94648C13.2125 9.34732 13.3336 8.6986 13.3336 8.00031C13.3336 6.52253 12.8142 5.2642 11.7753 4.22531C10.7364 3.18642 9.47809 2.66698 8.00031 2.66698C6.52253 2.66698 5.2642 3.18642 4.22531 4.22531C3.18642 5.2642 2.66698 6.52253 2.66698 8.00031C2.66698 8.6986 2.78813 9.34732 3.03044 9.94648C3.27275 10.5456 3.60118 11.073 4.01571 11.5285ZM8.00051 8.50029C7.39183 8.50029 6.87852 8.29139 6.46058 7.87358C6.04263 7.45575 5.83366 6.94251 5.83366 6.33384C5.83366 5.72517 6.04256 5.21185 6.46038 4.79391C6.8782 4.37597 7.39144 4.16699 8.00011 4.16699C8.60879 4.16699 9.1221 4.3759 9.54004 4.79371C9.95799 5.21153 10.167 5.72478 10.167 6.33344C10.167 6.94212 9.95805 7.45543 9.54024 7.87338C9.12242 8.29132 8.60918 8.50029 8.00051 8.50029ZM8.00031 14.3336C7.12082 14.3336 6.29583 14.1682 5.52533 13.8375C4.75481 13.5067 4.08451 13.0563 3.51443 12.4862C2.94435 11.9161 2.49393 11.2458 2.16316 10.4753C1.83238 9.70479 1.66699 8.8798 1.66699 8.00031C1.66699 7.12082 1.83238 6.29583 2.16316 5.52533C2.49393 4.75481 2.94435 4.08451 3.51443 3.51443C4.08451 2.94435 4.75481 2.49393 5.52533 2.16316C6.29583 1.83238 7.12082 1.66699 8.00031 1.66699C8.8798 1.66699 9.70479 1.83238 10.4753 2.16316C11.2458 2.49393 11.9161 2.94435 12.4862 3.51443C13.0563 4.08451 13.5067 4.75481 13.8375 5.52533C14.1682 6.29583 14.3336 7.12082 14.3336 8.00031C14.3336 8.8798 14.1682 9.70479 13.8375 10.4753C13.5067 11.2458 13.0563 11.9161 12.4862 12.4862C11.9161 13.0563 11.2458 13.5067 10.4753 13.8375C9.70479 14.1682 8.8798 14.3336 8.00031 14.3336ZM8.00031 13.3336C8.60202 13.3336 9.18215 13.2368 9.74069 13.0433C10.2992 12.8497 10.7952 12.5789 11.2285 12.2311C10.7952 11.896 10.3057 11.6349 9.75993 11.4477C9.2142 11.2606 8.62766 11.167 8.00031 11.167C7.37295 11.167 6.78534 11.2595 6.23748 11.4445C5.68961 11.6296 5.20115 11.8918 4.77209 12.2311C5.20543 12.5789 5.70137 12.8497 6.25993 13.0433C6.81847 13.2368 7.3986 13.3336 8.00031 13.3336ZM8.00031 7.50033C8.33193 7.50033 8.60929 7.38879 8.83238 7.16571C9.05545 6.94262 9.16699 6.66527 9.16699 6.33364C9.16699 6.00202 9.05545 5.72466 8.83238 5.50158C8.60929 5.2785 8.33193 5.16696 8.00031 5.16696C7.66869 5.16696 7.39133 5.2785 7.16824 5.50158C6.94516 5.72466 6.83363 6.00202 6.83363 6.33364C6.83363 6.66527 6.94516 6.94262 7.16824 7.16571C7.39133 7.38879 7.66869 7.50033 8.00031 7.50033Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </Button>
      );
    },
  },
];
