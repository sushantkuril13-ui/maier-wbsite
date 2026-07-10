import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/ProductImageSlider.css';

export default function ProductImageSlider({ slides = [], interval = 2800 }) {
  const [current, setCurrent] = useState(0);
  const [enlargedSlide, setEnlargedSlide] = useState(null);
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

  const openPreview = () => {
    setEnlargedSlide(slides[current] || null);
  };

  const handlePreviewKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPreview();
    }
  };

  const closePreview = () => {
    setEnlargedSlide(null);
  };

  useEffect(() => {
    if (!enlargedSlide) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePreview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enlargedSlide]);

  if (slides.length === 0) return null;

  return (
    <>
      <div className="product-image-slider">
        <div
          className="slider-wrapper-product slider-preview-trigger"
          onClick={openPreview}
          onKeyDown={handlePreviewKeyDown}
          role="button"
          tabIndex={0}
          aria-label={`Open enlarged view for ${slides[current]?.caption || 'product image'}`}
        >
          {slides[current] && (
            <div className="product-slide active">
              <img
                src={encodeURI(slides[current].img)}
                alt={slides[current].caption || 'Product image'}
                className="product-slide-image"
              />
            </div>
          )}
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

      {enlargedSlide && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged product image" onClick={closePreview}>
          <button type="button" className="image-lightbox-close" onClick={closePreview} aria-label="Close enlarged image">
            ×
          </button>
          <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <img src={encodeURI(enlargedSlide.img)} alt={enlargedSlide.caption || 'Enlarged product image'} />
            {enlargedSlide.caption && <p>{enlargedSlide.caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}