import "./About.css";
import { useEffect, useRef, useState } from "react";

// Import your custom platform section sheets
import Process from "../components/Process"; 
import Model from "../components/Models"; 
import Industries from "../components/Industries";
import Stats from "../components/Stats";

const whyChooseText = "We're a founder-led team that actually understands manufacturing - not just software. We build custom platforms, implement AI automation and modernize your entire technology stack with solutions designed for the way your business actually runs. From shop floor operations to supply chain management, we solve real manufacturing challenges. Our end-to-end approach means seamless integration with your existing systems, while our recruitment and growth services help you build and scale your technology teams. We don't just deliver projects - we become your long-term technology partner, invested in your success.";

// Video carousel data
const carouselVideos = [
  {
    id: 1,
    title: "Real-Time Analytics",
    description: "Powerful real-time dashboards and analytics that turn raw data into insights you can actually use - helping you make smarter decisions, faster.",
    videoUrl: "https://res.cloudinary.com/dpxl6jy4t/video/upload/v1785134919/SAAS_ynbbzq.mp4",
    poster: "/images/video-poster-1.jpg"
  },
  {
    id: 2,
    title: "Code & Innovation",
    description: "Clean, scalable code architecture that powers enterprise-grade applications - built to last, not just to launch.",
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const autoPlayInterval = useRef(null);
  const videoTimeout = useRef(null);
  
  const words = whyChooseText.split(" ");

  // Video carousel controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselVideos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselVideos.length) % carouselVideos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
    if (videoTimeout.current) {
      clearTimeout(videoTimeout.current);
    }

    if (!isVideoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 8000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
      if (videoTimeout.current) {
        clearTimeout(videoTimeout.current);
      }
    };
  }, [isVideoPlaying, currentSlide]);

  // Handle video play state
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handlePlay = () => {
        setIsVideoPlaying(true);
        if (autoPlayInterval.current) {
          clearInterval(autoPlayInterval.current);
        }
      };

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

      const handleEnded = () => {
        setIsVideoPlaying(false);
        if (!videoTimeout.current) {
          videoTimeout.current = setTimeout(() => {
            nextSlide();
            videoTimeout.current = null;
          }, 2000);
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);

      video.play().catch(() => {
        setIsVideoPlaying(false);
      });

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSlide]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
      if (videoTimeout.current) {
        clearTimeout(videoTimeout.current);
      }
    };
  }, []);

  // Scroll progress for text reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (window.innerWidth <= 768) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const triggerStart = windowHeight * 0.85; 
      const triggerEnd = windowHeight * 0.25;   

      const totalActiveRange = triggerStart - triggerEnd;
      const currentElementPos = triggerStart - rect.top;

      let progress = currentElementPos / (totalActiveRange + rect.height * 0.4);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
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
        
        {/* HERO SECTION WITH VIDEO CAROUSEL */}
        <header className="about-hero">
          <span className="section-tag">WHO WE ARE</span>
          <h1 className="about-hero-title">
            Technology built for the way <br />
            <span className="gradient-text">your business actually works.</span>
          </h1>
          
          {/* VIDEO CAROUSEL */}
          <div className="video-carousel-wrapper">
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

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button 
                className="carousel-arrow carousel-arrow-prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="carousel-dots">
                {carouselVideos.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                className="carousel-arrow carousel-arrow-next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <p className="section-description about-hero-desc">
            We're a full-stack technology company delivering custom software, intelligent automation, 
            and enterprise systems to manufacturing, textile and supply chain businesses. We don't 
            just build software - we understand your industry, your challenges and your goals.
          </p>
        </header>

        {/* VISION & MISSION */}
        <section className="about-statement-section">
          <div className="statement-split-grid">
            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">01</span>
                <span className="statement-label">OUR NORTH STAR</span>
              </div>
              <h2 className="statement-card-title">Our Vision</h2>
              <p className="card-text statement-card-body">
                To become the trusted technology partner for businesses worldwide - helping them grow through innovative software, AI-powered solutions and digital transformation that actually delivers results.
              </p>
            </div>

            <div className="statement-premium-card card-hover">
              <div className="statement-meta">
                <span className="statement-index">02</span>
                <span className="statement-label">OUR EVERYDAY</span>
              </div>
              <h2 className="statement-card-title">Our Mission</h2>
              <p className="card-text statement-card-body">
                To build reliable, high-performance software, SaaS platforms, mobile applications and AI solutions that help businesses innovate faster, improve efficiency and achieve sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* TEXT REVEAL */}
        <section ref={sectionRef} className="about-why-choose-section">
          <span className="section-tag">WHY CHOOSE US</span>
          <div className="cred-text-viewport">
            <p className="cred-paragraph-container">
              {words.map((word, idx) => {
                const wordWeight = 1 / words.length;
                const wordStartThreshold = idx * wordWeight;
                
                let wordOpacity = (scrollProgress - wordStartThreshold) / wordWeight;
                wordOpacity = Math.max(0, Math.min(1, wordOpacity));

                return (
                  <span 
                    key={idx} 
                    className="cred-scroll-word"
                    style={{
                      color: `rgba(17, 17, 24, ${0.18 + wordOpacity * 0.82})`,
                      transform: `translateY(${5 - (wordOpacity * 5)}px)`
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          </div>
        </section>

      </div>

      {/* OTHER COMPONENTS */}
      <Stats />
      <Process />
      <Industries />
      <Model />
    </div>
  );
}

export default About;