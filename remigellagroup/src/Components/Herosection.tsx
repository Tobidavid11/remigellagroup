import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../Styles/Herosection.css';

import heroImage1 from '../assets/Hero1.jpeg';
import heroImage2 from '../assets/Hero2.jpeg';
import heroImage3 from '../assets/Hero3.jpeg';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      image: heroImage1,
      title: "Building Africa's Future",
      subtitle: "22 Companies. One Vision. Endless Possibilities.",
      description: "Leading conglomerate across Oil & Gas, Construction, Real Estate, Healthcare, and more",
      cta: "Explore Our Companies"
    },
    {
      image: heroImage2,
      title: "Excellence in Every Sector",
      subtitle: "From Lagos to Europe, Making Impact Globally",
      description: "Operating across Nigeria, UK, USA, Italy, Belgium, Austria, Serbia, Croatia & Poland",
      cta: "Our Global Presence"
    },
    {
      image: heroImage3,
      title: "Customers First. Always.",
      subtitle: "Innovation, Integrity & Service Excellence",
      description: "Serving over 6.9 million customers with world-class products and services",
      cta: "Partner With Us"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // GSAP animations
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.querySelectorAll('.word'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll('.stat-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      {/* Carousel herosection */}
      <div className="hero-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-image-container"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="hero-image"
            />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="hero-nav-arrow left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="hero-nav-arrow right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Content */}
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot"></span>
          Est. 1993 • 265+ Employees • Multi-Continental
        </motion.div>

        <div className="hero-text-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-slide active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title" ref={titleRef}>
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className="word">
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
             <Link to= "/about">
                <button className="hero-btn primary">
                  {slides[currentSlide].cta}
                </button>
             </Link>

<Link to="/contact" >
                <button className="hero-btn secondary">
                  Get in touch
                </button>
</Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Statistics */}
        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number">22</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">265+</div>
            <div className="stat-label">Employees</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Years</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Herosection;