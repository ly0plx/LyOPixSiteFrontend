// Carousel.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/Carousel.css";

export default function Carousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Uncomment to enable auto-play
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide" style={slide.style}>
              {slide.content}
            </div>
          ))}
        </div>
        <button
          className="carousel-btn prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
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
