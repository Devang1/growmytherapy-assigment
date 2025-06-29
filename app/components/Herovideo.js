'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover absolute inset-0"
    >
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
