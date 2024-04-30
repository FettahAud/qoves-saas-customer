"use client";

import ModalCustomerInformation from "@/components/ui/ModalCustomerInf";
import ModalHeader from "@/components/ui/ModalHeader";
import img from "../../../public/images/pp-2.png";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FileInput from "../ui/FileInput";
import { useState } from "react";

export default function AddCommentModal() {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div className="add-comment-modal card modal-card w-[31.5rem]">
      <ModalHeader title="Add Comment on Report" />
      <div className="separator"></div>
      <ModalCustomerInformation />
      <div className="modal-block">
        <h4>Customer Photos</h4>
        <div className="inner-wrapper flex gap-2 relative">
          <div className="flex gap-2 w-full">
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[6.25rem] flex-1">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-block">
        <h4>Comment</h4>
        <Textarea
          placeholder="Please include anything that can help customer to understand better with their condition...."
          className="resize-none"
        />
        <FileInput files={files} setFiles={setFiles} />
      </div>
      <button className="but but-primary but-modal" disabled>
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
  );
}
