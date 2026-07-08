import React, { useState, useEffect } from 'react';
import '../styles/components/HeroSlider.css';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // product entries derived from pages directory; update images and descriptions as needed
  const slides = [
    {
      id: 4,
      title: 'Pressure Relief Valve',
      description: 'Pressure Relief Valves (PRVs) provide reliable overpressure protection for transformers, tap changers, pressure vessels, and other pressurized systems. Designed for repeated operation, they safely release excess internal pressure and automatically reseal once normal conditions are restored. Their robust construction, visual indication, and optional limit switch ensure dependable performance in both indoor and outdoor applications.',
      // image: '/images/Product Images/PRV_DP3EF.png',
      image: '/images/background-images/bg try .png',
      link: '/pressure-relief-valve'
    },
    {
      id: 1,
      title: 'Gas Monitoring System (Automat)',
      description: 'The Nitrogen Gas Monitoring System maintains and monitors nitrogen pressure within sealed transformers to ensure a moisture-free, contamination-resistant environment. By preventing oxidation, compensating for pressure variations, and protecting transformer insulation, it enhances operational safety, improves reliability, and extends the service life of transformers under varying operating conditions.',
      image: '/images/Product Images/GAS-MONITORING-SYSTEM-(AUTOMAT)-hero-slider.jpeg',
      link: '/gas-monitoring-system'
    },
    {
      id: 3,
      title: 'Oil Level Indicator',
      description: 'Oil Level Indicators (OLIs) provide accurate, continuous monitoring of transformer oil levels in hermetically sealed and conservator-type transformers. Using a reliable float-operated mechanism, they deliver clear visual indication of oil level changes, enabling early detection of leaks, gas formation, and abnormal conditions while supporting safe operation, preventive maintenance, and extended transformer service life.',
      image: '/images/Product Images/oli-hero-slider.png',
      link: '/oil-level-indicators'
    },
    {
      id: 7,
      title: 'Tank Valve',
      description: 'Tank Valves are compact, precision-engineered components designed for hermetically sealed transformers to enable quick inflation, deflation, and pressure measurement. Featuring a standardized valve core, they ensure reliable sealing, efficient pressure control, minimal internal protrusion, and dependable performance where installation space is limited.',
      image: '/images/Product Images/tank-valve-hero-slider-test.png',
      link: '/tank-valve'
    },
    {
      id: 5,
      title: 'PRV with Liquid Level Indicator',
      description: 'The Pressure Relief Valve with Liquid Level Indicator combines reliable overpressure protection and continuous oil level monitoring in a single compact assembly for hermetically sealed transformers. Designed for repeated operation, it enhances transformer safety, simplifies maintenance, and ensures dependable performance with clear visual indication and automatic pressure relief.',
      image: '/images/Product Images/TUBULAR-OIL-LEVEL-GAUGE-hero-slider.jpeg',
      link: '/prv-with-liquid-level-indicator'
    },
    {
      id: 6,
      title: 'Solenoid Interlock Device',
      description: 'The Solenoid Interlock Device is a precision-engineered lock-and-key system that enforces a predefined sequence of operations for industrial and substation equipment. By combining mechanical interlocking with electrical control, it enhances operational safety, prevents unauthorized access, and minimizes the risk of incorrect switching or maintenance procedures.',
      image: '/images/Product Images/SOLENOID-INTERLOCK-DEVICE-hero-slider.jpeg',
      link: '/solenoid-interlock-device'
    },
    {
      id: 2,
      title: 'Low/High Pressure Alarm System',
      description: 'The Pressure Alarm System continuously monitors transformer or tank pressure during transit and storage. Using a calibrated pressure sensing switch, it provides immediate audio and visual alerts when pressure reaches preset alarm limits. Designed for reliable operation, it helps detect pressure loss early, preventing damage and ensuring equipment safety.',
      image: '/images/Product Images/LOWHIGH-PRESSURE-ALARM-SYSTEM-hero-slider.jpeg',
      link: '/low-high-pressure-alarm-system'
    },
    // {
    //   id: 8,
    //   title: 'Tubular Oil Level Gauge',
    //   description: 'The XD Series Tubular Oil Level Gauge combines a Pressure Relief Valve and Oil Level Indicator in a compact unit for hermetically sealed transformers. It provides reliable overpressure protection, continuous oil level monitoring, and conservator functionality, ensuring safe operation, reduced maintenance, and dependable performance in demanding indoor and outdoor environments.',
    //   image: '/images/Product Images/TOG_AT.png',
    //   link: '/tubular-oil-level-gauge'
    // },
    // {
    //   id: 9,
    //   title: 'Threaded Pressure Relief Valve',
    //   description: 'Threaded pressure relief valves providing a compact solution with easy installation and secure connections for various transformer applications.',
    //   image: '/images/Product Images/PRV_PIP-32.png',
    //   link: '/threaded-pressure-relief-valve'
    // }
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
