"use client";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";

Chart.register(CategoryScale);

export default function CardLineChart({
  borderColor,
  gradientSteps,
}: {
  borderColor: string;
  gradientSteps: string[];
}) {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (!chartRef.current) return;
    // @ts-ignore
    const ctx = chartRef.current.canvas.getContext("2d");

    let grade = ctx.createLinearGradient(0, 0, 0, 160);
    // rgba(184, 198, 203, 0.00) 63.44%);

    gradientSteps.forEach((step, index) => {
      grade.addColorStop(index, step);
    });
    setGradient(grade);
  }, [setGradient, gradientSteps]);
  return (
    <div className="chart-wrapper h-[11.68rem] w-full">
      <Line
        id="line-chart"
        ref={chartRef}
        className="chart"
        style={{ width: "100%", height: "100%" }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            x: {
              grid: {
                color: "#EEE",
                drawTicks: false,
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                  lineHeight: "1.125rem",
                },
                color: "#7D828E",
              },
              border: {
                dash: [5, 5],
              },
            },
            y: {
              display: true,
              position: "left",
              grid: {
                drawTicks: false,
                display: true,
                // circular: true,
                //   drawOnChartArea: false, // only want the grid lines for one axis to show up
              },

              ticks: {
                count: 5,
                callback: function (value, index, values) {
                  switch (index) {
                    case 0:
                      return "$0";
                    case 1:
                      return "$800";
                    case 2:
                      return "$1000";
                    case 3:
                      return "$1200";
                    case 4:
                      return "$1400";
                  }
                },
                font: {
                  size: 12,
                  lineHeight: "1.125rem",
                },
                color: "#7D828E",
              },
              border: {
                dash: [5, 5],
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Spe",
            "Oct",
            "Nov",
            "Dec",
            "",
          ],
          datasets: [
            {
              data: [
                230, 400, 800, 400, 600, 1400, 600, 1000, 700, 840, 720, 700,
                900, 600, 800, 1000, 1200, 1400, 1200, 1400, 1200, 1400, 1200,
              ],
              fill: "start",
              backgroundColor: gradient!,
              borderColor: borderColor,
              borderWidth: 1,
              tension: 0,
            },
          ],
        }}
      />
    </div>
  );
}
