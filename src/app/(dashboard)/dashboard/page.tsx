import {
  MdOutlineSpa,
  MdWaterDrop,
  MdThermostat,
  MdWarningAmber,
} from "react-icons/md";
import StatCard from "@/components/dashboard/StatCard";
import LiveLocationTracker from "@/components/dashboard/LiveLocationTracker";

const stats = [
  {
    label: "Total Tanaman",
    value: "12",
    icon: MdOutlineSpa,
    iconBg: "bg-primary",
    trend: { value: "2 baru minggu ini", positive: true },
  },
  {
    label: "Rata-rata Kelembaban",
    value: "68%",
    icon: MdWaterDrop,
    iconBg: "bg-sky-500",
    trend: { value: "5% dari kemarin", positive: true },
  },
  {
    label: "Suhu Rata-rata",
    value: "27°C",
    icon: MdThermostat,
    iconBg: "bg-orange-400",
    trend: { value: "1°C dari kemarin", positive: false },
  },
  {
    label: "Peringatan Aktif",
    value: "3",
    icon: MdWarningAmber,
    iconBg: "bg-rose-500",
  },
];

const recentActivities = [
  {
    id: 1,
    plant: "Tomat Cherry",
    message: "Kelembaban tanah di bawah ambang batas",
    time: "10 menit lalu",
    type: "warning",
  },
  {
    id: 2,
    plant: "Cabai Rawit",
    message: "Penyiraman otomatis berhasil dilakukan",
    time: "1 jam lalu",
    type: "success",
  },
  {
    id: 3,
    plant: "Bayam Hijau",
    message: "Kondisi tanaman dalam keadaan normal",
    time: "2 jam lalu",
    type: "info",
  },
  {
    id: 4,
    plant: "Kangkung Air",
    message: "Suhu lingkungan meningkat, perlu perhatian",
    time: "3 jam lalu",
    type: "warning",
  },
];

const activityStyle: Record<string, string> = {
  warning: "bg-amber-100 text-amber-700",
  success: "bg-emerald-100 text-emerald-700",
  info: "bg-sky-100 text-sky-700",
};

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-primary">
          Ringkasan Kondisi
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Berikut adalah ringkasan kondisi tanaman Anda hari ini.
        </p>
      </div>
      <LiveLocationTracker />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl bg-white border border-black/5 shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
          <h3 className="text-sm font-semibold text-primary">
            Aktivitas Terbaru
          </h3>
          <span className="text-xs text-gray-400">Hari ini</span>
        </div>
        <ul className="divide-y divide-black/5">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-start gap-3 px-5 py-3.5">
              <span
                className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                  activityStyle[activity.type]
                }`}
              >
                {activity.plant}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 truncate">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
