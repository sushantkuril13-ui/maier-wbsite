import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/ProductImageSlider.css';

export default function ProductImageSlider({ slides = [], interval = 2800 }) {
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    if (slides.length > 1) {
      timeout.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, interval);
    }
    return () => clearInterval(timeout.current);
  }, [slides, interval]);

  const goTo = (idx) => {
    clearInterval(timeout.current);
    setCurrent(idx);
  };

  if (slides.length === 0) return null;

  return (
    <div className="product-image-slider">
      <div className="slider-wrapper-product">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${encodeURI(slide.img)})` }}
          />
        ))}
      </div>
      {slides[current] && slides[current].caption && (
        <div className="slider-caption-below">{slides[current].caption}</div>
      )}
      
      {slides.length > 1 && (
        <ul className="dotnav">
          {slides.map((_, i) => (
            <li key={i} className={i === current ? 'active' : ''}>
              <button onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}