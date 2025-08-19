"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // 0.6–0.8 usually feels natural (not too laggy, not too snappy)
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
      smoothWheel: true,
      syncTouch: false, // keep native feel on touch devices
      wheelMultiplier: 1, // don’t slow down laptop trackpads
      touchMultiplier: 1.2, // a little boost for touch
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
