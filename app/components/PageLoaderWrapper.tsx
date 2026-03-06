"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const BookPreloader = dynamic(() => import("./ui/BookPreloader"), { ssr: false });

function RouteFrame({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <BookPreloader onComplete={() => setIsLoading(false)} />}
      <main style={{ filter: isLoading ? "blur(10px)" : "none", transition: "filter 0.6s cubic-bezier(0.2, 1, 0.3, 1)" }}>
        {children}
      </main>
    </>
  );
}

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  return <RouteFrame key={pathname}>{children}</RouteFrame>;
}
