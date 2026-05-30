"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineSpa,
  MdWaterDrop,
  MdRefresh,
  MdOutlineScience,
  MdOutlineInbox,
  MdOutlineInfo,
} from "react-icons/md";
import { usePlants } from "@/hooks/usePlants";

function PlantSkeletonCard() {
  return (
    <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm anismate-pulse flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-4 w-2/3 rounded-md bg-gray-100" />
          <div className="h-3 w-1/2 rounded-md bg-gray-100" />
        </div>
      </div>
      <div className="h-16 w-full rounded-xl bg-gray-50" />
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="h-14 rounded-xl bg-gray-50" />
        <div className="h-14 rounded-xl bg-gray-50" />
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function PlantsPage() {
  const { plants, isLoading, error, loadPlants } = usePlants();

  useEffect(() => {
    loadPlants();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto w-full space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-primary">Katalog Tanaman</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            {isLoading
              ? "Memuat daftar tanaman…"
              : `${plants.length} jenis tanaman didukung di Subur.in`}
          </p>
        </div>

        <button
          id="refresh-plants-btn"
          onClick={loadPlants}
          disabled={isLoading}
          aria-label="Segarkan katalog tanaman"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/8 bg-white text-gray-500 hover:bg-gray-50 hover:text-primary disabled:opacity-50 transition-colors cursor-pointer shadow-sm"
        >
          <MdRefresh size={17} className={isLoading ? "animate-spin" : ""} />
        </button>
      </div>

      {/* Info Banner */}
      {!isLoading && plants.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4"
        >
          <MdOutlineInfo size={20} className="text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-primary">Informasi Parameter Ideal</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Semua parameter pH dan kelembaban tanah di bawah ini telah ditetapkan secara ilmiah dan tidak dapat diubah. Parameter ini digunakan oleh alat pemantau Anda untuk memberikan rekomendasi penyiraman dan pemupukan yang paling akurat secara real-time.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-xl bg-rose-50 border border-rose-200 px-4 py-3"
          >
            <MdOutlineInbox size={16} className="text-rose-500 shrink-0" />
            <p className="text-sm text-rose-700">{error}</p>
            <button
              onClick={loadPlants}
              className="ml-auto text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
            >
              Coba Lagi
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Plants Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <PlantSkeletonCard key={i} />
          ))}
        </div>
      ) : plants.length === 0 && !error ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-black/12 bg-white/60 py-16 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 text-primary">
            <MdOutlineSpa size={32} />
          </div>
          <div>
            <p className="text-base font-bold text-gray-700">Katalog Tanaman Kosong</p>
            <p className="text-sm text-gray-400 mt-1.5 max-w-xs mx-auto leading-relaxed">
              Tidak ditemukan data tanaman di database. Silakan jalankan seeder database pada backend Anda.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {plants.map((plant) => (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative rounded-2xl bg-white border border-black/5 p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between gap-5 overflow-hidden"
              >
                {/* Visual Top Decorative Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-emerald-400/30 group-hover:from-primary group-hover:to-emerald-400 transition-all duration-300" />

                <div className="space-y-4">
                  {/* Header Card */}
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MdOutlineSpa size={22} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                        {plant.name}
                      </h3>
                      {plant.scientificName && (
                        <p className="text-xs text-gray-400 italic mt-0.5">
                          {plant.scientificName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {plant.description ? (
                    <p className="text-xs text-gray-500 leading-relaxed font-normal bg-gray-50/50 rounded-xl p-3 border border-black/[0.02]">
                      {plant.description}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400 italic leading-relaxed font-normal bg-gray-50/50 rounded-xl p-3 border border-black/[0.02]">
                      Tidak ada deskripsi untuk tanaman ini.
                    </p>
                  )}

                  {/* Parameters Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {/* Kelembaban */}
                    <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-sky-50/20 px-3.5 py-3 gap-2">
                      <div className="flex items-center gap-1.5 text-sky-600">
                        <MdWaterDrop size={15} className="shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          Kelembaban
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">
                          {plant.minMoisture.toFixed(0)}% - {plant.maxMoisture.toFixed(0)}%
                        </p>
                        <p className="text-[9px] text-sky-700/80 font-bold mt-0.5">
                          Target: {plant.targetMoisture.toFixed(0)}%
                        </p>
                      </div>
                      {/* Sub-visual progress indicator with target marker */}
                      <div className="h-1.5 w-full bg-sky-100/80 rounded-full relative mt-0.5 overflow-visible">
                        <div
                          className="h-full bg-sky-400 rounded-full"
                          style={{
                            marginLeft: `${plant.minMoisture * 0.8}%`,
                            width: `${(plant.maxMoisture - plant.minMoisture) * 0.8}%`,
                          }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-700 border-2 border-white shadow-md transition-all duration-300 group-hover:scale-125"
                          style={{ left: `calc(${plant.targetMoisture * 0.8}% - 5px)` }}
                          title={`Target Optimal Kelembaban: ${plant.targetMoisture}%`}
                        />
                      </div>
                    </div>

                    {/* pH Tanah */}
                    <div className="flex flex-col justify-between rounded-xl border border-black/5 bg-amber-50/20 px-3.5 py-3 gap-2">
                      <div className="flex items-center gap-1.5 text-amber-600">
                        <MdOutlineScience size={15} className="shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          pH Tanah
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">
                          {plant.minPh.toFixed(1)} - {plant.maxPh.toFixed(1)}
                        </p>
                        <p className="text-[9px] text-amber-700/80 font-bold mt-0.5">
                          Target: {plant.phTarget.toFixed(1)}
                        </p>
                      </div>
                      {/* Sub-visual progress indicator with target marker */}
                      <div className="h-1.5 w-full bg-amber-100/80 rounded-full relative mt-0.5 overflow-visible">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{
                            marginLeft: `${(plant.minPh / 14) * 100}%`,
                            width: `${((plant.maxPh - plant.minPh) / 14) * 100}%`,
                          }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-700 border-2 border-white shadow-md transition-all duration-300 group-hover:scale-125"
                          style={{ left: `calc(${(plant.phTarget / 14) * 100}% - 5px)` }}
                          title={`Target Optimal pH: ${plant.phTarget}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
