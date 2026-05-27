import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/components/ReferencesSlider.css';

export default function ReferencesSlider() {
  const customerFiles = [
    'bharat-bijlee.jpg',
    'bhel.gif',
    'emmess-control.png',
    'g.gif',
    'indian-railways.png',
    'marsons.gif',
    'pete.png',
    'schnider-electric.png',
    'sct.png',
    'seil.png',
    'serwel.png',
    'telk.png',
    'tesla.gif',
    'toshiba.png',
    'unindo.png',
    'vidyth.jpg',
    'vijai.jpg'
  ];

  const references = customerFiles.map((file, idx) => {
    const base = file.replace(/\.[^.]+$/, '');
    const name = base
      .split(/[-_]/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      id: idx + 1,
      name,
      logo: `/images/customer-images/${file}`
    };
  });

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
  const suppressScrollRef = useRef(false);
  const navClickRef = useRef(false);
  const scrollEndTimerRef = useRef(null);

  // use native smooth scrolling via element.scrollTo({ behavior: 'smooth' })
  // this provides a fluent, GPU-friendly scroll animation handled by the browser

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => setActiveIndex((prev) => prev + 1), 3000);
    return () => clearInterval(id);
  }, [autoPlay]);

  // on mount: jump to the middle copy instantly to make looping seamless
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    const children = container.children;
    if (!children || children.length === 0) return;
    const middle = len;
    const child = children[middle];
    if (child) {
      const left = Math.round(child.offsetLeft + child.offsetWidth / 2 - container.offsetWidth / 2);
      // set instantly without triggering the main effect
      suppressScrollRef.current = true;
      container.scrollLeft = left;
      setActiveIndex(middle);
    }
  }, [len]);

  // detect scroll end (debounced) and normalize into the middle copy for seamless looping
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;
    const onScroll = () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        const children = container.children;
        if (!children || children.length === 0) return;
        const center = container.scrollLeft + container.offsetWidth / 2;
        let nearest = 0;
        let minDiff = Infinity;
        for (let i = 0; i < children.length; i++) {
          const kid = children[i];
          const kidCenter = kid.offsetLeft + kid.offsetWidth / 2;
          const diff = Math.abs(kidCenter - center);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = i;
          }
        }
        // center on nearest without animation by skipping the effect
        suppressScrollRef.current = true;
        const target = children[nearest];
        if (target) {
          const targetLeft = Math.round(target.offsetLeft + target.offsetWidth / 2 - container.offsetWidth / 2);
          container.scrollLeft = targetLeft;
        }
        setActiveIndex(nearest);

        // if nearest is outside the middle copy, map it into the middle copy instantly
        const middleStart = len;
        const middleEnd = 2 * len - 1;
        if (nearest < middleStart || nearest > middleEnd) {
          const mapped = ((nearest % len) + len) % len + len;
          const mappedChild = children[mapped];
          if (mappedChild) {
            const mappedLeft = Math.round(mappedChild.offsetLeft + mappedChild.offsetWidth / 2 - container.offsetWidth / 2);
            suppressScrollRef.current = true;
            container.scrollLeft = mappedLeft;
            setActiveIndex(mapped);
          } else {
            setActiveIndex(mapped);
          }
        }
      }, 140);
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, [len]);

  const nextSlide = () => {
    const container = sliderRef.current;
    if (container && container.children && container.children.length) {
      const total = container.children.length;
      const newIndex = activeIndex + 1;
      let idx = newIndex;
      if (idx < 0) idx = ((idx % total) + total) % total;
      if (idx >= total) idx = idx % total;
      const target = container.children[idx];
        if (target) {
        const targetLeft = Math.round(target.offsetLeft + target.offsetWidth / 2 - container.offsetWidth / 2);
        container.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }
    navClickRef.current = true; // mark nav click to skip effect animation
    setActiveIndex((prev) => prev + 1);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const prevSlide = () => {
    const container = sliderRef.current;
    if (container && container.children && container.children.length) {
      const total = container.children.length;
      const newIndex = activeIndex - 1;
      let idx = newIndex;
      if (idx < 0) idx = ((idx % total) + total) % total;
      if (idx >= total) idx = idx % total;
      const target = container.children[idx];
        if (target) {
        const targetLeft = Math.round(target.offsetLeft + target.offsetWidth / 2 - container.offsetWidth / 2);
        container.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }
    navClickRef.current = true; // mark nav click to skip effect animation
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
    if (suppressScrollRef.current) {
      // previous normalization already adjusted scrollLeft; skip one effect run
      suppressScrollRef.current = false;
      return;
    }
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
      // normalize into middle copy without causing another scroll animation
      const middleStart = len;
      const middleEnd = 2 * len - 1;
      if (activeIndex < middleStart || activeIndex > middleEnd) {
        const mapped = ((activeIndex % len) + len) % len + len;
        const mappedChild = container.children[mapped];
        if (mappedChild) {
          const mappedLeft = Math.round(mappedChild.offsetLeft + mappedChild.offsetWidth / 2 - container.offsetWidth / 2);
          suppressScrollRef.current = true;
          container.scrollLeft = mappedLeft;
          setActiveIndex(mapped);
        } else {
          setActiveIndex(mapped);
        }
      }
      return;
    }

    // if nav was clicked, skip animation (already animated in click handler) and only normalize
    if (navClickRef.current) {
      navClickRef.current = false;
      // schedule normalization after nav animation completes
      const adjustAfter = () => {
        const middleStart = len;
        const middleEnd = 2 * len - 1;
        if (activeIndex < middleStart || activeIndex > middleEnd) {
          const mapped = ((activeIndex % len) + len) % len + len;
          const mappedChild = container.children[mapped];
          if (mappedChild) {
            const mappedLeft = Math.round(mappedChild.offsetLeft + mappedChild.offsetWidth / 2 - container.offsetWidth / 2);
            suppressScrollRef.current = true;
            container.scrollLeft = mappedLeft;
            setActiveIndex(mapped);
          } else {
            setActiveIndex(mapped);
          }
        }
      };
      const t = setTimeout(adjustAfter, 550);
      return () => clearTimeout(t);
    }

    // autoplay: use native smooth scroll
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });

    // after animation, normalize index if it moved into cloned area
    const adjustAfter = () => {
      const middleStart = len;
      const middleEnd = 2 * len - 1;
      if (activeIndex < middleStart || activeIndex > middleEnd) {
        const mapped = ((activeIndex % len) + len) % len + len;
        const mappedChild = container.children[mapped];
        if (mappedChild) {
          const mappedLeft = Math.round(mappedChild.offsetLeft + mappedChild.offsetWidth / 2 - container.offsetWidth / 2);
          suppressScrollRef.current = true;
          container.scrollLeft = mappedLeft;
          setActiveIndex(mapped);
        } else {
          setActiveIndex(mapped);
        }
      }
    };
    const t = setTimeout(adjustAfter, 550);
    return () => clearTimeout(t);
  }, [activeIndex, len]);

  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>
          Our Customers
        </h2>
        <div className="slider-wrapper">
          <button className="references-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous reference">
            ‹
          </button>
          <div className="references-slider" ref={sliderRef}>
            {displayItems.map((ref, i) => (
              <div
                key={`${ref.id}-${i}`}
                className="reference-item"
                title={ref.name}
              >
                <img
                  src={ref.logo}
                  alt={ref.name}
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
              </div>
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
