import React, { useState, useEffect } from 'react';
import '../styles/components/HeroSlider.css';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: './images/Startseite-Slider/Hermetic-Transformer-Protection-Relay-MCHD-.png',
      title: 'Transformer Protection Relay MCHD',
      description: 'Transformer protection device MCHD - the all-in-one device for distribution transformers! Measures Oil level, gas accumulation, pressure and oil temperature. C5-M coating (SOLIDLINE®) ✔ Reliable ✔ Durable ✔',
      link: '#protection-devices'
    },
    {
      id: 2,
      image: './images/Startseite-Slider/transformer-protection-devices.png',
      title: 'Buchholz Relay MBP & Gas Sampling Device MGSD',
      description: 'The Buchholz Relay MBP and Gas Sampling Device MGSD for best protection of your transformer! C5-M Coating (SOLIDLINE®) ✔ Compact ✔ Durable ✔ Reliable ✔',
      link: '#buchholz-relay'
    },
    {
      id: 3,
      image: './images/Startseite-Slider/Luftentfeuchter-DIN-42562.png',
      title: 'Dehydrating Breather C5-M Approved',
      description: 'Aluminum dehydrating breather for transformers - withstands the toughest conditions! aluminum housing ✔ C5-M coating (SOLIDLINE) ✔ Stainless steel parts ✔',
      link: '#dehydrating-breathers'
    },
    {
      id: 4,
      image: './images/Startseite-Slider/drosselklappe-din-42560-A-vorschweiflansch.png',
      title: 'Radiator Valves for Transformers',
      description: 'Radiator Valves in different designs. The Radiator valves enable a replacement of components without the necessity of removing any insulating liquid.',
      link: '#radiator-valves'
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
              className={`slide ${index === activeSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
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
