// ── Registered Device (from Supabase via GET /api/devices) ───────────────────

export type DeviceStatus = "ACTIVE" | "INACTIVE";

export interface RegisteredDevice {
  id: string;
  deviceId: string;
  label: string;
  status: DeviceStatus;
  lastSeenAt: string | null;
  createdAt: string;
  plant?: {
    id: string;
    name: string;
  } | null;
  polybag?: {
    id: string;
    name: string;
    size?: string;
  } | null;
}

// ── Discovered Device (from Redis via GET /api/devices/discovered) ────────────

export interface DiscoveredDevice {
  deviceId: string;
  ph: number;
  moisture: number;
  timestamp: string;
}

export interface PlantOption {
  id: string;
  name: string;
}

export interface Plant {
  id: string;
  name: string;
  scientificName: string | null;
  description: string | null;
  minPh: number;
  maxPh: number;
  phTarget: number;
  minMoisture: number;
  maxMoisture: number;
  targetMoisture: number;
  createdAt: string;
  updatedAt: string;
}

export interface PolybagOption {
  id: string;
  name: string;
  size?: string;
}

// ── API Payloads ──────────────────────────────────────────────────────────────

export interface ClaimDevicePayload {
  deviceId: string;
  label: string;
  plantId: string;
  polybagId: string;
}

export interface UpdateDevicePayload {
  label?: string;
  plantId?: string;
  polybagId?: string;
  status?: DeviceStatus;
}

export interface SensorHistoryItem {
  id: number;
  timestamp: string;
  deviceId: string;
  ph: number;
  moisture: number;
}

export interface DeviceRecommendation {
  phValue: number;
  moistureValue: number;
  fuzzyIndex: number;
  categoryCode: string;
  actionText: string;
  waterVolumeLiter: number;
  limeDosageGram: number;
  sulfurDosageGram: number;
  reduceWatering: boolean;
  logId?: string;
  timestamp?: string;
}



