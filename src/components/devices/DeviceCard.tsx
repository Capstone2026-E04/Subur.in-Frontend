"use client";

import { motion } from "framer-motion";
import {
  MdOutlineDeviceHub,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
  MdOutlineSpa,
  MdOutlineWaterDrop,
  MdAccessTime,
  MdCircle,
} from "react-icons/md";
import type { RegisteredDevice } from "@/types/device";

interface DeviceCardProps {
  device: RegisteredDevice;
  index: number;
  onEdit: (device: RegisteredDevice) => void;
  onDelete: (device: RegisteredDevice) => void;
}

function formatRelativeTime(dateStr: string | null): string {
  if (!dateStr) return "Belum pernah aktif";
  try {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);
    if (mins < 1) return "Baru saja";
    if (mins < 60) return `${mins} menit lalu`;
    if (hrs < 24) return `${hrs} jam lalu`;
    return `${days} hari lalu`;
  } catch {
    return dateStr;
  }
}

export default function DeviceCard({
  device,
  index,
  onEdit,
  onDelete,
}: DeviceCardProps) {
  const isActive = device.status === "ACTIVE";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl bg-white border border-black/6 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* Top accent stripe */}
      <div
        className={`h-1 w-full ${isActive ? "bg-gradient-to-r from-emerald-400 to-teal-500" : "bg-gradient-to-r from-gray-200 to-gray-300"}`}
      />

      <div className="flex flex-col gap-4 p-5">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          {/* Icon + Label */}
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-400"}`}
            >
              <MdOutlineDeviceHub size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate leading-tight">
                {device.label}
              </p>
              <p className="text-xs text-gray-400 font-mono mt-0.5 truncate">
                {device.deviceId}
              </p>
            </div>
          </div>

          {/* Status badge */}
          <div
            className={`flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
              isActive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <MdCircle size={7} className={isActive ? "text-emerald-500 animate-pulse" : "text-gray-400"} />
            {isActive ? "Aktif" : "Tidak Aktif"}
          </div>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap gap-2">
          {device.plant && (
            <div className="flex items-center gap-1.5 rounded-lg bg-primary/8 px-2.5 py-1.5">
              <MdOutlineSpa size={13} className="text-primary shrink-0" />
              <span className="text-xs font-medium text-primary/80 truncate max-w-[140px]">
                {device.plant.name}
              </span>
            </div>
          )}
          {device.polybag && (
            <div className="flex items-center gap-1.5 rounded-lg bg-sky-50 px-2.5 py-1.5">
              <MdOutlineWaterDrop size={13} className="text-sky-600 shrink-0" />
              <span className="text-xs font-medium text-sky-700 truncate max-w-[140px]">
                {device.polybag.name}
                {device.polybag.size ? ` · ${device.polybag.size}` : ""}
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-black/5" />

        {/* Footer Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <MdAccessTime size={13} className="shrink-0" />
            <span>{formatRelativeTime(device.lastSeenAt)}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              id={`edit-device-${device.id}`}
              onClick={() => onEdit(device)}
              aria-label={`Edit ${device.label}`}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-primary/8 hover:text-primary transition-colors cursor-pointer"
            >
              <MdOutlineEdit size={14} />
              Edit
            </button>
            <button
              id={`delete-device-${device.id}`}
              onClick={() => onDelete(device)}
              aria-label={`Hapus ${device.label}`}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <MdOutlineDeleteOutline size={14} />
              Hapus
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
