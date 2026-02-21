import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/components/ReferencesSlider.css';

export default function ReferencesSlider() {
  const references = [
    { id: 1, name: 'Alstom', logo: '/images/referenzen/Website-Logo-Alstom.png' },
    { id: 2, name: 'CGPower', logo: '/images/referenzen/Website-Logo-CG.png' },
    { id: 3, name: 'Schneider', logo: '/images/referenzen/Website-Logo-Schneider.png' },
    { id: 4, name: 'SGB Smit', logo: '/images/referenzen/Website-Logo-SGB-Smit.png' },
    { id: 5, name: 'BEZ', logo: '/images/referenzen/Website-Logo-BEZ.png' },
    { id: 6, name: 'Toshiba', logo: '/images/referenzen/Website-Logo-Toshiba.png' }
  ];

  const len = references.length;
  // create tripled list so we can loop seamlessly
  const displayItems = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 3 * len; i++) arr.push(references[i % len]);
    return arr;
  }, [references, len]);

  const [activeIndex, setActiveIndex] = useState(len); // start at middle copy
  const [autoPlay, setAutoPlay] = useState(true);

  const sliderRef = useRef(null);
  const instantScrollRef = useRef(false);

  // helper: smooth animated horizontal scroll with easing
  const animateScroll = (container, targetLeft, duration = 600) => {
    if (!container) return;
    const start = container.scrollLeft;
    const change = targetLeft - start;
    if (change === 0) return;
    const startTime = performance.now();
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      container.scrollLeft = Math.round(start + change * easeInOutQuad(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => setActiveIndex((prev) => prev + 1), 3000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const nextSlide = () => {
    instantScrollRef.current = true;
    setActiveIndex((prev) => prev + 1);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const prevSlide = () => {
    instantScrollRef.current = true;
    setActiveIndex((prev) => prev - 1);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  // convert vertical wheel to horizontal scroll for the references slider
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const handler = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  // scroll handler: animate or instant scroll and normalize index into middle copy
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;
    const total = children.length;
    let idx = activeIndex;
    if (idx < 0) idx = ((idx % total) + total) % total;
    if (idx >= total) idx = idx % total;
    const target = children[idx];
    if (!target) return;
    const targetLeft = Math.round(target.offsetLeft + target.offsetWidth / 2 - container.offsetWidth / 2);

    if (instantScrollRef.current) {
      instantScrollRef.current = false;
      container.scrollTo({ left: targetLeft, behavior: 'auto' });
      // normalize into middle copy
      const middleStart = len;
      const middleEnd = 2 * len - 1;
      if (activeIndex < middleStart || activeIndex > middleEnd) {
        const mapped = ((activeIndex % len) + len) % len + len;
        instantScrollRef.current = true;
        setActiveIndex(mapped);
      }
      return;
    }

    animateScroll(container, targetLeft, 600);

    // after animation, normalize index if it moved into cloned area
    const adjustAfter = () => {
      const middleStart = len;
      const middleEnd = 2 * len - 1;
      if (activeIndex < middleStart || activeIndex > middleEnd) {
        const mapped = ((activeIndex % len) + len) % len + len;
        instantScrollRef.current = true;
        setActiveIndex(mapped);
      }
    };
    const t = setTimeout(adjustAfter, 650);
    return () => clearTimeout(t);
  }, [activeIndex, len]);

  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2 className="section-title">References</h2>
        <div className="slider-wrapper">
          <button className="references-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous reference">
            ‹
          </button>
          <div className="references-slider" ref={sliderRef}>
            {displayItems.map((ref, i) => (
              <div
                key={`${ref.id}-${i}`}
                className="reference-item"
                style={{ backgroundImage: `url('${ref.logo}')` }}
                title={ref.name}
              />
            ))}
          </div>
          <button className="references-nav-btn next-btn" onClick={nextSlide} aria-label="Next reference">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
