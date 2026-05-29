import {
  MdAdd,
  MdOutlineSpa,
  MdWaterDrop,
  MdThermostat,
  MdInfoOutline,
} from "react-icons/md";

interface Plant {
  id: number;
  name: string;
  species: string;
  status: "Sehat" | "Perlu Air" | "Perhatian";
  moisture: string;
  temperature: string;
  ageDays: number;
}

const mockPlants: Plant[] = [
  {
    id: 1,
    name: "Tomat Cherry Kebun A",
    species: "Solanum lycopersicum",
    status: "Sehat",
    moisture: "72%",
    temperature: "26°C",
    ageDays: 24,
  },
  {
    id: 2,
    name: "Cabai Rawit Depan",
    species: "Capsicum frutescens",
    status: "Perlu Air",
    moisture: "42%",
    temperature: "28°C",
    ageDays: 45,
  },
  {
    id: 3,
    name: "Bayam Hijau Bed 1",
    species: "Amaranthus viridis",
    status: "Sehat",
    moisture: "68%",
    temperature: "25°C",
    ageDays: 14,
  },
  {
    id: 4,
    name: "Kangkung Air Hidro",
    species: "Ipomoea aquatica",
    status: "Perhatian",
    moisture: "85%",
    temperature: "29°C",
    ageDays: 10,
  },
];

const statusStyles = {
  Sehat: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Perlu Air": "bg-amber-50 text-amber-700 border-amber-200",
  Perhatian: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function PlantsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Daftar Tanaman</h2>
          <p className="text-sm text-gray-500 mt-1">
            Pantau perkembangan dan kondisi vitalitas tanaman Anda secara real-time.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-all shadow-sm shadow-primary/10 cursor-pointer">
          <MdAdd size={20} />
          Tambah Tanaman
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockPlants.map((plant) => (
          <div
            key={plant.id}
            className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-300 flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              {/* Header Card */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MdOutlineSpa size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">
                      {plant.name}
                    </h3>
                    <p className="text-xs text-gray-400 italic mt-0.5">
                      {plant.species}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold shrink-0 ${
                    statusStyles[plant.status]
                  }`}
                >
                  {plant.status}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="flex items-center gap-2.5 rounded-lg border border-black/5 bg-gray-50/55 px-3 py-2">
                  <MdWaterDrop size={16} className="text-sky-500 shrink-0" />
                  <div>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
                      Kelembaban
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      {plant.moisture}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-black/5 bg-gray-50/55 px-3 py-2">
                  <MdThermostat size={16} className="text-orange-500 shrink-0" />
                  <div>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
                      Suhu
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      {plant.temperature}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Card */}
            <div className="flex items-center justify-between border-t border-black/5 pt-3 mt-1 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MdInfoOutline size={14} className="text-gray-400" />
                Umur: <strong className="text-gray-600 font-semibold">{plant.ageDays} hari</strong>
              </span>
              <button className="text-xs font-medium text-primary hover:text-primary-light transition-colors cursor-pointer">
                Lihat Detail →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
