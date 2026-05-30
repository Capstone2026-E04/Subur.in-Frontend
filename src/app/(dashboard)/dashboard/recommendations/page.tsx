"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RecommendationsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="flex h-[60vh] items-center justify-center">
      <p className="text-sm text-gray-400 font-semibold animate-pulse">
        Mengalihkan ke Dashboard...
      </p>
    </div>
  );
}
