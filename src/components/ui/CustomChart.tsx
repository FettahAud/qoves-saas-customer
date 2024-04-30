"use client";

import { useEffect, useRef } from "react";

export default function CustomChart({ inputs }: { inputs: any }) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  const getPercentage = (value: number) => {
    return (value / 360) * 100;
  };

  useEffect(() => {
    if (!canvas.current) return;
    const cvs = canvas.current;
    const ctx = cvs!.getContext("2d");
    if (!ctx) return;

    const rect = cvs!.getBoundingClientRect();
    cvs.width = rect.width * devicePixelRatio;
    cvs.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    cvs.style.width = `${rect.width}px`;
    cvs.style.height = `${rect.height}px`;

    ctx.clearRect(0, 0, cvs.width, cvs.height);

    const centerX = cvs.width / 2 - 22;
    const centerY = cvs.height / 2 - 22;

    const strokeLineWidth = 2;
    const lineLength = 20;

    const xRadius = centerX - strokeLineWidth;
    const yRadius = centerY - strokeLineWidth;

    for (let i = 0; i < 360; i += 5) {
      const angle = ((i - 90) * Math.PI) / 180;
      const x = centerX + xRadius * Math.cos(angle);
      const y = centerY + yRadius * Math.sin(angle);
      const x2 = centerX + (xRadius - lineLength) * Math.cos(angle);
      const y2 = centerY + (yRadius - lineLength) * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x, y);
      ctx.lineWidth = strokeLineWidth;
      ctx.strokeStyle = "black";
      const per = getPercentage(i);

      if (per < 50) ctx.strokeStyle = "#0C6826";
      if (per >= 50 && per < 80) ctx.strokeStyle = "#EB850A";
      if (per >= 80) ctx.strokeStyle = "#BB3030";

      ctx.stroke();
    }
    // write text at center of the canvas
    ctx.fillStyle = "#000";
    // ctx.font = "normal 4rem Neue";
    ctx.font = "normal 4rem Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.fillText("70", centerX, centerY);
  });
  return (
    <canvas
      ref={canvas}
      className="w-[170px] h-[170px] mx-auto absCenter"
    ></canvas>
  );
}
