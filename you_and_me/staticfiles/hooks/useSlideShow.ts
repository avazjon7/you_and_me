import { useEffect, useState, useRef, useCallback } from "react";

const useSlideShow = (totalSlides: number, intervalTime: number = 5000) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalIdRef = useRef<number | null>(null);

  const resetInterval = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = window.setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, intervalTime);
  }, [intervalTime, totalSlides]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [resetInterval]);

  return {
    currentSlide,
    handleDotClick,
    handleNext,
    handlePrev,
  };
};

export default useSlideShow;
