import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  ariaLabel = 'Carousel',
  showArrows = true,
  showDots = true
}) => {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const slideWidth = track.clientWidth;
    track.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const slideWidth = track.clientWidth || 1;
      const nextIndex = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(Math.max(0, Math.min(slides.length - 1, nextIndex)));
    });
  };

  useEffect(() => {
    const handleResize = () => {
      scrollToIndex(activeIndex);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex]);

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(slides.length - 1, activeIndex + 1));

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < slides.length - 1;

  return (
    <div className={`carousel ${className ?? ''}`.trim()} aria-label={ariaLabel}>
      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      {(showArrows || showDots) && slides.length > 1 && (
        <div className="carousel-controls">
          {showArrows ? (
            <div className="carousel-arrows">
              <button
                className="carousel-arrow"
                onClick={handlePrev}
                disabled={!canGoPrev}
                aria-label="Previous slide"
              >
                ‹
              </button>
            </div>
          ) : (
            <span />
          )}

          {showDots ? (
            <div className="carousel-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={index === activeIndex ? 'carousel-dot active' : 'carousel-dot'}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          ) : (
            <span />
          )}

          {showArrows ? (
            <div className="carousel-arrows">
              <button
                className="carousel-arrow"
                onClick={handleNext}
                disabled={!canGoNext}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
