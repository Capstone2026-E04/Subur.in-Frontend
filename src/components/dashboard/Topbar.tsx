"use client";

import { usePathname } from "next/navigation";
import { MdPerson } from "react-icons/md";
import Link from "next/link";

interface TopbarProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const labelMap: Record<string, string> = {
  dashboard: "Dashboard",
  plants: "Tanaman",
  analytics: "Analitik",
  notifications: "Notifikasi",
  settings: "Pengaturan",
  profile: "Profil",
};

export default function Topbar({ user }: TopbarProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    return {
      label,
      href,
      isLast,
    };
  });

  return (
    <header className="flex h-16 items-center justify-between border-b border-black/5 bg-background px-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
        {breadcrumbs.map((crumb, idx) => (
          <div key={crumb.href} className="flex items-center gap-1.5">
            {idx > 0 && <span className="text-gray-300">/</span>}
            {crumb.isLast ? (
              <span className="text-primary font-semibold">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="text-gray-500 hover:text-primary transition-colors">
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {/* Greeting */}
        <span className="text-sm sm:text-md font-semibold text-gray-700">
          Halo, {user?.name || "Pengguna"}
        </span>

        {/* Profile Avatar */}
        <Link
          href="/dashboard/profile"
          aria-label="Profil"
          className="flex h-9 w-9 overflow-hidden items-center justify-center rounded-full border border-primary/10 bg-primary text-white hover:border-primary-light transition-colors shrink-0"
        >
          {user?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt={user.name || "Profil"}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <MdPerson size={18} />
          )}
        </Link>
      </div>
    </header>
  );
}
