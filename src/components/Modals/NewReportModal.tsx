"use client";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ModalHeader from "@/components/ui/ModalHeader";
import { Select, SelectItem } from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import FileInput from "../ui/FileInput";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import store from "@/lib/store";

const NewReportForm = ({
  goNext,
  setFormData,
}: {
  goNext: any;
  setFormData: any;
}) => {
  const [selected, setSelected] = useState("");
  const [state, setState] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [textarea, setTextarea] = useState<string | undefined>();

  const submitData = () => {
    setFormData({ reportType: selected, comment: textarea, files });
    goNext();
  };

  useEffect(() => {
    if (selected && files && files.length > 0 && textarea) {
      setState(true);
    } else {
      setState(false);
    }
  }, [selected, files, textarea]);
  return (
    <>
      <div className="flex gap-2 items-center py-[.62rem] px-[.88rem] border border-solid border-bo-gray bg-[#FAFAFA]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <mask
            id="mask0_549_10395"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="17"
          >
            <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_549_10395)">
            <path
              d="M7.49984 11.667H8.4998V7.83364H7.49984V11.667ZM7.99982 6.69263C8.15239 6.69263 8.28027 6.64103 8.38347 6.53783C8.48667 6.43463 8.53827 6.30674 8.53827 6.15418C8.53827 6.00162 8.48667 5.87374 8.38347 5.77053C8.28027 5.66733 8.15239 5.61573 7.99982 5.61573C7.84725 5.61573 7.71937 5.66733 7.61617 5.77053C7.51297 5.87374 7.46137 6.00162 7.46137 6.15418C7.46137 6.30674 7.51297 6.43463 7.61617 6.53783C7.71937 6.64103 7.84725 6.69263 7.99982 6.69263ZM8.00094 14.8336C7.12498 14.8336 6.30163 14.6674 5.53087 14.335C4.7601 14.0025 4.08965 13.5513 3.5195 12.9815C2.94935 12.4116 2.49798 11.7414 2.16539 10.971C1.8328 10.2006 1.6665 9.37738 1.6665 8.50143C1.6665 7.62547 1.83273 6.80211 2.16517 6.03136C2.49762 5.26059 2.94878 4.59014 3.51867 4.01999C4.08857 3.44984 4.75873 2.99847 5.52915 2.66588C6.29956 2.33329 7.12275 2.16699 7.9987 2.16699C8.87466 2.16699 9.69802 2.33322 10.4688 2.66566C11.2395 2.9981 11.91 3.44927 12.4801 4.01916C13.0503 4.58906 13.5017 5.25922 13.8343 6.02964C14.1668 6.80005 14.3331 7.62324 14.3331 8.49919C14.3331 9.37515 14.1669 10.1985 13.8345 10.9693C13.502 11.74 13.0509 12.4105 12.481 12.9806C11.9111 13.5508 11.2409 14.0022 10.4705 14.3347C9.70008 14.6673 8.87689 14.8336 8.00094 14.8336ZM7.99982 13.8336C9.48871 13.8336 10.7498 13.317 11.7832 12.2836C12.8165 11.2503 13.3332 9.9892 13.3332 8.50031C13.3332 7.01142 12.8165 5.75031 11.7832 4.71698C10.7498 3.68364 9.48871 3.16698 7.99982 3.16698C6.51093 3.16698 5.24982 3.68364 4.21649 4.71698C3.18315 5.75031 2.66649 7.01142 2.66649 8.50031C2.66649 9.9892 3.18315 11.2503 4.21649 12.2836C5.24982 13.317 6.51093 13.8336 7.99982 13.8336Z"
              fill="#7D828E"
            />
          </g>
        </svg>
        <span className="text-sm text-tGray">
          Please select what type of patient that you want to create a new
          report for.
        </span>
      </div>
      <div className="flex flex-col gap-[.62rem]">
        <h4 className="text-sm font-medium">Report Type</h4>
        <Select value={selected} onValueChange={(value) => setSelected(value)}>
          <SelectTrigger className="first:flex-1">
            <SelectValue placeholder="Report Type" />
            {/* <div className="vertical-sep"></div> */}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Facial Morph Report</SelectItem>
            <SelectItem value="2">Comprehensive Aesthetics Report</SelectItem>
            <SelectItem value="3">Tertiary Aesthethics Report</SelectItem>
            <SelectItem value="4">Hairline Design Report</SelectItem>
            <SelectItem value="5">Facial Analysis Report</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-[.62rem]">
        <h4 className="text-sm font-medium">Comment</h4>
        <Textarea
          className="resize-none rounded-none"
          value={textarea}
          onChange={(value) => setTextarea(value.target.value)}
        />
        <FileInput files={files} setFiles={setFiles} />
      </div>
      <button
        className="but but-primary but-modal"
        disabled={!state}
        onClick={() => submitData()}
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
        >
          <path
            d="M10.3543 2L14.3543 6M14.3543 6L10.3543 10M14.3543 6H3"
            stroke="white"
          />
        </svg>
      </button>
    </>
  );
};

