import "./About.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { 
  FaLaptopCode, 
  FaCogs, 
  FaChartLine 
} from "react-icons/fa";

// Import your custom platform section sheets
import Process from "../components/Process"; 
import Model from "../components/Models"; 
import Industries from "../components/Industries";
import Stats from "../components/Stats";

// Cards data for the pinned scroll section
const whyChooseCards = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "FOUNDER-LED EXPERTISE",
    description: "You get founder-led IT solutions backed by real manufacturing domain expertise - not a generic dev shop that's never set foot on a shop floor.",
    baseRotation: -3
  },
  {
    id: 2,
    icon: <FaCogs />,
    title: "CUSTOM SOFTWARE & AI",
    description: "We build custom software, implement AI automation and modernize infrastructure to solve the operational bottlenecks slowing down your shop floor and supply chain.",
    baseRotation: 0.5
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "END-TO-END PARTNERSHIP",
    description: "From seamless integration with existing systems to tech recruitment and growth services, we don't just deliver and disappear - we partner with you for the long haul.",
    baseRotation: 4
  }
];

// Video carousel data
const carouselVideos = [
  {
    id: 1,
    title: "Real-Time Analytics",
    description: "Real-time dashboards that turn your raw data into insights you can actually act on, the moment you need them…",
    videoUrl: "https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785134919/SAAS_ynbbzq.mp4",
    poster: "/images/video-poster-1.jpg"
  },
  {
    id: 2,
    title: "Code & Innovation",
    description: "Your applications run on clean, scalable code architecture built to enterprise standards - maintainable today and still maintainable three years from now.",
    videoUrl: "https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785135048/Coding_tguouv.mp4",
    poster: "/images/video-poster-2.jpg"
  },
  {
    id: 3,
    title: "SaaS Solutions",
    description: "Innovative SaaS products designed to streamline workflows, boost productivity and scale seamlessly as your business grows.",
    videoUrl: "https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785135133/solution_j5q5qi.mp4",
    poster: "/images/video-poster-3.jpg"
  }
];

