import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/Carousel.css";

export default function Carousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayOn, setIsAutoplayOn] = useState(true);

  const innerRef = useRef(null);
  const trackRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    if (!innerRef.current || !trackRef.current) return;

    const slideWidth = innerRef.current.offsetWidth;
    const slideCount = slidesRef.current.length;

    // Set each slide to match carousel-inner width
    slidesRef.current.forEach((slide) => {
      if (slide) {
        slide.style.maxWidth = `${slideWidth}px`;
        slide.style.minWidth = `${slideWidth}px`;
      }
    });

    // Set track width = slideWidth * number of slides
    trackRef.current.style.maxWidth = `${slideWidth * slideCount}px`;
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play with toggle
  useEffect(() => {
    if (!isAutoplayOn) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next, isAutoplayOn]);

  return (
    <div className="carousel">
      <div className="carousel-inner" ref={innerRef}>
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${
              currentIndex * (innerRef.current?.offsetWidth || 0)
            }px)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="carousel-slide"
              ref={(el) => (slidesRef.current[i] = el)}
              style={slide.style}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-btn prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="carousel-btn autoplay"
          onClick={() => setIsAutoplayOn(!isAutoplayOn)}
          aria-label={isAutoplayOn ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoplayOn ? "⏸" : "▶"}
        </button>
        <button
          className="carousel-btn next"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}