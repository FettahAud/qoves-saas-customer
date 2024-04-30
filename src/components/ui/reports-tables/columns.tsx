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
// import { useToast } from "../use-toast";

export type ReportStateTypes =
  | "all"
  | "needImageSubmission"
  | "reportInProduction"
  | "delivered";

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
    key: ReportStateTypes;
  };
  date: string;
  email: string;
  action: "Add Comment" | "Meeting Link" | "Submit Images" | "Export";
};
export const reportsData: Report[] = [
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "meretriciouspenciller@gmail.com",
    action: "Add Comment",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "jacob.clark@gmail.com",
    action: "Add Comment",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Consultation Meeting Scheduled",
      state: "warning",
      key: "all",
    },
    date: "January 02, 2024",
    email: "fecundsnakes@gmail.com",
    action: "Meeting Link",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Image Not Submitted",
      state: "danger",
      key: "needImageSubmission",
    },
    date: "January 02, 2024",
    email: "jesusanchez@gmail.com",
    action: "Submit Images",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Consultation Meeting Scheduled",
      state: "warning",
      key: "all",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Meeting Link",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Image Not Submitted",
      state: "danger",
      key: "needImageSubmission",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Submit Images",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Consultation Meeting Scheduled",
      state: "warning",
      key: "all",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Meeting Link",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Image Not Submitted",
      state: "danger",
      key: "needImageSubmission",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Submit Images",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Consultation Meeting Scheduled",
      state: "warning",
      key: "all",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Meeting Link",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Image Not Submitted",
      state: "danger",
      key: "needImageSubmission",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Submit Images",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report Delivered", state: "success", key: "delivered" },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Export",
  },
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: {
      label: "Report in Production",
      state: "warning",
      key: "reportInProduction",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Add Comment",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: {
      label: "Consultation Meeting Scheduled",
      state: "warning",
      key: "all",
    },
    date: "January 02, 2024",
    email: "m@example.com",
    action: "Meeting Link",
  },
];

