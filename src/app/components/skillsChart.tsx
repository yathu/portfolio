'use client'
import * as Chart from "chart.js";
import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillsRadarChartProps {
  skills?: Skill[];
  title?: string;
}

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({
  skills,
  title = "Skills",
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart.Chart | null>(null);

  // Default skills data
  const defaultSkills: Skill[] = [
  { name: "React Native", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Flutter", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Testing", level: 65 },
  { name: "Expo", level: 70 },
  { name: "Bootstrap", level: 99   },
  { name: "TanStack Query", level: 90 },
];

  const skillsToUse = skills || defaultSkills;

  const chartData = {
    labels: skillsToUse.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level (%)",
        data: skillsToUse.map((skill) => skill.level),
        backgroundColor: "#ff2c5520",
        borderColor: "#ff2c5590", //f9234cd6
        borderWidth: 1,
        pointBackgroundColor: "#f9234cd6",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#ff002e90",
        pointRadius: 3.5,
        pointHoverRadius: 5,
      },
    ],
  };

  const chartOptions: Chart.ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: title,
        font: {
          size: 32,
          weight: 600,
          family: "Doto, Doto Fallback",
        },
        color: "#1f2937",
        padding: 0,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: Chart.TooltipItem<"radar">) => {
            return `${context.dataset.label}: ${context.parsed.r}%`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12,
          },
          color: "#6b7280",
        },
        grid: {
          color: "rgba(156, 163, 175, 0.3)",
        },
        angleLines: {
          color: "rgba(156, 163, 175, 0.3)",
        },
        pointLabels: {
          font: {
            size: 13,
            weight: 500,
          },
          color: "#374151",
        },
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Register Chart.js components including RadarController
    Chart.Chart.register(
      Chart.RadarController,
      Chart.RadialLinearScale,
      Chart.PointElement,
      Chart.LineElement,
      Chart.Filler,
      Chart.Tooltip,
      Chart.Legend,
      Chart.Title
    );

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart
    chartInstanceRef.current = new Chart.Chart(ctx, {
      type: "radar",
      data: chartData,
      options: chartOptions,
    });

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [chartData, chartOptions]);

  return (
      <canvas ref={chartRef}></canvas>
  );
};

export default SkillsRadarChart;
