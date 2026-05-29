import {
  MdNotificationsActive,
  MdTranslate,
  MdSave,
} from "react-icons/md";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">Pengaturan</h2>
        <p className="text-sm text-gray-500 mt-1">
          Konfigurasi preferensi notifikasi, bahasa, dan unit metrik Subur.in Anda.
        </p>
      </div>

      {/* Preferensi Notifikasi */}
      <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-black/5 pb-3">
          <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <MdNotificationsActive size={18} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Preferensi Notifikasi</h3>
            <p className="text-[10px] text-gray-400">Atur bagaimana sistem memperingatkan Anda.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Notifikasi Sensor Kelembaban</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Peringatkan jika kelembaban tanaman di bawah batas aman.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">Laporan Kebun Mingguan</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Kirimkan ringkasan analitik ke email akun Anda.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Preferensi Aplikasi */}
      <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-black/5 pb-3">
          <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <MdTranslate size={18} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Preferensi Bahasa & Unit</h3>
            <p className="text-[10px] text-gray-400">Atur bahasa dan jenis satuan suhu dasbor.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
              Bahasa Antarmuka
            </label>
            <div>
              <select className="w-full text-xs sm:text-sm rounded-lg border border-black/8 bg-white px-3 py-2 text-gray-700 outline-none focus:border-primary transition-all">
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English (US)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
              Satuan Suhu
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-black/8 bg-gray-50/50 p-1">
              <button className="flex-1 text-xs py-1.5 rounded bg-white text-primary font-semibold shadow-sm border border-black/5 cursor-pointer">
                Celsius (°C)
              </button>
              <button className="flex-1 text-xs py-1.5 rounded text-gray-500 hover:bg-white/40 cursor-pointer">
                Fahrenheit (°F)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simpan Button */}
      <div className="flex justify-end">
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-all shadow-sm shadow-primary/10 cursor-pointer">
          <MdSave size={18} />
          Simpan Pengaturan
        </button>
      </div>
    </div>
  );
}
