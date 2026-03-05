"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const BookPreloader = dynamic(() => import("./ui/BookPreloader"), { ssr: false });

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPath, setPrevPath] = useState<string>(pathname);

  useEffect(() => {
    // Show loader on initial load (pathname empty vs actual pathname)
    if (pathname && !prevPath) {
      setIsLoading(true);
      setPrevPath(pathname);
      return;
    }

    // Check if the path has changed (navigate to different page)
    if (pathname !== prevPath) {
      setIsLoading(true);
      setPrevPath(pathname);
    }
  }, [pathname, prevPath]);

  return (
    <>
      {isLoading && <BookPreloader onComplete={() => setIsLoading(false)} />}
      <main style={{ filter: isLoading ? "blur(10px)" : "none", transition: "filter 0.6s cubic-bezier(0.2, 1, 0.3, 1)" }}>
        {children}
      </main>
    </>
  );
}
