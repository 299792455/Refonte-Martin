'use client';
import { useEffect, useRef } from 'react';

const items = [
  '****',
  '/',
  'NECESITO',
  '/',
  'SU',
  'CONTENIDO',
  '!',
  'Y LAS FOTOS DEL TEAM',
  '****',
  'ANTES',
  'DEL',
  'DESPLEGO',
];

export default function CarouselTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fullItems = [...items, ...items]; // Duplication pour boucle fluide
    track.innerHTML = '';

    fullItems.forEach((item) => {
      const div = document.createElement('div');
      div.className =
        'px-8 py-4 text-[2.5rem] xl:text-[3rem] text-[#fff] font-light whitespace-nowrap font-funnel';
      div.textContent = item;
      track.appendChild(div);
    });

    let position = 0;
    const speed = 3.5;

    const animate = () => {
      position -= speed;
      if (track.scrollWidth / 2 + position <= 0) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full overflow-hidden border-y border-[#b8860b] rotate-[0.1deg]">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform" />
    </div>
  );
}
