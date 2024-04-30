"use client";

import { useRef } from "react";

export default function FileInput({
  files,
  setFiles,
}: {
  files: FileList | null;
  setFiles: (files: FileList) => void;
}) {
  const fileInput = useRef<HTMLInputElement>(null);

  const fileIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "0.875rem",
        height: "0.875rem",
      }}
      viewBox="0 0 14 14"
      fill="none"
    >
      <mask
        id="mask0_549_13776"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="14"
      >
        <rect width="14" height="14" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_549_13776)">
        <path
          d="M4.8125 10.3548H9.18747V9.47982H4.8125V10.3548ZM4.8125 8.02146H9.18747V7.14649H4.8125V8.02146ZM2.625 12.5423V1.45898H8.3125L11.375 4.52146V12.5423H2.625ZM7.875 4.95896V2.33397H3.49999V11.6673H10.5V4.95896H7.875Z"
          fill="#7D828E"
        />
      </g>
    </svg>
  );

  const handleFileChange = () => {
    if (!fileInput.current) return;
    if (fileInput.current!.files && fileInput.current.files.length > 0) {
      setFiles(fileInput.current.files);
    }
  };
  const formatFileSize = (size: number) => {
    const sizeInKB = size / 1024;
    if (sizeInKB < 1024) {
      return `${sizeInKB.toFixed(2)} KB`;
    } else {
      return `${(sizeInKB / 1024).toFixed(2)} MB`;
    }
  };

  return (
    <div className="file-input-wrapper flex flex-col gap-[.62rem]">
      <div className="file-input-wrapper">
        <label
          htmlFor="file-upload"
          className="border border-solid border-bo-gray py-2 px-[.62rem] flex gap-2 items-center w-max h-8"
        >
          <span className="text-xs">Attach a file</span>
          <div className="vertical-sep" style={{ height: "1rem" }}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g opacity="0.7">
              <mask
                id="mask0_340_11584"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_340_11584)">
                <path
                  d="M11.7821 10.9294C11.7821 12.0121 11.4054 12.9334 10.652 13.6933C9.89858 14.4533 8.9815 14.8333 7.90074 14.8333C6.81997 14.8333 5.90181 14.4533 5.14626 13.6933C4.39071 12.9334 4.01294 12.0121 4.01294 10.9294V4.93584C4.01294 4.16662 4.28003 3.51278 4.81421 2.97433C5.34839 2.43586 6.0001 2.16663 6.76932 2.16663C7.53856 2.16663 8.19026 2.43586 8.72444 2.97433C9.25863 3.51278 9.52572 4.16662 9.52572 4.93584V10.6089C9.52572 11.0602 9.36854 11.4454 9.05419 11.7647C8.73984 12.0839 8.35673 12.2435 7.90484 12.2435C7.45296 12.2435 7.06741 12.085 6.74819 11.768C6.42896 11.451 6.26934 11.0646 6.26934 10.6089V4.75638H7.26932V10.6089C7.26932 10.7875 7.32936 10.938 7.44944 11.0602C7.56953 11.1824 7.71889 11.2435 7.89752 11.2435C8.07617 11.2435 8.22553 11.1824 8.34561 11.0602C8.4657 10.938 8.52574 10.7875 8.52574 10.6089V4.92944C8.51891 4.43713 8.34793 4.02025 8.01281 3.67879C7.67768 3.33734 7.26319 3.16661 6.76932 3.16661C6.27753 3.16661 5.86185 3.3384 5.52227 3.68199C5.1827 4.02558 5.01291 4.44353 5.01291 4.93584V10.9294C5.00607 11.7354 5.28471 12.4209 5.84881 12.9858C6.41292 13.5508 7.09767 13.8333 7.90306 13.8333C8.69711 13.8333 9.37206 13.5508 9.92789 12.9858C10.4837 12.4209 10.7685 11.7354 10.7822 10.9294V4.75638H11.7821V10.9294Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </label>
        <input
          id="file-upload"
          type="file"
          ref={fileInput}
          className="hidden"
          multiple
          onChange={() => handleFileChange()}
        />
      </div>
      {files &&
        files.length > 0 &&
        Array.from(files).map((file) => (
          <div className="flex gap-1 items-center" key={file.name}>
            {fileIcon}
            <div className="flex gap-2 items-center">
              <span className="text-xs opacity-70 font-medium">
                {file.name}
              </span>
              <span className="text-xs opacity-70 text-tGray">
                {formatFileSize(file.size)}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
