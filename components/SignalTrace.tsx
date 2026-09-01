'use client';

import { useMemo } from 'react';

type Marker = {
  year: number;
  label: string;
};

const MARKERS: Marker[] = [
  { year: 2018, label: 'B.Tech' },
  { year: 2023, label: 'M.Tech' },
  { year: 2024, label: 'Skitre' },
  { year: 2025, label: 'Dvio' },
];

function careerY(year: number, mid: number) {
  const t = (year - 2018) / 8;
  let amp = 18;
  if (year >= 2023 && year < 2024) amp = 46;
  if (year >= 2024 && year < 2025) amp = 34;
  if (year >= 2025) amp = 48;
  return mid + Math.sin(t * Math.PI * 14) * amp + Math.sin(t * Math.PI * 3.2) * 10;
}

function buildPath(width: number, height: number) {
  const mid = height * 0.55;
  const steps = 96;
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const year = 2018 + t * 8;
    const x = t * width;
    const y = careerY(year, mid);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return `M ${points.join(' L ')}`;
}

export default function SignalTrace({ className = '' }: { className?: string }) {
  const width = 1000;
  const height = 168;
  const path = useMemo(() => buildPath(width, height), []);
  const mid = height * 0.55;

  return (
    <figure className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Career signal from 2018 to now: B.Tech, M.Tech, Skitre, Dvio"
      >
        <title>Career as a signal</title>
        <line
          x1="0"
          y1={mid}
          x2={width}
          y2={mid}
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeDasharray="3 7"
        />
        <path
          d={path}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1000}
          className="signal-stroke"
        />
        {MARKERS.map((marker, index) => {
          const x = ((marker.year - 2018) / 8) * width;
          const y = careerY(marker.year, mid);
          const anchor =
            index === 0 ? 'start' : index === MARKERS.length - 1 ? 'end' : 'middle';
          return (
            <g key={marker.year}>
              <circle cx={x} cy={y} r="3.5" fill="var(--ink)" />
              <circle cx={x} cy={y} r="8" fill="none" stroke="var(--ink)" strokeOpacity="0.25" />
              <text
                className="signal-label"
                x={x}
                y={Math.max(16, y - 14 - (index % 2) * 12)}
                textAnchor={anchor}
                fill="var(--ink)"
                fontSize="11"
                fontFamily="var(--font-mono), ui-monospace, monospace"
                letterSpacing="0.16em"
              >
                {marker.year} {marker.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Amplitude tracks degrees, then production roles — 2018 to now.
      </figcaption>
    </figure>
  );
}
