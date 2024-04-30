"use client";

import store from "@/lib/store";
import ImageSubmitModal from "./ImageSubmitModal";
import gsap from "gsap";
import AddCommentModal from "./AddCommentModal";
import NewReportModal from "./NewReportModal";
import { useEffect, useRef, useState } from "react";

export default function Modals() {
  const { modalState, selectedModal } = store();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalState) {
      gsap.to(".modal-card", {
        duration: 0.3,
        x: "0 0",
        ease: "none",
      });
    } else {
      gsap.to(".modal-card", {
        duration: 0.3,
        x: "100% 0",
        ease: "none",
        // onComplete: () => {
        //   setCurrentModal(null);
        // },
      });
    }
  }, [modalState]);

  return (
    <div id="modal" className={`modal ${modalState ? "active" : ""}`}>
      {selectedModal === "image-submit" && <ImageSubmitModal />}
      {selectedModal === "add-comment" && <AddCommentModal />}
      {selectedModal === "new-report" && <NewReportModal />}
    </div>
  );
}
