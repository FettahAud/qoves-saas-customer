"use client";

import Image from "next/image";
import pp from "@/../public/images/pp.png";

export default function Header({ title, des }: { title: string; des: string }) {
  return (
    <div id="header" className="w-full flex">
      <div
        className={`
        header
        w-full h-full
        flex items-start justify-between
        p-10 pb-6
      `}
      >
        <div className="flex flex-col gap-2">
          <div className="title-wrapper flex items-center gap-1 ">
            <h1 className="title text-[2rem] font-medium">{title}</h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_2182_33306"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2182_33306)">
                <path
                  d="M7.49984 11.167H8.4998V7.33364H7.49984V11.167ZM7.99982 6.19263C8.15239 6.19263 8.28027 6.14103 8.38347 6.03783C8.48667 5.93463 8.53827 5.80674 8.53827 5.65418C8.53827 5.50162 8.48667 5.37374 8.38347 5.27053C8.28027 5.16733 8.15239 5.11573 7.99982 5.11573C7.84725 5.11573 7.71937 5.16733 7.61617 5.27053C7.51297 5.37374 7.46137 5.50162 7.46137 5.65418C7.46137 5.80674 7.51297 5.93463 7.61617 6.03783C7.71937 6.14103 7.84725 6.19263 7.99982 6.19263ZM8.00094 14.3336C7.12498 14.3336 6.30163 14.1674 5.53087 13.835C4.7601 13.5025 4.08965 13.0513 3.5195 12.4815C2.94935 11.9116 2.49798 11.2414 2.16539 10.471C1.8328 9.70056 1.6665 8.87738 1.6665 8.00143C1.6665 7.12547 1.83273 6.30211 2.16517 5.53136C2.49762 4.76059 2.94878 4.09014 3.51867 3.51999C4.08857 2.94984 4.75873 2.49847 5.52915 2.16588C6.29956 1.83329 7.12275 1.66699 7.9987 1.66699C8.87466 1.66699 9.69802 1.83322 10.4688 2.16566C11.2395 2.4981 11.91 2.94927 12.4801 3.51916C13.0503 4.08906 13.5017 4.75922 13.8343 5.52964C14.1668 6.30005 14.3331 7.12324 14.3331 7.99919C14.3331 8.87515 14.1669 9.6985 13.8345 10.4693C13.502 11.24 13.0509 11.9105 12.481 12.4806C11.9111 13.0508 11.2409 13.5022 10.4705 13.8347C9.70008 14.1673 8.87689 14.3336 8.00094 14.3336ZM7.99982 13.3336C9.48871 13.3336 10.7498 12.817 11.7832 11.7836C12.8165 10.7503 13.3332 9.4892 13.3332 8.00031C13.3332 6.51142 12.8165 5.25031 11.7832 4.21698C10.7498 3.18364 9.48871 2.66698 7.99982 2.66698C6.51093 2.66698 5.24982 3.18364 4.21649 4.21698C3.18315 5.25031 2.66649 6.51142 2.66649 8.00031C2.66649 9.4892 3.18315 10.7503 4.21649 11.7836C5.24982 12.817 6.51093 13.3336 7.99982 13.3336Z"
                  fill="#7D828E"
                />
              </g>
            </svg>
          </div>
          <span className="text-[1.125rem] text-tGray">{des}</span>
        </div>
        <div className="actions flex gap-3 ">
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
