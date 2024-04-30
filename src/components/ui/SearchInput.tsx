"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SearchInput({
  value: initialValue,
  onChange,
  className,
  searchClick,
}: {
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  searchClick?: () => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue || "");

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  return (
    <div className={cn("search-input", className)}>
      <input
        type="text"
        placeholder="Search..."
        className="outline-none border-none"
        value={value}
        // Not working!!
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <button onClick={searchClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32378"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32378)">
            <path
              d="M19.5422 20.577L13.2615 14.2962C12.7615 14.7091 12.1865 15.0321 11.5365 15.2655C10.8865 15.4988 10.214 15.6155 9.51916 15.6155C7.80999 15.6155 6.36348 15.0237 5.17961 13.8401C3.99574 12.6566 3.40381 11.2104 3.40381 9.50169C3.40381 7.79296 3.99559 6.34628 5.17916 5.16167C6.36273 3.97707 7.80888 3.38477 9.51761 3.38477C11.2263 3.38477 12.673 3.9767 13.8576 5.16057C15.0422 6.34443 15.6345 7.79095 15.6345 9.50012C15.6345 10.2142 15.5147 10.8963 15.2749 11.5463C15.0352 12.1963 14.7153 12.7617 14.3153 13.2424L20.5961 19.5232L19.5422 20.577ZM9.51916 14.1155C10.8076 14.1155 11.899 13.6684 12.7932 12.7742C13.6874 11.8799 14.1346 10.7886 14.1346 9.50012C14.1346 8.21165 13.6874 7.1203 12.7932 6.22607C11.899 5.33183 10.8076 4.88472 9.51916 4.88472C8.23069 4.88472 7.13934 5.33183 6.24511 6.22607C5.35089 7.1203 4.90378 8.21165 4.90378 9.50012C4.90378 10.7886 5.35089 11.8799 6.24511 12.7742C7.13934 13.6684 8.23069 14.1155 9.51916 14.1155Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
