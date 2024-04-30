"use client";

import Image from "next/image";
import pp from "@/../public/images/pp.png";
import store from "@/lib/store";
export default function Header({ title }: { title: string }) {
  const { toggleModal } = store();
  return (
    <div id="header" className="w-full h-[4.75rem] flex">
      <div
        className={`
        header
        w-full h-full
        flex items-center justify-between
        py-4 px-6
      `}
      >
        <h1 className="title text-2xl font-medium">{title}</h1>
        <div className="actions flex gap-3 ">
          <button
            onClick={() => toggleModal("new-report")}
            className="but but-start flex gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_332_32383"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_332_32383)">
                <path
                  d="M11.25 12.75H5.5V11.25H11.25V5.5H12.7499V11.25H18.5V12.75H12.7499V18.5H11.25V12.75Z"
                  fill="#233137"
                />
              </g>
            </svg>
            <span>Start New Report</span>
          </button>
          <button className="but but-not">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_31_2117"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_31_2117)">
                <path
                  d="M4.5 18.8846V17.3846H6.3077V9.92305C6.3077 8.57818 6.72276 7.38908 7.55287 6.35575C8.38301 5.32242 9.44872 4.66153 10.75 4.37308V2.5H13.25V4.37308C14.5512 4.66153 15.6169 5.32242 16.4471 6.35575C17.2772 7.38908 17.6922 8.57818 17.6922 9.92305V17.3846H19.5V18.8846H4.5ZM11.9983 21.6923C11.5007 21.6923 11.0753 21.5153 10.7221 21.1613C10.3689 20.8073 10.1923 20.3817 10.1923 19.8846H13.8077C13.8077 20.3833 13.6305 20.8093 13.2761 21.1625C12.9218 21.5157 12.4959 21.6923 11.9983 21.6923ZM7.80765 17.3846H16.1923V9.92305C16.1923 8.76535 15.783 7.77721 14.9644 6.95863C14.1458 6.14003 13.1577 5.73073 12 5.73073C10.8423 5.73073 9.85413 6.14003 9.03555 6.95863C8.21695 7.77721 7.80765 8.76535 7.80765 9.92305V17.3846Z"
                  fill="#233137"
                />
              </g>
              <circle cx="17" cy="8" r="3" fill="#FF3131" stroke="white" />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_332_32731"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_332_32731)">
                <path
                  d="M4.5 18.8846V17.3846H6.3077V9.92305C6.3077 8.57818 6.72276 7.38908 7.55287 6.35575C8.38301 5.32242 9.44872 4.66153 10.75 4.37308V2.5H13.25V4.37308C14.5512 4.66153 15.6169 5.32242 16.4471 6.35575C17.2772 7.38908 17.6922 8.57818 17.6922 9.92305V17.3846H19.5V18.8846H4.5ZM11.9983 21.6923C11.5007 21.6923 11.0753 21.5153 10.7221 21.1613C10.3689 20.8073 10.1923 20.3817 10.1923 19.8846H13.8077C13.8077 20.3833 13.6305 20.8093 13.2761 21.1625C12.9218 21.5157 12.4959 21.6923 11.9983 21.6923ZM7.80765 17.3846H16.1923V9.92305C16.1923 8.76535 15.783 7.77721 14.9644 6.95863C14.1458 6.14003 13.1577 5.73073 12 5.73073C10.8423 5.73073 9.85413 6.14003 9.03555 6.95863C8.21695 7.77721 7.80765 8.76535 7.80765 9.92305V17.3846Z"
                  fill="#233137"
                />
              </g>
            </svg>
          </button>
          <button className="but but-profile">
            <Image src={pp} alt="pp" />
          </button>
        </div>
      </div>
    </div>
  );
}
