import React, { useState, useEffect } from 'react';
import '../styles/components/HeroSlider.css';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // product entries derived from pages directory; update images and descriptions as needed
  const slides = [
    {
      id: 1,
      title: 'Gas Monitoring System (Automat)',
      description: 'Used in transformers or other sealed tanks, our gas monitoring systems maintain a constant nitrogen or inert gas pressure to prevent atmospheric air and moisture ingress, with dual-stage regulation and safety valves for reliable operation.',
      image: '/images/Product Images/GMS_SDGR02D.png',
      link: '/gas-monitoring-system'
    },
    {
      id: 2,
      title: 'Low/High Pressure Alarm System',
      description: 'An alarm system that detects both low and high pressure conditions in transformer tanks, providing early warning to protect equipment and prevent failures.',
      image: '/images/Product Images/LHPAS.png',
      link: '/low-high-pressure-alarm-system'
    },
    {
      id: 3,
      title: 'Oil Level Indicator',
      description: 'Transparent tubular indicators designed for precise oil level readings, suitable for a wide range of transformer sizes and models.',
      image: '/images/Product Images/OLI.png',
      link: '/oil-level-indicators'
    },
    {
      id: 4,
      title: 'Pressure Relief Valve',
      description: 'Pressure relief valves manufactured in various sizes and models to vent excess pressure safely and protect transformer equipment from overpressure incidents.',
      image: '/images/Product Images/PRV_DP3EF.png',
      link: '/pressure-relief-valve'
    },
    {
      id: 5,
      title: 'PRV with Liquid Level Indicator',
      description: 'A dual-purpose unit combining a pressure relief valve with a liquid level indicator, offering convenient monitoring and safety in one compact assembly.',
      image: '/images/Product Images/PRV_LIQUID INDICATOR.png',
      link: '/prv-with-liquid-level-indicator'
    },
    {
      id: 6,
      title: 'Solenoid Interlock Device',
      description: 'Solenoid interlock devices providing reliable electrical isolation to ensure safe servicing and prevent unauthorized operation of transformer equipment.',
      image: '/images/Product Images/SOLENOID INTERLOCK DEVICE.png',
      link: '/solenoid-interlock-device'
    },
    {
      id: 7,
      title: 'Tank Valve',
      description: 'Tank valves built for durability, allowing component replacement without draining the insulating liquid and ensuring smooth maintenance operations.',
      image: '/images/Product Images/TANK VALVE.png',
      link: '/tank-valve'
    },
    {
      id: 8,
      title: 'Tubular Oil Level Gauge',
      description: 'Tubular oil level gauges offering clear, accurate indication of fluid level, facilitating easy visual inspection and maintenance.',
      image: '/images/Product Images/TOG_AT.png',
      link: '/tubular-oil-level-gauge'
    },
    {
      id: 9,
      title: 'Threaded Pressure Relief Valve',
      description: 'Threaded pressure relief valves providing a compact solution with easy installation and secure connections for various transformer applications.',
      image: '/images/Product Images/PRV_PIP-32.png',
      link: '/threaded-pressure-relief-valve'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7200);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="slider-container">
        <div className="slider-images">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`no-bottom slide ${index === activeSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${encodeURI(slide.image)}')` }}
            />
          ))}
        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              title={slide.title}
            />
          ))}
        </div>
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>
        <button className="nav-btn next-btn" onClick={nextSlide}>
          ›
        </button>
        </div>


        <div className="slider-content">
          <div className="content-wrapper">
            <h2 className="slide-title">{slides[activeSlide].title}</h2>
            <p className="slide-description">
              {slides[activeSlide].description}
            </p>
            <a href={slides[activeSlide].link} className="btn">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
