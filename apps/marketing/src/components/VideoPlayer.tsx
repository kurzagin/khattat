"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force the video to play to overcome browser autoplay suppression or hydration issues
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [src]);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 premium-glass bg-black pointer-events-none">
      <video
        ref={videoRef}
        title={title}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto outline-none object-cover"
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
