"use client";

import { useEffect, useRef } from "react";

export function TrakteerEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const sdkScript = document.createElement("script");
    sdkScript.src =
      "https://edge-cdn.trakteer.id/js/trbtn-overlay.min.js?v=14-05-2025";
    sdkScript.async = true;

    sdkScript.onload = () => {
      if (!container.isConnected) return;

      const initScript = document.createElement("script");
      initScript.className = "troverlay";
      initScript.text = `
        (function() {
          var trbtnId = trbtnOverlay.init('Support on Trakteer','#be1e2d','https://trakteer.id/v1/kurzagin/tip/embed/modal','https://edge-cdn.trakteer.id/images/embed/trbtn-icon.png?v=14-05-2025','40','inline');
          trbtnOverlay.draw(trbtnId);
        })();
      `;
      container.appendChild(initScript);
    };

    container.appendChild(sdkScript);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="flex min-h-10 justify-center" />;
}
