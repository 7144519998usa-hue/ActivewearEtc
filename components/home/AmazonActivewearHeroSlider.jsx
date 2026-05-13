"use client";

import { useEffect, useState } from "react";
import { homepageActivewearSlides } from "../../data/homepageActivewearSlides";

const AUTOPLAY_INTERVAL_MS = 5000;

export default function AmazonActivewearHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = homepageActivewearSlides[activeIndex];

  const goToSlide = (index) => {
    const slideCount = homepageActivewearSlides.length;
    setActiveIndex((index + slideCount) % slideCount);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % homepageActivewearSlides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      goToSlide(activeIndex + 1);
    }
  };

  return (
    <section
      className="amazon-hero-slider"
      aria-label="Amazon activewear shopping highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="amazon-hero-track">
        {homepageActivewearSlides.map((slide, index) => (
          <a
            aria-hidden={index !== activeIndex}
            aria-label={`${slide.cta}: ${slide.title}`}
            className={`amazon-hero-slide${index === activeIndex ? " is-active" : ""}`}
            href={slide.affiliateUrl}
            key={slide.id}
            rel="sponsored nofollow noopener"
            tabIndex={index === activeIndex ? 0 : -1}
            target="_blank"
          >
            {slide.imageUrl ? (
              <img
                alt={slide.alt}
                className="amazon-hero-image"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                src={slide.imageUrl}
              />
            ) : (
              <div className="amazon-hero-image amazon-hero-image-fallback" role="img" aria-label={slide.alt}>
                <span>{slide.brand}</span>
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="amazon-hero-overlay" aria-live="polite">
        <span className="eyebrow">Amazon activewear picks</span>
        <h1>{activeSlide.title}</h1>
        <p>{activeSlide.subtitle}</p>
        <a className="primary-button" href={activeSlide.affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
          {activeSlide.cta}
        </a>
        <p className="amazon-hero-disclosure">As an Amazon Associate, we may earn from qualifying purchases.</p>
      </div>

      <button
        aria-label="Show previous activewear slide"
        className="amazon-slider-arrow amazon-slider-arrow-prev"
        onClick={() => goToSlide(activeIndex - 1)}
        type="button"
      >
        Prev
      </button>
      <button
        aria-label="Show next activewear slide"
        className="amazon-slider-arrow amazon-slider-arrow-next"
        onClick={() => goToSlide(activeIndex + 1)}
        type="button"
      >
        Next
      </button>

      <div className="amazon-slider-dots" aria-label="Choose activewear slide">
        {homepageActivewearSlides.map((slide, index) => (
          <button
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-pressed={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            key={slide.id}
            onClick={() => goToSlide(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
