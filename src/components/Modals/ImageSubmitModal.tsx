"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import frontCorrect from "@/../public/images/insight-front-correct.jpeg";
import frontWrong from "@/../public/images/insight-front-wrong.png";
import sideCorrect from "@/../public/images/insight-side-correct.png";
import sideWrong from "@/../public/images/insight-side-wrong.png";

import { useRef } from "react";
import store from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";
import ModalHeader from "../ui/ModalHeader";
import ModalCustomerInformation from "../ui/ModalCustomerInf";
import Image, { StaticImageData } from "next/image";
import { Textarea } from "../ui/textarea";
import FileInput from "../ui/FileInput";

function Steps({
  length,
  currentStep,
}: {
  length: number;
  currentStep: number;
}) {
  return (
    <div className="steps">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className={`step ${i === currentStep ? "current" : ""}`}>
          <div className="circle">{i + 1}</div>
          {i < length - 1 ? <div className="step-line"></div> : null}
        </div>
      ))}
    </div>
  );
}

function MyDropzone({ src, setSrc }: { src: string | null; setSrc: any }) {
  const onDrop = useCallback((e: any) => {
    setSrc(URL.createObjectURL(e[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="drop-zone border border-gray border-solid flex-1 h-full items-center justify-center relative"
    >
      {src && (
        <Image
          fill
          src={src}
          alt="uploaded"
          className="object-cover object-top m-auto !w-auto"
        />
      )}
      {src ? null : <input {...getInputProps()} accept="image/*" />}
      {src ? null : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex flex-col gap-[1.12rem] items-center h-full justify-center">
          <svg
            width="97"
            height="98"
            viewBox="0 0 97 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.4"
              cx="48.5"
              cy="50"
              r="45"
              stroke="#7D828E"
              stroke-dasharray="3 3"
            />
            <mask
              id="mask0_338_484"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="28"
              y="29"
              width="40"
              height="41"
            >
              <rect x="28" y="29.5" width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_338_484)">
              <path
                d="M38.8333 61.1666C36.7542 61.1666 34.9844 60.4436 33.524 58.9975C32.0635 57.5515 31.3333 55.7841 31.3333 53.6954C31.3333 51.7211 32.0127 50.0095 33.3717 48.5608C34.7307 47.1121 36.3268 46.3333 38.1602 46.2243C38.5341 43.7969 39.6506 41.7916 41.5095 40.2083C43.3685 38.6249 45.532 37.8333 47.9999 37.8333C50.7856 37.8333 53.1487 38.8035 55.0892 40.744C57.0297 42.6844 57.9999 45.0475 57.9999 47.8333V49.4999H59.0255C60.6217 49.5512 61.9609 50.1372 63.0432 51.2579C64.1255 52.3786 64.6666 53.7371 64.6666 55.3333C64.6666 56.9679 64.1137 58.3487 63.008 59.4759C61.9022 60.603 60.532 61.1666 58.8973 61.1666H49.8589C49.0918 61.1666 48.4513 60.9096 47.9374 60.3958C47.4235 59.8819 47.1666 59.2414 47.1666 58.4743V48.8012L43.6666 52.282L42.4871 51.1345L47.9999 45.6217L53.5128 51.1345L52.3333 52.282L48.8333 48.8012V58.4743C48.8333 58.7307 48.9401 58.9657 49.1538 59.1794C49.3674 59.3931 49.6025 59.4999 49.8589 59.4999H58.8333C59.9999 59.4999 60.986 59.0971 61.7916 58.2916C62.5971 57.486 62.9999 56.4999 62.9999 55.3333C62.9999 54.1666 62.5971 53.1805 61.7916 52.3749C60.986 51.5694 59.9999 51.1666 58.8333 51.1666H56.3333V47.8333C56.3333 45.5277 55.5208 43.5624 53.8958 41.9374C52.2708 40.3124 50.3055 39.4999 47.9999 39.4999C45.6944 39.4999 43.7291 40.3124 42.1041 41.9374C40.4791 43.5624 39.6666 45.5277 39.6666 47.8333H38.7692C37.2221 47.8333 35.8738 48.4027 34.7243 49.5416C33.5747 50.6805 32.9999 52.0555 32.9999 53.6666C32.9999 55.2777 33.5694 56.6527 34.7083 57.7916C35.8471 58.9305 37.2221 59.4999 38.8333 59.4999H42.9999V61.1666H38.8333Z"
                fill="#7D828E"
              />
            </g>
          </svg>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-sm font-normal text-tGray">
              .JPG .PNG .DNG .HEIC
            </span>
            <span className="text-sm font-normal text-tGray">
              Drag and drop or <u className="font-medium text-[#000]">browse</u>{" "}
              upload
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

type StepType = {
  src: string | null;
  title: string;
  insights: StaticImageData[];
};

const Step = ({
  step,
  setImgSrc,
  nextStep,
}: {
  step: StepType;
  setImgSrc: Function;
  nextStep: Function;
}) => {
  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      viewBox="0 0 15 14"
      fill="none"
    >
      <mask
        id="mask0_2075_4936"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="15"
        height="14"
      >
        <rect x="0.40332" width="14" height="14" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2075_4936)">
        <path
          d="M6.23613 9.35925L4.11035 7.23347L4.71947 6.62435L6.23613 8.14102L10.0861 4.29102L10.6953 4.90013L6.23613 9.35925Z"
          fill="#599D03"
        />
      </g>
    </svg>
  );
  const x = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
    >
      <mask
        id="mask0_2075_4967"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="15"
        height="14"
      >
        <rect x="0.90332" width="14" height="14" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2075_4967)">
        <path
          d="M5.70236 9.82139L5.08203 9.20106L7.28301 7.00008L5.08203 4.81369L5.70236 4.19336L7.90334 6.39433L10.0897 4.19336L10.7101 4.81369L8.50909 7.00008L10.7101 9.20106L10.0897 9.82139L7.90334 7.62041L5.70236 9.82139Z"
          fill="#EC1C1C"
        />
      </g>
    </svg>
  );
  return (
    <div className="flex gap-4 flex-col flex-1">
      <div className="image-wrapper flex flex-col gap-4 flex-1">
        <h3 className="text-sm font-medium">{step.title}</h3>
        <MyDropzone src={step.src} setSrc={setImgSrc} />
      </div>
      <div className="insights flex flex-col gap-2 pt-9">
        <h4 className="flex items-center gap-1.5 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <mask
              id="mask0_2075_4922"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="14"
              height="14"
            >
              <rect width="14" height="14" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2075_4922)">
              <path
                d="M6.99966 9.75951C7.13316 9.75951 7.24505 9.71436 7.33535 9.62406C7.42565 9.53375 7.4708 9.42185 7.4708 9.28836C7.4708 9.15487 7.42565 9.04297 7.33535 8.95267C7.24505 8.86237 7.13316 8.81722 6.99966 8.81722C6.86616 8.81722 6.75427 8.86237 6.66397 8.95267C6.57367 9.04297 6.52852 9.15487 6.52852 9.28836C6.52852 9.42185 6.57367 9.53375 6.66397 9.62406C6.75427 9.71436 6.86616 9.75951 6.99966 9.75951ZM6.56217 7.62811H7.43715V4.12811H6.56217V7.62811ZM7.00064 12.5416C6.23418 12.5416 5.51374 12.3961 4.83933 12.1052C4.16491 11.8143 3.57826 11.4196 3.07938 10.9209C2.5805 10.4222 2.18555 9.83586 1.89453 9.16174C1.60352 8.48763 1.45801 7.76734 1.45801 7.00088C1.45801 6.23442 1.60345 5.51398 1.89434 4.83957C2.18523 4.16515 2.58 3.5785 3.07865 3.07963C3.57732 2.58074 4.16371 2.18579 4.83783 1.89478C5.51194 1.60376 6.23222 1.45825 6.99868 1.45825C7.76514 1.45825 8.48558 1.6037 9.15999 1.89459C9.83441 2.18547 10.4211 2.58025 10.9199 3.0789C11.4188 3.57756 11.8138 4.16395 12.1048 4.83807C12.3958 5.51218 12.5413 6.23247 12.5413 6.99893C12.5413 7.76539 12.3959 8.48582 12.105 9.16024C11.8141 9.83466 11.4193 10.4213 10.9207 10.9202C10.422 11.4191 9.83561 11.814 9.16149 12.105C8.48738 12.396 7.7671 12.5416 7.00064 12.5416ZM6.99966 11.6666C8.30244 11.6666 9.40591 11.2145 10.3101 10.3103C11.2142 9.40616 11.6663 8.30268 11.6663 6.9999C11.6663 5.69713 11.2142 4.59365 10.3101 3.68949C9.40591 2.78532 8.30244 2.33324 6.99966 2.33324C5.69688 2.33324 4.59341 2.78532 3.68924 3.68949C2.78508 4.59365 2.33299 5.69713 2.33299 6.9999C2.33299 8.30268 2.78508 9.40616 3.68924 10.3103C4.59341 11.2145 5.69688 11.6666 6.99966 11.6666Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <span>Insight</span>
        </h4>
        <div className="border border-solid border-bo-gray bg-[#fff] p-2 flex gap-4">
          <div className="flex gap-1.5 items-center">
            <div className="size-20 overflow-hidden relative">
              <Image
                src={step.insights[0]}
                className="bg-cover h-[90px] w-[90px] max-w-[unset] absolute left-[50%] translate-x-[-50%]"
                alt=""
              />
            </div>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-1 text-[.625rem] text-[#599D03]">
                {check}
                <span>Looking straight at the camera</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#599D03]">
                {check}
                <span>Good lighting</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#599D03]">
                {check}
                <span>Neutral expression</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#599D03]">
                {check}
                <span>Crop at shoulder</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-1.5 items-center">
            <div className="size-20">
              <Image
                src={step.insights[1]}
                className="bg-cover w-full h-full"
                alt=""
              />
            </div>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-1 text-[.625rem] text-[#EC1C1C]">
                {x}
                <span>Blurry image</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#EC1C1C]">
                {x}
                <span>Face is not well lit</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#EC1C1C]">
                {x}
                <span>Smiling, sad, or any other expression</span>
              </li>
              <li className="flex items-center gap-1 text-[.625rem] text-[#EC1C1C]">
                {x}
                <span>Full body picture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="but but-primary but-modal"
        onClick={() => nextStep()}
        disabled={!step.src}
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_338_463"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_338_463)">
            <path
              d="M11.0846 8.49997H3V7.5H11.0846L7.28718 3.70255L7.99998 3L13 7.99998L7.99998 13L7.28718 12.2974L11.0846 8.49997Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default function ImageSubmitModal() {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_2029_1318"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2029_1318)">
        <path
          d="M3.30762 20.5001V3.5001H13.8076V5.00008H4.80757V19.0001H18.8076V10.0001H20.3075V20.5001H3.30762ZM17.1922 8.61543V6.61543H15.1922V5.11548H17.1922V3.11548H18.6922V5.11548H20.6922V6.61543H18.6922V8.61543H17.1922ZM6.55762 16.7501H17.1344L13.846 12.3655L11.0383 16.0193L9.03837 13.4617L6.55762 16.7501Z"
          fill="#233137"
        />
      </g>
    </svg>
  );
  const { closeModal } = store();
  // const { toast } = useToast();
  const [steps, setSteps] = useState<StepType[]>([
    { src: null, title: "Front Face", insights: [frontCorrect, frontWrong] },
    { src: null, title: "Side Profile", insights: [sideCorrect, sideWrong] },
    { src: null, title: "Front Face", insights: [frontCorrect, frontWrong] },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [comment, setComment] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [disabled, setDisabled] = useState(true);

  const currentStepRef = useRef(currentStep);

  const handleSetImage = (newImage: any) => {
    setSteps((prev) => {
      const newSteps = [...prev];
      newSteps[currentStepRef.current].src = newImage;
      return newSteps;
    });
  };
  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    if (comment || files) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [comment, files]);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    // Not working
    // toast({
    //   title: "Image Submitted Successfully",
    //   description: "Image submitted : Facial Morph Report for Saad Mahmud.",
    // });
  };
  const sendCommentHandler = () => {
    // Do something here
    closeModal();
  };
  const elementsPerRow = 4;
  const totalRows = Math.ceil(steps.length / elementsPerRow);
  const totalElements = totalRows * elementsPerRow;

  return (
    <div className="image-submit-modal card modal-card w-[43rem]">
      <ModalHeader title="Submit Image for Customer" icon={icon} />
      <ModalCustomerInformation />
      {currentStep < steps.length ? (
        <div className="mt-6 flex gap-4 flex-1">
          <Steps length={steps.length} currentStep={currentStep} />

          <Step
            step={steps[currentStep]}
            setImgSrc={handleSetImage}
            nextStep={nextStep}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-6 flex-1 mt-6">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-sm !text-[black]">Customer Photos</h4>
            <div className="grid p-3.5 grid-cols-4 grid-flow-row gap-2.5 bg-[#fafafa] border border-solid border-gray">
              {Array(totalElements)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="relative h-[8.75rem]">
                    {steps[i]?.src ? (
                      <Image
                        src={steps[i]?.src || ""}
                        alt={steps[i]?.title || ""}
                        fill
                        className="bg-cover"
                      />
                    ) : (
                      <div className="absolute w-full h-full border border-solid border-bo-gray"></div>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 flex-1">
            <h4>Comment</h4>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Please include anything that can help customer to understand better with their condition...."
              className="resize-none py-2.5 px-3.5"
            />
            <FileInput files={files} setFiles={setFiles} />
          </div>
          <button
            className="but but-primary but-modal"
            disabled={disabled}
            onClick={sendCommentHandler}
          >
            <span>Send Comment</span>
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
      )}
    </div>
  );
}