function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMobileCard, setActiveMobileCard] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const pinnedSectionRef = useRef(null);
  const videoRef = useRef(null);
  const autoPlayInterval = useRef(null);
  const videoTimeout = useRef(null);

  // Video carousel controls
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselVideos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselVideos.length) % carouselVideos.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Video carousel autoplay
  useEffect(() => {
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    if (videoTimeout.current) clearTimeout(videoTimeout.current);

    if (!isVideoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 8000);
    }

    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
      if (videoTimeout.current) clearTimeout(videoTimeout.current);
    };
  }, [isVideoPlaying, nextSlide]);

  // Video play / pause listeners
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handlePlay = () => setIsVideoPlaying(true);
      const handlePause = () => {
        setIsVideoPlaying(false);
        if (!videoTimeout.current) {
          videoTimeout.current = setTimeout(() => {
            nextSlide();
            setIsVideoPlaying(false);
            videoTimeout.current = null;
          }, 2000);
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handlePause);

      video.play().catch(() => {
        setIsVideoPlaying(false);
      });

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handlePause);
      };
    }
  }, [currentSlide, nextSlide]);

  // Pinned scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!pinnedSectionRef.current) return;
      const rect = pinnedSectionRef.current.getBoundingClientRect();
      const totalScrollableDist = rect.height - window.innerHeight;

      if (totalScrollableDist <= 0) return;

      const progress = -rect.top / totalScrollableDist;
      const clamped = Math.max(0, Math.min(1, progress));
      setScrollProgress(clamped);

      // Set active mobile card index based on scroll
      const activeIdx = Math.min(whyChooseCards.length - 1, Math.floor(clamped * whyChooseCards.length));
      setActiveMobileCard(activeIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        
        {/* 1. HERO SECTION WITH VIDEO CAROUSEL */}
        <header className="about-hero">
          <span className="section-tag">WHO WE ARE</span>
          <h1 className="about-hero-title">
            Your Digital Foundation, <br />
            <span className="gradient-text">Engineered to Perform at Global Scale.</span>
          </h1>
          
          {/* VIDEO CAROUSEL WRAPPER */}
          <div className="video-carousel-wrapper">
            
            {/* Left Nav Arrow */}
            <button 
              type="button"
              className="carousel-arrow carousel-arrow-prev" 
              onClick={prevSlide} 
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Main Video Viewport */}
            <div className="video-carousel-container">
              <div 
                className="video-carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselVideos.map((video, index) => (
                  <div key={video.id} className="video-carousel-slide">
                    <div className="video-frame">
                      <video
                        ref={currentSlide === index ? videoRef : null}
                        className="carousel-video"
                        poster={video.poster}
                        muted
                        playsInline
                        autoPlay={currentSlide === index}
                        loop={false}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                    <div className="video-content">
                      <div className="video-header">
                        <h3 className="video-title">{video.title}</h3>
                      </div>
                      <p className="video-description">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button 
              type="button"
              className="carousel-arrow carousel-arrow-next" 
              onClick={nextSlide} 
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Centered Dots Indicator */}
            <div className="carousel-dots-container">
              <div className="carousel-dots">
                {carouselVideos.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* 2. COMPANY DESCRIPTION */}
          <p className="section-description about-hero-desc">
            If you run a manufacturing, textile or supply chain business, we build the custom software, 
            intelligent automation and enterprise systems that keep it moving. We don’t just build software 
            for your sector - we understand it.
          </p>
        </header>

        {/* 3. VISION & MISSION */}
        <section className="about-statement-section">
          <div className="statement-split-grid">
            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">01</span>
                <span className="statement-label">THE FUTURE ARCHITECTURE</span>
              </div>
              <h2 className="statement-card-title">Our Vision</h2>
              <p className="card-text statement-card-body">
                We want to be the technology partner you trust for the long run - the one helping your business grow through smart software development, AI-powered solutions and digital transformation that actually scales.
              </p>
            </div>

            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">02</span>
                <span className="statement-label">THE EXECUTION ENGINE</span>
              </div>
              <h2 className="statement-card-title">Our Mission</h2>
              <p className="card-text statement-card-body">
                We build reliable, high-performance software, SaaS platforms, mobile apps and AI solutions so you can innovate faster, run leaner and grow sustainably.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* PINNED SCROLL: RISING CARDS */}
      <section ref={pinnedSectionRef} className="pinned-scroll-container">
        <div className="sticky-stage">
          
          <div className="bg-title-wrap">
            <span className="section-tag bg-title-tag">WHY CHOOSE US</span>
            <h2 className="bg-big-title">
              WHY<br />CHOOSE<br />CRAFTCORE
            </h2>
          </div>

          <div className="cards-track">
            {whyChooseCards.map((card, idx) => {
              const start = idx * 0.28;
              const end = start + 0.4;
              const cardProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));

              const translateY = (1 - cardProgress) * 120;
              const opacity = cardProgress < 0.1 ? cardProgress * 10 : 1;
              const rotate = card.baseRotation * cardProgress;

              // Stack offset specifically for mobile
              const mobileOffset = idx - activeMobileCard;

              return (
                <div 
                  key={card.id} 
                  className={`playing-card card-index-${idx}`}
                  style={{
                    '--desktop-translate-y': `${translateY}vh`,
                    '--desktop-rotate': `${rotate}deg`,
                    '--desktop-opacity': opacity,
                    '--mobile-offset': mobileOffset
                  }}
                  onClick={() => setActiveMobileCard(idx)}
                >
                  <div className="playing-card-icon">{card.icon}</div>
                  <h3 className="playing-card-title">{card.title}</h3>
                  <p className="playing-card-desc">{card.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
        <Stats />
        <Process />
        <Industries />
        <Model />
    </div>
  );
}

export default About;