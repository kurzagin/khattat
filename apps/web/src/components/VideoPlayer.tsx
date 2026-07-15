"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 premium-glass bg-black pointer-events-none">
      <video
        ref={videoRef}
        title={title}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-auto outline-none object-cover"
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
