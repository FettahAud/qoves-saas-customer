"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import img1 from "@/../public/images/1.png";
import img2 from "@/../public/images/2.png";
import img3 from "@/../public/images/3.png";
import img4 from "@/../public/images/4.png";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ReportProps = {
  // img: image type
  img: typeof img1;
  state:
    | "Report Delivered"
    | "In Review"
    | "Consultation Meeting Scheduled"
    | "Image Not Submitted";
  type: "finished" | "inProcess" | "needSubmission";
  title: string;
  des: string;
  date: string;
  email: string;
  file: any;
};

const reports: ReportProps[] = [
  {
    title: "Facial Morph Report",
    state: "Report Delivered",
    type: "finished",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img1,
    file: "",
  },
  {
    title: "Facial Morph Report",
    state: "In Review",
    type: "inProcess",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img2,
    file: "",
  },
  {
    title: "Facial Morph Report",
    state: "Image Not Submitted",
    type: "needSubmission",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img3,
    file: "",
  },
  {
    title: "Facial Morph Report",
    state: "Consultation Meeting Scheduled",
    type: "inProcess",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img4,
    file: "",
  },
  {
    title: "Facial Morph Report",
    state: "Report Delivered",
    type: "finished",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img4,
    file: "",
  },
  {
    title: "Facial Morph Report",
    state: "Report Delivered",
    type: "finished",
    date: "February 24, 2024",
    des: "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim.",
    email: "saadmahmud@gmail.com",
    img: img4,
    file: "",
  },
];

