import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './AnimatedList.css';

const AnimatedItem = ({ item, index, isExpanded, onToggle, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, triggerOnce: false });

  // Handle both string items and object items gracefully
  const title = typeof item === 'string' ? item : item.title;
  const description = typeof item === 'string' ? '' : item.description;

  return (
    <motion.div
      ref={ref}
      data-index={index}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.25, delay }}
      className="animated-accordion-wrapper"
    >
      <div 
        className={`item accordion-header ${isExpanded ? 'selected' : ''}`}
        onClick={() => onToggle(index)}
      >
        <div className="accordion-title-row">
          <p className="item-text">{title}</p>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="chevron-icon-wrap"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>

        {/* Accordion Content Smooth Expansion */}
        <AnimatePresence initial={false}>
          {isExpanded && description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="accordion-content-overflow"
            >
              <div className="accordion-description">
                <p>{description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AnimatedList = ({
  items = [
    { title: 'IT Infrastructure', description: 'Enterprise cloud architecture, high-availability server clusters and proactive network security monitoring.' },
    { title: 'Executive Recruitment', description: 'Specialized talent sourcing connecting senior engineers, technology leads and executive leadership.' },
    { title: 'Growth Accelerator', description: 'Strategic market scaling, operational efficiency frameworks and performance digital expansion.' },
    { title: '3D Printing & Prototyping', description: 'Industrial-grade additive manufacturing, rapid CAD-to-part fabrication and high-tolerance components.' }
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const listRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleToggle = useCallback((index) => {
    setExpandedIndex(prev => {
      const nextIndex = prev === index ? -1 : index;
      if (onItemSelect && nextIndex !== -1) {
        onItemSelect(items[nextIndex], nextIndex);
      }
      return nextIndex;
    });
  }, [items, onItemSelect]);

  const handleScroll = useCallback(e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = e => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setExpandedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setExpandedIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, enableArrowNavigation]);

  // Scroll active item into view during keyboard navigation
  useEffect(() => {
    if (!keyboardNav || expandedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${expandedIndex}"]`);
    if (selectedItem) {
      selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setKeyboardNav(false);
  }, [expandedIndex, keyboardNav]);

  return (
    <div className={`scroll-list-container ${className}`}>
      <div 
        ref={listRef} 
        className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`} 
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            item={item}
            index={index}
            delay={0.05}
            isExpanded={expandedIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {showGradients && (
        <>
          <div className="top-gradient" style={{ opacity: topGradientOpacity }} />
          <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }} />
        </>
      )}
    </div>
  );
};

export default AnimatedList;