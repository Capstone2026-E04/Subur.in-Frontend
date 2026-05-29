import {
  MdCheck,
  MdWarningAmber,
  MdInfoOutline,
} from "react-icons/md";

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  type: "warning" | "success" | "info";
  isRead: boolean;
}

const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "Peringatan Kelembaban",
    message: "Kelembaban media tanam Cabai Rawit menurun di bawah batas aman (42%).",
    time: "10 menit lalu",
    type: "warning",
    isRead: false,
  },
  {
    id: 2,
    title: "Penyiraman Otomatis",
    message: "Penyiraman otomatis Cabai Rawit berhasil dilakukan selama 30 detik.",
    time: "1 jam lalu",
    type: "success",
    isRead: true,
  },
  {
    id: 3,
    title: "Sensor Terhubung",
    message: "Node Sensor 1 berhasil terhubung ke server utama dan mengirim data.",
    time: "2 jam lalu",
    type: "info",
    isRead: true,
  },
];

const iconStyles = {
  warning: "bg-amber-50 text-amber-600 border-amber-100",
  success: "bg-emerald-50 text-emerald-600 border-emerald-100",
  info: "bg-sky-50 text-sky-600 border-sky-100",
};

const iconComponents = {
  warning: MdWarningAmber,
  success: MdCheck,
  info: MdInfoOutline,
};

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Notifikasi</h2>
          <p className="text-sm text-gray-500 mt-1">
            Lihat pembaruan penting serta riwayat aktivitas sensor kebun Anda.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/5 bg-white px-3.5 py-2 text-xs font-semibold text-primary hover:bg-gray-55/40 transition-all shadow-sm cursor-pointer">
          <MdCheck size={16} />
          Tandai Dibaca
        </button>
      </div>

      {/* List */}
      <div className="rounded-2xl bg-white border border-black/5 shadow-sm divide-y divide-black/5 overflow-hidden">
        {mockNotifications.map((notif) => {
          const Icon = iconComponents[notif.type];
          return (
            <div
              key={notif.id}
              className={`p-5 flex items-start gap-4 hover:bg-gray-50/40 transition-colors duration-200 ${
                !notif.isRead ? "bg-primary/5/10 bg-opacity-[0.02]" : ""
              }`}
            >
              {/* Icon Container */}
              <div
                className={`h-10 w-10 rounded-xl border flex items-center justify-center shrink-0 ${
                  iconStyles[notif.type]
                }`}
              >
                <Icon size={20} />
              </div>

              {/* Text Container */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    {notif.title}
                    {!notif.isRead && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    )}
                  </h3>
                  <span className="text-xs text-gray-400 shrink-0">{notif.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {notif.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
