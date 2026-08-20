import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.css';

const DRAG_BUFFER = 25;
const VELOCITY_THRESHOLD = 450;
const GAP = 24;
const SPRING_OPTIONS = { type: 'spring', stiffness: 260, damping: 28 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition, visibleCount }) {
  const centerOffset = (visibleCount - 1) / 2;
  const centerTarget = -(index - centerOffset) * trackItemOffset;

  const range = [
    centerTarget - trackItemOffset,
    centerTarget,
    centerTarget + trackItemOffset
  ];

  // Middle card is crisp, scaled, and opaque; side cards blur and fade
  const scale = useTransform(x, range, [0.92, 1.02, 0.92], { clamp: false });
  const opacity = useTransform(x, range, [0.45, 1, 0.45], { clamp: false });
  const filter = useTransform(
    x,
    range,
    ['blur(0px)', 'blur(0px)', 'blur(0px)'],
    { clamp: false }
  );

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className="carousel-item"
      style={{
        width: `${itemWidth}px`,
        scale,
        opacity,
        filter
      }}
      transition={transition}
    >
      <div className="carousel-item-header">
        <span className="carousel-icon-container">{item.icon}</span>
      </div>
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = [],
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [visibleCount, setVisibleCount] = useState(3);
  const [position, setPosition] = useState(loop ? 1 : 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const x = useMotionValue(0);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const containerPadding = 24;
  const itemWidth = (containerWidth - containerPadding * 2 - GAP * (visibleCount - 1)) / visibleCount;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, ...items.slice(0, visibleCount + 1)];
  }, [items, loop, visibleCount]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setPosition(prev => (loop ? prev - 1 : Math.max(0, prev - 1)));
  }, [isAnimating, loop]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setPosition(prev => (loop ? prev + 1 : Math.min(items.length - 1, prev + 1)));
  }, [isAnimating, loop, items.length]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, handleNext]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastSlideIndex = items.length + 1;
    if (position >= lastSlideIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className="carousel-arrow carousel-arrow-left"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>

      <button
        type="button"
        className="carousel-arrow carousel-arrow-right"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      <div className="carousel-track-wrapper">
        <motion.div
          className="carousel-track"
          drag={isAnimating ? false : 'x'}
          dragConstraints={{ left: -10000, right: 10000 }}
          style={{
            gap: `${GAP}px`,
            x
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item?.id ?? index}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              visibleCount={visibleCount}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>
      </div>

      <div className="carousel-indicators-container">
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setPosition(loop ? index + 1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}