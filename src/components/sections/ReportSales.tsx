"use client";

import CardTitle from "@/components/sections/./CardTitle";
import { DatePickerWithRange } from "@/components/ui/DatePicker";
import CardLineChart from "../ui/CardLineChart";
import store from "@/lib/store";

export default function ReportSales() {
  const { sidebarState } = store();
  const gradientSteps = ["#0C68264D", "#0000"];
  return (
    <div id="report-sales-wrapper" className="card flex">
      <div
        className={`
          report-sales p-6
          flex flex-col gap-6 flex-1 
          border-solid border-r
          ${sidebarState ? "w-[48rem]" : "w-[63.5rem]"}
        `}
      >
        <div className="flex gap-6 justify-between">
          <div className="flex gap-4 items-center">
            <div className="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2072_325"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    fill="#D9D9D9"
                    stroke="black"
                  />
                </mask>
                <g mask="url(#mask0_2072_325)">
                  <path
                    d="M19 6.99995H15V2.99998V2.49998H14.5H7.99998H7.49998V2.99998V17V17.5H7.99998H19H19.5V17V7.49995V6.99995H19ZM3.49998 7.99998V21V21.5H3.99998H14V21.9999L3 22V7.99998H3.49998ZM7 18V2H15.0429L20 6.95706V18H7Z"
                    fill="#233137"
                    stroke="#233137"
                  />
                </g>
              </svg>
            </div>
            <div className="card-header flex justify-between items-start flex-col gap-2.5">
              <CardTitle title="Report Sales" />
              <DatePickerWithRange className="max-w-[11.6rem]" />
            </div>
          </div>
          <div className="title flex gap-12">
            <div className="flex flex-col gap-3 flex-1">
              <span className="small-title" style={{ fontSize: ".75rem" }}>
                Total Revenue
              </span>
              <div className="flex gap-2 items-start">
                <h2 className="text-2xl leading-[100%] text-prim">$12,000</h2>
                <div className="badge badge-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_332_32277"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_332_32277)">
                      <path
                        d="M5.06396 9.16658L7.99983 6.23071L10.9357 9.16658H5.06396Z"
                        fill="#0C6826"
                      />
                    </g>
                  </svg>
                  <span>+41.7%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <span className="small-title" style={{ fontSize: ".75rem" }}>
                New report sales
              </span>
              <div className="flex gap-2 items-start">
                <h2 className="text-2xl leading-[100%] text-prim">05</h2>
                <div className="badge badge-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_332_32277"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_332_32277)">
                      <path
                        d="M5.06396 9.16658L7.99983 6.23071L10.9357 9.16658H5.06396Z"
                        fill="#0C6826"
                      />
                    </g>
                  </svg>
                  <span>+41.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardLineChart gradientSteps={gradientSteps} borderColor="#0C6826" />
      </div>
      <div className="pipeline p-6 w-[23.75rem] flex flex-col gap-6 border-solid border-r">
        <div className="flex items-center gap-4">
          <div className="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_2072_406"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2072_406)">
                <path
                  d="M3.5 19.3846V17.8846H20.5V19.3846H3.5ZM3.5 15.5V8.50002H20.5V15.5H3.5ZM4.99997 14H19V9.99999H4.99997V14ZM3.5 6.11539V4.61542H20.5V6.11539H3.5Z"
                  fill="#233137"
                />
              </g>
            </svg>
          </div>
          <CardTitle title="Reports In Pipeline" />
        </div>
        <div className="py-2 flex gap-2 items-start mt-auto justify-between">
          <h1 className="text-[#233137] text-[3.5rem] leading-[75%] font-thin">
            70
          </h1>
          <div className="badge badge-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_332_32371"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_332_32371)">
                <path
                  d="M5.06396 9.16658L7.99983 6.23071L10.9357 9.16658H5.06396Z"
                  fill="#0C6826"
                />
              </g>
            </svg>
            <span>+41.7%</span>
          </div>
        </div>
      </div>
      <div className="current-flow p-6 w-[23.75rem] flex flex-col gap-6">
        <div className="flex item-center gap-4">
          <div className="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_2072_426"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2072_426)">
                <path
                  d="M10.7501 22.5096L9.70589 21.4404L11.7809 19.3654H7.76739C7.60201 19.8718 7.30362 20.29 6.87222 20.6202C6.44082 20.9503 5.94499 21.1154 5.38474 21.1154C4.69031 21.1154 4.10003 20.8723 3.61392 20.3862C3.12782 19.9001 2.88477 19.3098 2.88477 18.6154C2.88477 18.0551 3.04983 17.5593 3.37997 17.1279C3.71008 16.6965 4.12834 16.3981 4.63474 16.2327V7.76733C4.12834 7.60195 3.71008 7.30355 3.37997 6.87215C3.04983 6.44075 2.88477 5.94493 2.88477 5.38468C2.88477 4.69025 3.12782 4.09997 3.61392 3.61385C4.10003 3.12775 4.69031 2.8847 5.38474 2.8847C5.94499 2.8847 6.44082 3.04977 6.87222 3.3799C7.30362 3.71002 7.60201 4.12828 7.76739 4.63468H11.7809L9.69627 2.55968L10.7501 1.49048L14.6443 5.38468L10.7501 9.27888L9.69627 8.20968L11.7809 6.13465H7.76739C7.64304 6.52952 7.43856 6.86926 7.15394 7.15388C6.86932 7.4385 6.52958 7.64298 6.13472 7.76733V16.2327C6.52958 16.3571 6.86932 16.5616 7.15394 16.8462C7.43856 17.1308 7.64304 17.4705 7.76739 17.8654H11.7713L9.70589 15.7904L10.7501 14.7212L14.6443 18.6154L10.7501 22.5096ZM18.6177 21.1154C17.9239 21.1154 17.3334 20.8723 16.8462 20.3862C16.3591 19.9001 16.1155 19.3098 16.1155 18.6154C16.1155 18.0477 16.2805 17.5475 16.6107 17.1147C16.9408 16.6818 17.3591 16.3878 17.8655 16.2327V7.76733C17.3591 7.61221 16.9408 7.31824 16.6107 6.8854C16.2805 6.45257 16.1155 5.95233 16.1155 5.38468C16.1155 4.69025 16.3583 4.09997 16.844 3.61385C17.3296 3.12775 17.9194 2.8847 18.6132 2.8847C19.307 2.8847 19.8975 3.12775 20.3846 3.61385C20.8718 4.09997 21.1154 4.69025 21.1154 5.38468C21.1154 5.95233 20.9503 6.45257 20.6202 6.8854C20.2901 7.31824 19.8718 7.61221 19.3654 7.76733V16.2327C19.8718 16.3981 20.2901 16.6965 20.6202 17.1279C20.9503 17.5593 21.1154 18.0551 21.1154 18.6154C21.1154 19.3098 20.8726 19.9001 20.3869 20.3862C19.9013 20.8723 19.3115 21.1154 18.6177 21.1154ZM5.38474 19.6154C5.66807 19.6154 5.90557 19.5195 6.09724 19.3279C6.28891 19.1362 6.38474 18.8987 6.38474 18.6154C6.38474 18.332 6.28891 18.0945 6.09724 17.9029C5.90557 17.7112 5.66807 17.6154 5.38474 17.6154C5.10141 17.6154 4.86391 17.7112 4.67224 17.9029C4.48057 18.0945 4.38474 18.332 4.38474 18.6154C4.38474 18.8987 4.48057 19.1362 4.67224 19.3279C4.86391 19.5195 5.10141 19.6154 5.38474 19.6154ZM18.6154 19.6154C18.8988 19.6154 19.1363 19.5195 19.3279 19.3279C19.5196 19.1362 19.6154 18.8987 19.6154 18.6154C19.6154 18.332 19.5196 18.0945 19.3279 17.9029C19.1363 17.7112 18.8988 17.6154 18.6154 17.6154C18.3321 17.6154 18.0946 17.7112 17.9029 17.9029C17.7113 18.0945 17.6154 18.332 17.6154 18.6154C17.6154 18.8987 17.7113 19.1362 17.9029 19.3279C18.0946 19.5195 18.3321 19.6154 18.6154 19.6154ZM5.38474 6.38468C5.66807 6.38468 5.90557 6.28885 6.09724 6.09718C6.28891 5.90551 6.38474 5.66801 6.38474 5.38468C6.38474 5.10135 6.28891 4.86385 6.09724 4.67218C5.90557 4.48051 5.66807 4.38468 5.38474 4.38468C5.10141 4.38468 4.86391 4.48051 4.67224 4.67218C4.48057 4.86385 4.38474 5.10135 4.38474 5.38468C4.38474 5.66801 4.48057 5.90551 4.67224 6.09718C4.86391 6.28885 5.10141 6.38468 5.38474 6.38468ZM18.6154 6.38468C18.8988 6.38468 19.1363 6.28885 19.3279 6.09718C19.5196 5.90551 19.6154 5.66801 19.6154 5.38468C19.6154 5.10135 19.5196 4.86385 19.3279 4.67218C19.1363 4.48051 18.8988 4.38468 18.6154 4.38468C18.3321 4.38468 18.0946 4.48051 17.9029 4.67218C17.7113 4.86385 17.6154 5.10135 17.6154 5.38468C17.6154 5.66801 17.7113 5.90551 17.9029 6.09718C18.0946 6.28885 18.3321 6.38468 18.6154 6.38468Z"
                  fill="#233137"
                />
              </g>
            </svg>
          </div>
          <CardTitle title="Current Flow" />
        </div>
        <ul className="list flex flex-col gap-[.62rem] flex-1 justify-end ">
          <li className="">
            <span className="">Need Image Submission</span>
            <span className="badge-number">20</span>
          </li>
          <li className="">
            <span className="">Report In Production</span>
            <span className="badge-number">30</span>
          </li>
          <li className="">
            <span className="">Report Delivered</span>
            <span className="badge-number">40</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
