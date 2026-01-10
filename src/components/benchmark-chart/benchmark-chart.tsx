import { component$ } from "@builder.io/qwik";

export interface BenchmarkData {
  name: string;
  label: string;
  value: number;
  color: string;
  version: string;
}

interface BenchmarkChartProps {
  title: string;
  subtitle: string;
  data: BenchmarkData[];
}

export const BenchmarkChart = component$<BenchmarkChartProps>(
  ({ title, subtitle, data }) => {
    // Find max value for scaling
    const maxValue = Math.max(...data.map((d) => d.value));
    const scale = 200 / maxValue; // SVG height scale

    return (
      <div class="my-12 p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800">
        {/* Header */}
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-white mb-2">{title}</h3>
          <p class="text-sm text-zinc-400">{subtitle}</p>
        </div>

        {/* Chart Container */}
        <div class="overflow-x-auto">
          <svg
            viewBox="0 0 800 350"
            class="w-full min-w-full"
            style={{ minHeight: "350px" }}
          >
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={`gridline-${i}`}
                x1="80"
                y1={300 - (i * 50)}
                x2="750"
                y2={300 - (i * 50)}
                stroke="#3f3f46"
                stroke-width="1"
                stroke-dasharray="4,4"
              />
            ))}

            {/* Y-axis */}
            <line x1="80" y1="300" x2="80" y2="30" stroke="#52525b" stroke-width="2" />

            {/* X-axis */}
            <line x1="80" y1="300" x2="750" y2="300" stroke="#52525b" stroke-width="2" />

            {/* Y-axis labels */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const value = Math.round((i * maxValue) / 5);
              return (
                <text
                  key={`ylabel-${i}`}
                  x="65"
                  y={305 - i * 50}
                  text-anchor="end"
                  dominant-baseline="middle"
                  class="text-xs fill-zinc-500 font-mono"
                >
                  {value.toLocaleString()}
                </text>
              );
            })}

            {/* Bars */}
            {data.map((item, idx) => {
              const barWidth = 80;
              const spacing = (750 - 80) / data.length;
              const x = 80 + idx * spacing + (spacing - barWidth) / 2;
              const height = item.value * scale;
              const y = 300 - height;

              return (
                <g key={item.name}>
                  {/* Bar */}
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={height}
                    fill={item.color}
                    class="transition-opacity hover:opacity-80"
                    rx="8"
                  />

                  {/* Value label on top of bar */}
                  <text
                    x={x + barWidth / 2}
                    y={y - 10}
                    text-anchor="middle"
                    class="text-sm font-bold fill-white font-mono"
                  >
                    {item.value.toLocaleString()}
                  </text>

                  {/* Runtime name */}
                  <text
                    x={x + barWidth / 2}
                    y="330"
                    text-anchor="middle"
                    class="text-sm font-bold fill-white"
                  >
                    {item.name}
                  </text>

                  {/* Version */}
                  <text
                    x={x + barWidth / 2}
                    y="348"
                    text-anchor="middle"
                    class="text-xs fill-zinc-500 font-mono"
                  >
                    {item.version}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div class="mt-8 pt-6 border-t border-zinc-800">
          <p class="text-xs text-zinc-500 mb-3 uppercase tracking-wider font-semibold">
            Legend
          </p>
          <div class="grid grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item.name} class="flex items-center gap-2">
                <div
                  class="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span class="text-sm text-zinc-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
