"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <input placeholder="임시 검색 폼" />
      <button onClick={() => router.push("/search")}>검색</button>
      {children}
    </div>
  );
}
