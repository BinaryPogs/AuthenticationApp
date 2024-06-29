"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/settings");
  }, []);

  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800">
      {/* Your home page content */}
    </main>
  );
}