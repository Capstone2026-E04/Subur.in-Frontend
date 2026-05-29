import {
  MdCalendarToday,
  MdWaterDrop,
  MdThermostat,
  MdTrendingUp,
  MdTrendingDown,
} from "react-icons/md";

interface ChartDataPoint {
  day: string;
  moisture: number;
  temp: number;
}

const mockWeeklyData: ChartDataPoint[] = [
  { day: "Sen", moisture: 65, temp: 26 },
  { day: "Sel", moisture: 68, temp: 25 },
  { day: "Rab", moisture: 72, temp: 27 },
  { day: "Kam", moisture: 70, temp: 28 },
  { day: "Jum", moisture: 63, temp: 26 },
  { day: "Sab", moisture: 60, temp: 27 },
  { day: "Min", moisture: 68, temp: 25 },
];

export default function AnalyticsPage() {
  const width = 500;
  const height = 200;
  const padding = 30;

  const getX = (index: number) =>
    padding + (index * (width - 2 * padding)) / (mockWeeklyData.length - 1);
  const getY = (val: number, max: number) =>
    height - padding - (val * (height - 2 * padding)) / max;

  const moisturePoints = mockWeeklyData.map((d, i) => `${getX(i)},${getY(d.moisture, 100)}`).join(" ");
  const tempPoints = mockWeeklyData.map((d, i) => `${getX(i)},${getY(d.temp, 50)}`).join(" ");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Analitik Kebun</h2>
          <p className="text-sm text-gray-500 mt-1">
            Pantau dan analisis tren fluktuasi iklim mikro tanah serta lingkungan tanaman Anda.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm shrink-0">
          <MdCalendarToday size={14} className="text-primary" />
          <span>7 Hari Terakhir</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm flex items-center justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Rata-rata Kelembaban
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800">66.5%</span>
              <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
                <MdTrendingUp size={12} />
                +2.4%
              </span>
            </div>
            <p className="text-xs text-gray-400 truncate">Zona tumbuh dalam batas ideal</p>
          </div>
          <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
            <MdWaterDrop size={24} />
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm flex items-center justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Rata-rata Suhu
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800">26.4°C</span>
              <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-rose-600">
                <MdTrendingDown size={12} />
                -0.8°C
              </span>
            </div>
            <p className="text-xs text-gray-400 truncate">Relatif sejuk dan stabil</p>
          </div>
          <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <MdThermostat size={24} />
          </div>
        </div>
      </div>

      {/* SVG Line Chart Card */}
      <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-black/5 pb-4">
          <h3 className="text-sm font-semibold text-gray-800">Grafik Parameter Mingguan</h3>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              Kelembaban (%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Suhu (°C)
            </span>
          </div>
        </div>

        {/* Responsive Chart Container */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[500px] h-[220px] relative px-2">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full text-gray-300"
              style={{ overflow: "visible" }}
            >
              {/* Grid Lines */}
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="currentColor" strokeOpacity={0.15} strokeDasharray="4 4" />
              <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="currentColor" strokeOpacity={0.15} strokeDasharray="4 4" />
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="currentColor" strokeOpacity={0.15} />

              {/* Moisture Line Path */}
              <polyline
                fill="none"
                stroke="#0284c7" // sky-600
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={moisturePoints}
                className="drop-shadow-sm"
              />

              {/* Temperature Line Path */}
              <polyline
                fill="none"
                stroke="#f97316" // orange-500
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={tempPoints}
                className="drop-shadow-sm"
              />

              {/* Data Node Dots */}
              {mockWeeklyData.map((d, i) => (
                <g key={i}>
                  {/* Moisture Dots */}
                  <circle
                    cx={getX(i)}
                    cy={getY(d.moisture, 100)}
                    r="4.5"
                    fill="#ffffff"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                  />
                  {/* Temp Dots */}
                  <circle
                    cx={getX(i)}
                    cy={getY(d.temp, 50)}
                    r="4.5"
                    fill="#ffffff"
                    stroke="#f97316"
                    strokeWidth="2.5"
                  />
                  {/* Day Axis Label */}
                  <text
                    x={getX(i)}
                    y={height - 10}
                    textAnchor="middle"
                    fill="#9ca3af" // gray-400
                    fontSize="11"
                    fontWeight="500"
                  >
                    {d.day}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
