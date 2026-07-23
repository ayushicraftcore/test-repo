/*
===================================
IMPORT COMPONENTS & HOOKS
===================================
*/
import { useState, useEffect, useRef, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Only import the Master Landing Page page component
import Craftcorelanding from "./pages/Craftcorelanding";

/* ─────────────────────────────────────────────
   FALLBACK CROSS-PORT REDIRECT
   (Catches IT routes on 3000 and sends to 3001)
───────────────────────────────────────────── */
function CrossPortRedirect() {
  const location = useLocation();
  
  useEffect(() => {
    // Automatically forwards any unmatched paths (e.g. /home, /service) to Port 3001
    window.location.href = `http://localhost:3001${location.pathname}`;
  }, [location]);

  return null;
}

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
      "a, button, .card-hover, .primary-btn, .secondary-btn, [data-cursor-hover]"
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
      
      {/* ISOLATED ROUTER DECK */}
      <Routes>
        {/* Only match the base root path for the landing workspace */}
        <Route path="/" element={<Craftcorelanding />} />

        {/* WILDCARD FALLBACK: Automatically handles any accidental path matches and transfers execution to Port 3001 */}
        <Route path="*" element={<CrossPortRedirect />} />
      </Routes>

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