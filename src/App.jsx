/*
===================================
IMPORT COMPONENTS & HOOKS
===================================
*/
import { useState, useEffect, useRef, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Global Layout Components
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import Solution from "./pages/Solution";
import About from "./pages/About";
import Blog from "./pages/Blog"; 
import Career from "./pages/Career"; 
import Contact from "./pages/Contact"; 
import Booking from "./pages/Booking"; 

/* ─────────────────────────────────────────────
   SCROLL TO TOP  (Ensures page starts at top)
───────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ─────────────────────────────────────────────
   TOAST HOOK  — call addToast("msg", "emoji")
───────────────────────────────────────────── */
function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, icon = "✨") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, icon }]);
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, removing: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 400);
    }, 3200);
  }, []);

  return { toasts, addToast };
}

/* ─────────────────────────────────────────────
   PARTICLES LAYER  (Floats up from bottom)
───────────────────────────────────────────── */
function ParticleField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const COLORS = [
      "rgba(124,58,237,0.55)",
      "rgba(37,99,235,0.45)",
      "rgba(6,182,212,0.45)",
      "rgba(192,132,252,0.4)",
    ];

    const particles = Array.from({ length: 22 }, (_, i) => {
      const el = document.createElement("div");
      el.className = "particle";
      const size = Math.random() * 5 + 3; 
      const x    = Math.random() * 100; 
      const dur  = Math.random() * 14 + 10; 
      const del  = Math.random() * -16; 

      el.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${x}%;
        bottom:-${size}px;
        background:${COLORS[i % COLORS.length]};
        filter:blur(${size * 0.35}px);
        animation-duration:${dur}s;
        animation-delay:${del}s;
      `;
      container.appendChild(el);
      return el;
    });

    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);
  const location = useLocation(); 

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.14;
      ring.current.y += (pos.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterHoverable = () => document.body.classList.add("cursor-hover");
    const onLeaveHoverable = () => document.body.classList.remove("cursor-hover");

    const hoverables = document.querySelectorAll(
      "a, button, .card-hover, .primary-btn, .secondary-btn, [data-cursor-hover], .service-item, .technology-card"
    );
    
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnterHoverable);
      el.addEventListener("mouseleave", onLeaveHoverable);
    });

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterHoverable);
        el.removeEventListener("mouseleave", onLeaveHoverable);
      });
      document.body.classList.remove("cursor-hover");
    };
  }, [location.pathname]); 

  return (
    <>
      <div ref={dotRef}  className="custom-cursor cursor-dot"  />
      <div ref={ringRef} className="custom-cursor cursor-ring" />
    </>
  );
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL (Safe Virtual-DOM tracking)
───────────────────────────────────────────── */
function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal, .reveal-children");
      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target); 
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );

      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);
}

/*
===================================
MAIN APP COMPONENT
===================================
*/
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { toasts, addToast } = useToast();
  
  // 1. ADDED: Instantiated router position tracker instance hook
  const location = useLocation();

  useEffect(() => {
    window.addToast = addToast;
  }, [addToast]);

  useEffect(() => {
    const handleScroll = () => {
      const total  = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (total / height) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useScrollReveal();

  // Helper calculation parameters to determine if CTA should stay active
  const isBookingPage = location.pathname === "/book-call" || location.pathname.toLowerCase() === "/booking";

  return (
    <>
      {/* GLOBAL ROUTE LIFECYCLE CONTROLLER */}
      <ScrollToTop />

      {/* RE-INITIALIZED GRAPHICS UTILITIES */}
      <CustomCursor />
      <ParticleField />

      {/* SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* GLOBAL GLASS BACKGROUND */}
      <div className="global-background">
        <div className="blur blur-purple" />
        <div className="blur blur-blue"   />
        <div className="glow-orb orb-1"  />
        <div className="glow-orb orb-2"  />
        <div className="grid-overlay">
          <div className="scanline" />
        </div>
        <div className="noise-overlay" />
      </div>

      {/* STICKY HEADER */}
      <Navbar />
      
      {/* SWITCHABLE PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Solution" element={<Solution/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="Booking" element={<Booking/>} />
        <Route path="/book-call" element={<Booking />} />
      </Routes>

      {/* GLOBAL FOOTER CLOSURES WITH CONDITIONAL CTA EXCLUSION */}
      {!isBookingPage && <CTA />}
      <Footer />
    
      {/* TOAST SYSTEM CONTAINER */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast${t.removing ? " removing" : ""}`}>
            <div className="toast-icon">{t.icon}</div>
            {t.message}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;