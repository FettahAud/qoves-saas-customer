import CardTitle from "../sections/CardTitle";
import { twMerge } from "tailwind-merge";

export default function NumberCard({
  title,
  number,
  badgeNumber,
  badgeStatus,
  className,
}: {
  title: string;
  number: string;
  badgeNumber: string;
  badgeStatus: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "pipeline px-6 py-6 w-[23.75rem] flex flex-col gap-6",
        className
      )}
    >
      <CardTitle title={title} />
      <div className="py-4 flex gap-2 items-start mt-auto">
        <h1 className="text-[#233137] text-[5.625rem] leading-[75%] font-thin">
          {number}
        </h1>
        <div className={`badge ${badgeStatus}`}>
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
          <span>{badgeNumber}</span>
        </div>
      </div>
    </div>
  );
}