const colors = ["text-warning", "text-success", "text-danger"];

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
          className={`
            custom-list-item table-list-item 
            p-[.12rem] pl-[1.25rem] pr-[.38rem] w-max 
            text-${row.original.status.state}
            ${
              row.original.status.state === "warning"
                ? "bg-[#EB850A0D]"
                : row.original.status.state === "success"
                ? "bg-[#0C68260D]"
                : row.original.status.state === "danger"
                ? "bg-[#680C0C0D]"
                : ""
            }
          `}
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
    header: "Actions",
    cell: ({ row }) => {
      let icon;
      let dropdownMenu;
      const { toggleModal } = store();
      const buttonAction = (key: ReportStateTypes) => {
        switch (key) {
          case "reportInProduction":
            // console.log("add comment");
            toggleModal("add-comment");
            break;
        }
      };

      // Icon selector
      switch (row.original.action) {
        case "Add Comment":
          icon = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.7" className="group-hover:opacity-100 ">
                <mask
                  id="mask0_332_32457"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_332_32457)">
                  <path
                    d="M11.0846 8.49997H3V7.5H11.0846L7.28718 3.70255L7.99998 3L13 7.99998L7.99998 13L7.28718 12.2974L11.0846 8.49997Z"
                    fill="black"
                    className="group-hover:fill-[white]"
                  />
                </g>
              </g>
            </svg>
          );
          break;
        case "Meeting Link":
          icon = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.7">
                <mask
                  id="mask0_332_32818"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_332_32818)">
                  <path
                    d="M8.00006 14.3333C7.13169 14.3333 6.31225 14.1668 5.54175 13.8339C4.77124 13.501 4.09923 13.0478 3.52571 12.4743C2.95221 11.9008 2.49901 11.2288 2.16611 10.4583C1.8332 9.68776 1.66675 8.86832 1.66675 7.99994C1.66675 7.12473 1.8332 6.30358 2.16611 5.53649C2.49901 4.7694 2.95221 4.0991 3.52571 3.52559C4.09923 2.95209 4.77124 2.49889 5.54175 2.16599C6.31225 1.83308 7.13169 1.66663 8.00006 1.66663C8.87528 1.66663 9.69643 1.83308 10.4635 2.16599C11.2306 2.49889 11.9009 2.95209 12.4744 3.52559C13.0479 4.0991 13.5011 4.7694 13.834 5.53649C14.1669 6.30358 14.3334 7.12473 14.3334 7.99994C14.3334 8.86832 14.1669 9.68776 13.834 10.4583C13.5011 11.2288 13.0479 11.9008 12.4744 12.4743C11.9009 13.0478 11.2306 13.501 10.4635 13.8339C9.69643 14.1668 8.87528 14.3333 8.00006 14.3333ZM8.00006 13.3192C8.34024 12.8679 8.62657 12.4128 8.85905 11.9538C9.09153 11.4948 9.28084 10.9931 9.427 10.4486H6.57313C6.72783 11.0102 6.91929 11.5204 7.1475 11.9794C7.3757 12.4384 7.65989 12.885 8.00006 13.3192ZM6.70907 13.1358C6.45351 12.7692 6.22402 12.3523 6.0206 11.8852C5.81718 11.4181 5.65905 10.9392 5.54623 10.4486H3.28466C3.63681 11.141 4.10904 11.7226 4.70135 12.1935C5.29367 12.6645 5.96291 12.9786 6.70907 13.1358ZM9.29107 13.1358C10.0372 12.9786 10.7065 12.6645 11.2988 12.1935C11.8911 11.7226 12.3633 11.141 12.7155 10.4486H10.4539C10.3197 10.9435 10.1509 11.4245 9.94748 11.8916C9.74406 12.3587 9.52526 12.7735 9.29107 13.1358ZM2.86545 9.44868H5.34366C5.30179 9.20081 5.27145 8.95786 5.25265 8.71983C5.23385 8.48178 5.22445 8.24182 5.22445 7.99994C5.22445 7.75807 5.23385 7.51811 5.25265 7.28006C5.27145 7.04203 5.30179 6.79908 5.34366 6.55121H2.86545C2.80135 6.77771 2.7522 7.01318 2.71801 7.25763C2.68383 7.50207 2.66673 7.74951 2.66673 7.99994C2.66673 8.25038 2.68383 8.49782 2.71801 8.74226C2.7522 8.98671 2.80135 9.22218 2.86545 9.44868ZM6.34365 9.44868H9.65648C9.69836 9.20081 9.7287 8.95999 9.74752 8.72623C9.76632 8.49247 9.77572 8.25038 9.77572 7.99994C9.77572 7.74951 9.76632 7.50742 9.74752 7.27366C9.7287 7.03989 9.69836 6.79908 9.65648 6.55121H6.34365C6.30177 6.79908 6.27143 7.03989 6.25262 7.27366C6.23382 7.50742 6.22441 7.74951 6.22441 7.99994C6.22441 8.25038 6.23382 8.49247 6.25262 8.72623C6.27143 8.95999 6.30177 9.20081 6.34365 9.44868ZM10.6565 9.44868H13.1347C13.1988 9.22218 13.2479 8.98671 13.2821 8.74226C13.3163 8.49782 13.3334 8.25038 13.3334 7.99994C13.3334 7.74951 13.3163 7.50207 13.2821 7.25763C13.2479 7.01318 13.1988 6.77771 13.1347 6.55121H10.6565C10.6983 6.79908 10.7287 7.04203 10.7475 7.28006C10.7663 7.51811 10.7757 7.75807 10.7757 7.99994C10.7757 8.24182 10.7663 8.48178 10.7475 8.71983C10.7287 8.95786 10.6983 9.20081 10.6565 9.44868ZM10.4539 5.55124H12.7155C12.359 4.85038 11.89 4.26874 11.3084 3.80634C10.7268 3.34395 10.0543 3.02772 9.29107 2.85763C9.54662 3.24566 9.77397 3.67002 9.97312 4.13071C10.1723 4.5914 10.3325 5.06491 10.4539 5.55124ZM6.57313 5.55124H9.427C9.2723 4.99398 9.07764 4.48051 8.84302 4.01084C8.6084 3.54119 8.32742 3.09781 8.00006 2.68071C7.67271 3.09781 7.39173 3.54119 7.15712 4.01084C6.92249 4.48051 6.72783 4.99398 6.57313 5.55124ZM3.28466 5.55124H5.54623C5.6676 5.06491 5.82786 4.5914 6.02702 4.13071C6.22616 3.67002 6.45351 3.24566 6.70907 2.85763C5.94154 3.02772 5.26803 3.34503 4.68853 3.80956C4.10904 4.27409 3.64109 4.85465 3.28466 5.55124Z"
                    fill="black"
                    className="group-hover:fill-[white]"
                  />
                </g>
              </g>
            </svg>
          );
          break;
        default:
          icon = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.7">
                <mask
                  id="mask0_332_50621"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_332_50621)">
                  <path
                    d="M7.99993 10.036L4.23071 6.26676L4.93326 5.56421L7.99993 8.63088L11.0666 5.56421L11.7691 6.26676L7.99993 10.036Z"
                    fill="black"
                    className="group-hover:fill-[white]"
                  />
                </g>
              </g>
            </svg>
          );
          break;
      }

      // Dropdown menu selector
      switch (row.original.status.key) {
        case "needImageSubmission":
          dropdownMenu = (
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                // onClick={() => navigator.clipboard.writeText(payment.id)}
                className="flex items-center gap-2 text-xs group"
              >
                <span className="flex-1 border-r pr-2 border-solid border-bo-gray group-hover:border-[#00000020] transition-colors">
                  Send Email to Customer
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "1rem", height: "1rem" }}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.7">
                    <mask
                      id="mask0_336_9045"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_336_9045)">
                      <path
                        d="M7.99982 8.37175L2.66649 4.9615V11.7948C2.66649 11.8547 2.68572 11.9038 2.72419 11.9423C2.76265 11.9807 2.8118 12 2.87164 12H8.83317V13H1.6665V3H14.3331V8.83333H13.3332V4.9615L7.99982 8.37175ZM7.99982 7.33332L13.2306 3.99998H2.76905L7.99982 7.33332ZM12.5383 14.9294L11.8421 14.2333L13.0524 13H10.0383V12H13.0588L11.8255 10.7666L12.5383 10.0705L14.9677 12.5L12.5383 14.9294ZM2.66649 4.9615V12.5577V8.83333V8.91538V3.99998V4.9615Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => toggleModal("image-submit")}
                className="flex items-center gap-2 text-xs group"
              >
                <span className="flex-1 border-r pr-2 border-solid border-bo-gray group-hover:border-[#00000020] transition-colors">
                  Submit for Customer
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "1rem", height: "1rem" }}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.7">
                    <mask
                      id="mask0_336_9051"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_336_9051)">
                      <path
                        d="M2.33325 12.8333V3.16669L13.8075 7.99999L2.33325 12.8333ZM3.33324 11.3333L11.2332 7.99999L3.33324 4.66665V7.1282L6.94859 7.99999L3.33324 8.87177V11.3333Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </DropdownMenuItem>
            </DropdownMenuContent>
          );
          break;
        case "delivered":
          dropdownMenu = (
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                // need toast here and below
                // onClick={() => navigator.clipboard.writeText(payment.id)}
                className="flex items-center gap-2 text-xs group"
              >
                <span className="flex-1 border-r pr-2 border-solid border-bo-gray group-hover:border-[#00000020] transition-colors">
                  Send Email to Customer
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "1rem", height: "1rem" }}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.7">
                    <mask
                      id="mask0_336_9045"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_336_9045)">
                      <path
                        d="M7.99982 8.37175L2.66649 4.9615V11.7948C2.66649 11.8547 2.68572 11.9038 2.72419 11.9423C2.76265 11.9807 2.8118 12 2.87164 12H8.83317V13H1.6665V3H14.3331V8.83333H13.3332V4.9615L7.99982 8.37175ZM7.99982 7.33332L13.2306 3.99998H2.76905L7.99982 7.33332ZM12.5383 14.9294L11.8421 14.2333L13.0524 13H10.0383V12H13.0588L11.8255 10.7666L12.5383 10.0705L14.9677 12.5L12.5383 14.9294ZM2.66649 4.9615V12.5577V8.83333V8.91538V3.99998V4.9615Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </DropdownMenuItem>
              <DropdownMenuItem
                // onClick={() => toast("image-submit")}
                className="flex items-center gap-2 text-xs group"
              >
                <span className="flex-1 border-r pr-2 border-solid border-bo-gray group-hover:border-[#00000020] transition-colors">
                  Download Report (PDF)
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.7">
                    <mask
                      id="mask0_340_13619"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_340_13619)">
                      <path
                        d="M7.99998 10.5256L5.15387 7.6795L5.85642 6.95643L7.5 8.60002V3H8.49997V8.60002L10.1436 6.95643L10.8461 7.6795L7.99998 10.5256ZM3 13V9.98717H3.99998V12H12V9.98717H13V13H3Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </DropdownMenuItem>
            </DropdownMenuContent>
          );
          break;
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              onClick={() => buttonAction(row.original.status.key)}
              className="but but-table"
            >
              <span className="font-medium">{row.original.action}</span>
              <div className="vertical-sep"></div>
              {icon}
            </Button>
          </DropdownMenuTrigger>
          {dropdownMenu}
        </DropdownMenu>
      );
    },
  },
];