const Report = ({ state, title, des, date, email, img }: ReportProps) => {
  return (
    <div className="report basis-1/2">
      <div className="p-6 flex gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <div
            className={`
              state custom-list-item table-list-item 
              p-[.12rem] pl-[1.25rem] pr-[.38rem] w-max 
              text-xs
              ${
                state === "Report Delivered"
                  ? "bg-[#0c68260d] text-[#0C6826] before:bg-[#0C6826] "
                  : state === "Image Not Submitted"
                  ? "bg-[#680C0C0D] text-[#BB3030] before:bg-[#BB3030]"
                  : "bg-[#EB850A0D] text-[#EB850A] before:bg-[#EB850A]"
              }
          `}
          >
            {state}
          </div>
          <div className="title flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="text-sm text-tGray">{des}</p>
          </div>
          <ul className="detail flex flex-col gap-2">
            <li className="flex items-center gap-1.5 text-sm text-tGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_2182_33342"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.358398" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2182_33342)">
                  <path
                    d="M6.66697 11.9771C6.46292 11.9771 6.28904 11.9052 6.14535 11.7615C6.00165 11.6178 5.9298 11.444 5.9298 11.2399C5.9298 11.0359 6.00165 10.862 6.14535 10.7183C6.28904 10.5746 6.46292 10.5027 6.66697 10.5027C6.87103 10.5027 7.0449 10.5746 7.1886 10.7183C7.33229 10.862 7.40414 11.0359 7.40414 11.2399C7.40414 11.444 7.33229 11.6178 7.1886 11.7615C7.0449 11.9052 6.87103 11.9771 6.66697 11.9771ZM10.0003 11.9771C9.79625 11.9771 9.62237 11.9052 9.47868 11.7615C9.33499 11.6178 9.26314 11.444 9.26314 11.2399C9.26314 11.0359 9.33499 10.862 9.47868 10.7183C9.62237 10.5746 9.79625 10.5027 10.0003 10.5027C10.2044 10.5027 10.3782 10.5746 10.5219 10.7183C10.6656 10.862 10.7375 11.0359 10.7375 11.2399C10.7375 11.444 10.6656 11.6178 10.5219 11.7615C10.3782 11.9052 10.2044 11.9771 10.0003 11.9771ZM13.3336 11.9771C13.1296 11.9771 12.9557 11.9052 12.812 11.7615C12.6683 11.6178 12.5965 11.444 12.5965 11.2399C12.5965 11.0359 12.6683 10.862 12.812 10.7183C12.9557 10.5746 13.1296 10.5027 13.3336 10.5027C13.5377 10.5027 13.7116 10.5746 13.8553 10.7183C13.999 10.862 14.0708 11.0359 14.0708 11.2399C14.0708 11.444 13.999 11.6178 13.8553 11.7615C13.7116 11.9052 13.5377 11.9771 13.3336 11.9771ZM2.91699 18.2751V4.10852H5.57726V2.3457H6.85928V4.10852H13.1734V2.3457H14.4233V4.10852H17.0836V18.2751H2.91699ZM4.16697 17.0252H15.8336V8.94827H4.16697V17.0252ZM4.16697 7.69829H15.8336V5.3585H4.16697V7.69829Z"
                    fill="#7D828E"
                  />
                </g>
              </svg>
              <span>{date}</span>
            </li>
            <li className="flex items-center gap-1.5 text-sm text-tGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_2182_33347"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.358398" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2182_33347)">
                  <path
                    d="M6.875 15.1507H13.125V13.9007H6.875V15.1507ZM6.875 11.8173H13.125V10.5674H6.875V11.8173ZM3.75 18.2757V2.44238H11.875L16.25 6.81734V18.2757H3.75ZM11.25 7.44234V3.69236H4.99998V17.0257H15V7.44234H11.25Z"
                    fill="#7D828E"
                  />
                </g>
              </svg>
              <span>{title}</span>
            </li>
            <li className="flex items-center gap-1.5 text-sm text-tGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_2182_33352"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.358398" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2182_33352)">
                  <path
                    d="M9.99965 18.2757C8.90564 18.2757 7.87691 18.0679 6.91347 17.6523C5.95001 17.2368 5.11194 16.6728 4.39926 15.9605C3.68656 15.2481 3.12235 14.4104 2.70661 13.4474C2.29088 12.4843 2.08301 11.4554 2.08301 10.3604C2.08301 9.26548 2.29079 8.23629 2.70634 7.27284C3.1219 6.30938 3.68586 5.47131 4.39822 4.75863C5.11059 4.04594 5.94829 3.48172 6.91132 3.06599C7.87433 2.65025 8.90331 2.44238 9.99826 2.44238C11.0932 2.44238 12.1224 2.6502 13.0858 3.06582C14.0493 3.48145 14.8874 4.04551 15.6 4.75801C16.3127 5.47051 16.877 6.30836 17.2927 7.27155C17.7084 8.23473 17.9163 9.26389 17.9163 10.359V11.3751C17.9163 12.1357 17.6551 12.7815 17.1328 13.3125C16.6105 13.8435 15.9689 14.109 15.208 14.109C14.7165 14.109 14.2609 13.9888 13.841 13.7484C13.4211 13.508 13.0894 13.1774 12.8458 12.7564C12.4858 13.1859 12.0603 13.5187 11.5694 13.7548C11.0784 13.9909 10.5552 14.109 9.99965 14.109C8.95907 14.109 8.07392 13.7442 7.34422 13.0145C6.61452 12.2848 6.24967 11.3996 6.24967 10.359C6.24967 9.31845 6.61452 8.4333 7.34422 7.70359C8.07392 6.9739 8.95907 6.60905 9.99965 6.60905C11.0402 6.60905 11.9254 6.9739 12.6551 7.70359C13.3848 8.4333 13.7496 9.31845 13.7496 10.359V11.3751C13.7496 11.7842 13.8904 12.1339 14.1719 12.4239C14.4534 12.714 14.7988 12.859 15.208 12.859C15.6172 12.859 15.9625 12.714 16.2441 12.4239C16.5256 12.1339 16.6663 11.7842 16.6663 11.3751V10.359C16.6663 8.49792 16.0205 6.92153 14.7288 5.62986C13.4372 4.3382 11.8608 3.69236 9.99965 3.69236C8.13854 3.69236 6.56215 4.3382 5.27049 5.62986C3.97882 6.92153 3.33299 8.49792 3.33299 10.359C3.33299 12.2201 3.97882 13.7965 5.27049 15.0882C6.56215 16.3799 8.13854 17.0257 9.99965 17.0257H14.1663V18.2757H9.99965ZM9.99965 12.859C10.6941 12.859 11.2844 12.616 11.7705 12.1299C12.2566 11.6438 12.4997 11.0535 12.4997 10.359C12.4997 9.66459 12.2566 9.07431 11.7705 8.5882C11.2844 8.10209 10.6941 7.85903 9.99965 7.85903C9.30521 7.85903 8.71493 8.10209 8.22882 8.5882C7.74271 9.07431 7.49965 9.66459 7.49965 10.359C7.49965 11.0535 7.74271 11.6438 8.22882 12.1299C8.71493 12.616 9.30521 12.859 9.99965 12.859Z"
                    fill="#7D828E"
                  />
                </g>
              </svg>
              <span>{email}</span>
            </li>
          </ul>
          <button className="flex items-center gap-2 py-3 px-4 border border-gray w-full transition-colors hover:bg-muted">
            <span className="text-xs flex-1 text-left font-medium opacity-70">
              Download
            </span>
            <div className="vertical-sep"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_2209_25399"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.358398" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2209_25399)">
                <path
                  d="M7.99984 11.0254L4.6665 7.69206L5.59984 6.72539L7.33317 8.45872V3.02539H8.6665V8.45872L10.3998 6.72539L11.3332 7.69206L7.99984 11.0254ZM2.6665 13.6921V10.3587H3.99984V12.3587H11.9998V10.3587H13.3332V13.6921H2.6665Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </button>
        </div>
        <Image alt="pp" src={img} />
      </div>
    </div>
  );
};

function ReportsTabs({ changeType }: { changeType: Function }) {
  const tabsRef = useRef(null);

  return (
    <Tabs
      ref={tabsRef}
      defaultValue="all"
      onValueChange={(e) => changeType(e)}
      className="h-11"
    >
      <TabsList className="h-full rounded-none">
        <TabsTrigger value="all">All Reports</TabsTrigger>
        <TabsTrigger value="needSubmission">Need Submission</TabsTrigger>
        <TabsTrigger value="inProcess">In Process</TabsTrigger>
        <TabsTrigger value="finished">Finished</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default function Reports() {
  const [type, setType] = useState("all");
  const changeType = (e: string) => {
    setType(e);
  };
  return (
    <div className="flex flex-col gap-6">
      <ReportsTabs changeType={changeType} />
      <div className="reports-wrapper flex flex-wrap border-t border-l">
        {reports
          .filter((report) => {
            if (type === "all") return true;
            return report.type === type;
          })
          .map((report, index) => (
            <Report key={index} {...report} />
          ))}
      </div>
    </div>
  );
}