const UserConsent = ({ goNext }: { goNext: any }) => {
  const [checkboxVal, setCheckboxVal] = useState(false);
  useEffect(() => {
    console.log(checkboxVal);
  }, [checkboxVal]);
  return (
    <>
      <div className="flex gap-2 items-center py-[.62rem] px-[.88rem] border border-solid border-bo-gray bg-[#FAFAFA]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <mask
            id="mask0_549_10395"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="17"
          >
            <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_549_10395)">
            <path
              d="M7.49984 11.667H8.4998V7.83364H7.49984V11.667ZM7.99982 6.69263C8.15239 6.69263 8.28027 6.64103 8.38347 6.53783C8.48667 6.43463 8.53827 6.30674 8.53827 6.15418C8.53827 6.00162 8.48667 5.87374 8.38347 5.77053C8.28027 5.66733 8.15239 5.61573 7.99982 5.61573C7.84725 5.61573 7.71937 5.66733 7.61617 5.77053C7.51297 5.87374 7.46137 6.00162 7.46137 6.15418C7.46137 6.30674 7.51297 6.43463 7.61617 6.53783C7.71937 6.64103 7.84725 6.69263 7.99982 6.69263ZM8.00094 14.8336C7.12498 14.8336 6.30163 14.6674 5.53087 14.335C4.7601 14.0025 4.08965 13.5513 3.5195 12.9815C2.94935 12.4116 2.49798 11.7414 2.16539 10.971C1.8328 10.2006 1.6665 9.37738 1.6665 8.50143C1.6665 7.62547 1.83273 6.80211 2.16517 6.03136C2.49762 5.26059 2.94878 4.59014 3.51867 4.01999C4.08857 3.44984 4.75873 2.99847 5.52915 2.66588C6.29956 2.33329 7.12275 2.16699 7.9987 2.16699C8.87466 2.16699 9.69802 2.33322 10.4688 2.66566C11.2395 2.9981 11.91 3.44927 12.4801 4.01916C13.0503 4.58906 13.5017 5.25922 13.8343 6.02964C14.1668 6.80005 14.3331 7.62324 14.3331 8.49919C14.3331 9.37515 14.1669 10.1985 13.8345 10.9693C13.502 11.74 13.0509 12.4105 12.481 12.9806C11.9111 13.5508 11.2409 14.0022 10.4705 14.3347C9.70008 14.6673 8.87689 14.8336 8.00094 14.8336ZM7.99982 13.8336C9.48871 13.8336 10.7498 13.317 11.7832 12.2836C12.8165 11.2503 13.3332 9.9892 13.3332 8.50031C13.3332 7.01142 12.8165 5.75031 11.7832 4.71698C10.7498 3.68364 9.48871 3.16698 7.99982 3.16698C6.51093 3.16698 5.24982 3.68364 4.21649 4.71698C3.18315 5.75031 2.66649 7.01142 2.66649 8.50031C2.66649 9.9892 3.18315 11.2503 4.21649 12.2836C5.24982 13.317 6.51093 13.8336 7.99982 13.8336Z"
              fill="#7D828E"
            />
          </g>
        </svg>
        <span className="text-sm text-tGray">
          Please read user consent carefully below.
        </span>
      </div>
      <div className="flex flex-col gap-[.62rem]">
        <h4 className="text-sm font-medium">User Consent</h4>
        <ScrollArea className="prose h-[17.125rem] py-[.625rem] px-[.875rem] bg-[white] border border-solid border-bo-gray">
          <p className="text-[.625rem] text-tGray">
            Last updated March 27, 2024
            <br />
            <br />
            <span className="text-xs font-medium">
              Agreement to our legal terms.
            </span>{" "}
            <br />
            <br />
            We operate the website, as well as any other related products and
            services that refer or link to these legal terms (the &apos;Legal
            Terms&apos;) (collectively, the &apos;Services&apos;).
            <br />
            <br />
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity
            (&apos;you&apos;), and QOVES Ltd., concerning your access to and use
            of the Services. You agree that by accessing the Services, you have
            read, understood, and agreed to be bound by all of these Legal
            Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
            <br />
            <br />
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms from time to
            time. We will alert you about any changes by updating the &apos;Last
            updated&apos; date of these Legal Terms, and you waive any right to
            receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
            <br />
            <br />
            Last updated March 27, 2024
            <br />
            <br />
            <span className="text-xs font-medium">
              Agreement to our legal terms.
            </span>{" "}
            <br />
            <br />
            We operate the website, as well as any other related products and
            services that refer or link to these legal terms (the &apos;Legal
            Terms&apos;) (collectively, the &apos;Services&apos;).
            <br />
            <br />
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity
            (&apos;you&apos;), and QOVES Ltd., concerning your access to and use
            of the Services. You agree that by accessing the Services, you have
            read, understood, and agreed to be bound by all of these Legal
            Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
            <br />
            <br />
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms from time to
            time. We will alert you about any changes by updating the &apos;Last
            updated&apos; date of these Legal Terms, and you waive any right to
            receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
          </p>
        </ScrollArea>
        <div className="flex gap-1 items-center">
          <Checkbox
            name="read"
            id="read"
            className="data-[state=checked]:bg-[#233137] data-[state=checked]:border-[#0000] data-[state=checked]:text-[#fff] "
            onClick={() => setCheckboxVal(!checkboxVal)}
          />
          <label className="text-sm" htmlFor="read">
            I&apos;ve read and agree to the terms of use.
          </label>
        </div>
        <button
          className="but but-primary but-modal"
          disabled={!checkboxVal}
          onClick={() => goNext()}
        >
          <span>Finish</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M10.3543 2L14.3543 6M14.3543 6L10.3543 10M14.3543 6H3"
              stroke="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

const Finish = () => {
  const { closeModal } = store();
  return (
    <div className="flex items-center justify-center h-full flex-1">
      <svg
        className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 693 561"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.3"
          cx="361.151"
          cy="150.172"
          r="348.788"
          stroke="#7D828E"
        />
        <circle
          opacity="0.3"
          cx="618.541"
          cy="618.541"
          r="618.041"
          transform="matrix(-1 0 0 1 710.933 -486.891)"
          stroke="#7D828E"
        />
      </svg>

      <div className="flex items-center flex-col gap-6 w-[18.75rem]">
        <div className="flex flex-col items-center gap-5">
          <svg
            width="121"
            height="121"
            viewBox="0 0 121 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.4"
              cx="70.5"
              cy="50.3602"
              r="47.8602"
              stroke="#7D828E"
            />
            <circle
              opacity="0.4"
              cx="50.3602"
              cy="70.7203"
              r="47.8602"
              stroke="#7D828E"
              stroke-dasharray="3 3"
            />
            <mask
              id="mask0_8_5"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="41"
              y="40"
              width="40"
              height="41"
            >
              <rect x="41" y="40.5" width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_8_5)">
              <path
                d="M56.9167 69.3455L48.6347 61.0634L49.8238 59.8743L56.9167 66.9673L72.1763 51.7077L73.3654 52.8968L56.9167 69.3455Z"
                fill="#7D828E"
              />
            </g>
          </svg>
          <h2 className="text-5xl text-prim">
            Thank <span className="font-denton">you</span>
          </h2>
          <span className="text-sm opacity-70">
            The new report has been created.
          </span>
        </div>
        <button
          className="but but-primary but-modal py-3 px-6"
          onClick={() => closeModal()}
        >
          <span>Go to client profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_552_14600"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_552_14600)">
              <path
                d="M11.0846 8.49997H3V7.5H11.0846L7.28718 3.70255L7.99998 3L13 7.99998L7.99998 13L7.28718 12.2974L11.0846 8.49997Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function NewReportModal() {
  const [currentStep, setCurrentStep] = useState(1);
  // Use `formData` to send the user data to the server
  const [formData, setFormData] = useState();
  const nextSection = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div
      className={`card modal-card w-[43rem] ${
        currentStep === 3 ? "min-h-[35rem]" : ""
      } relative`}
    >
      {currentStep < 3 && (
        <>
          <ModalHeader title="Create New Report" />
          <div className="separator"></div>
        </>
      )}
      {currentStep === 3 && (
        <ModalHeader className="absolute top-6 right-6" title="" />
      )}
      {currentStep === 1 && (
        <NewReportForm goNext={nextSection} setFormData={setFormData} />
      )}
      {currentStep === 2 && <UserConsent goNext={nextSection} />}
      {currentStep === 3 && <Finish />}
    </div>
  );
}
