"use client";

import { Report, columns } from "@/components/ui/reports-table/columns";
import { DataTable } from "@/components/ui/reports-table/DataTable";
import ReportsTabs from "../ui/ReportsTabs";
import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

const reportsData: Report[] = [
  {
    name: "Saad Mahmud",
    type: "Facial Morph Report",
    status: { label: "Consultation Meeting Scheduled", state: "warning" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Consultation Meeting Scheduled", state: "warning" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report in Production", state: "warning" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Image Not Submitted", state: "danger" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
  {
    name: "John Dukes",
    type: "Comprehensive Aesthetics Report",
    status: { label: "Report Delivered", state: "success" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
  {
    name: "Jacob Clark",
    type: "Tertiary Aestethic Report",
    status: { label: "Report Delivered", state: "success" },
    date: "January 02, 2024",
    email: "m@example.com",
  },
];

export default function Reports() {
  const [type, setType] = useState("All Reports");
  return (
    <div id="reports" className="">
      <div className="card px-6">
        {/* <div className="header mb-4 flex justify-between">
          <ReportsTabs changeType={setType} />
          <SearchInput />
        </div> */}
        <DataTable columns={columns} data={reportsData} listType={type} />
      </div>
    </div>
  );
}
