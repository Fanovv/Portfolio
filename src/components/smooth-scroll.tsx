"use client";

import { ReactLenis, useLenis } from "@/lib/lenis";
import { useEffect } from "react";

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
