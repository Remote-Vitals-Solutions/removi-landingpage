'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import wristbands from '../../public/images/wristbands.png';

const features = [
  {
    title: '24/7 Monitoring',
    body: 'Continuous ECG capture without interruption to daily life. The device records every heartbeat — at rest, during activity, and through the night.',
  },
  {
    title: 'Remote Access',
    body: 'Clinicians view real-time data and receive automated alerts through a secure dashboard. No appointment needed.',
  },
  {
    title: 'AFib Detection',
    body: 'Onboard algorithms continuously analyse rhythm patterns and flag arrhythmia episodes for immediate clinical review.',
  },
];

export default function StickyProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = features.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.6 }
      );
      if (sectionRefs.current[i]) observer.observe(sectionRefs.current[i]!);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      {/* Product visual — sticky on desktop, shown above the features on mobile */}
      <div className="md:sticky md:top-32">
        <ProductVisual activeIndex={activeIndex} />
      </div>

      {/* Scrolling features */}
      <div className="flex flex-col">
        {features.map((f, i) => (
          <div
            key={f.title}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="min-h-[60vh] flex flex-col justify-center py-16 transition-opacity duration-500"
            style={{ opacity: activeIndex === i ? 1 : 0.3 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] mb-4" style={{ color: '#27B9B6' }}>
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1d1d1f' }}>
              {f.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#6e6e73' }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductVisual({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      className="rounded-3xl p-10 flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: '#f5f5f7', minHeight: '420px' }}
    >
      <Image
        src={wristbands}
        alt="Two Removi wristbands — one for each wrist"
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 90vw"
        className="w-full h-auto"
      />
      <p className="text-xs uppercase tracking-widest" style={{ color: '#6e6e73' }}>
        Design concept
      </p>

      {/* Feature indicators */}
      <div className="flex gap-2">
        {features.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              backgroundColor: '#27B9B6',
              width: activeIndex === i ? '24px' : '8px',
              opacity: activeIndex === i ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
