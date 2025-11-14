import { useEffect, useRef } from 'react';
import { Award, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/AboutSection.css';
import aboutImage from '../assets/About1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current && textRef.current) {
      
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const values = [
    { icon: <Award size={24} />, letter: 'L', word: 'eadership' },
    { icon: <Users size={24} />, letter: 'I', word: 'ntegrity' },
    { icon: <Globe size={24} />, letter: 'O', word: 'riginality' },
    { icon: <TrendingUp size={24} />, letter: 'N', word: 'obility' },
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">The Remigella Story</h2>
          <p className="section-subtitle">
            Three decades of excellence, innovation, and unwavering commitment to Africa's growth
          </p>
        </motion.div>

        <div className="about-content">
          <div className="about-image" ref={imageRef}>
            <div className="image-wrapper">
              <img src={aboutImage} alt="Remigella International Group" className="main-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="about-badge">
              <div className="badge-content">
                <strong>30+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="about-text" ref={textRef}>
            <h3>Leading Africa's Economic Transformation</h3>
            <p>
              Established in 1993 as Remigella Interlink and Associates Nigeria Limited, 
              we've grown into one of Africa's most progressive business conglomerates. 
              Our journey from a single trading company to a diverse group of 22 companies 
              reflects our commitment to excellence and innovation.
            </p>
            <p>
              With operations spanning Construction, Oil & Gas, Real Estate, Healthcare, 
              Agriculture, Transportation, and more, we serve millions across West Africa 
              and beyond. Our presence extends to Nigeria, UK, USA, Italy, Belgium, Austria, 
              Serbia, Croatia, Poland, and UAE.
            </p>

            <div className="core-values">
              <h4>
                <Award size={24} className="values-icon" />
                Our Core Values: LION
              </h4>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="value-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <div className="value-text">
                      <strong>{value.letter}</strong>{value.word}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="about-cta">
<Link to= "/about">
              <button className="btn-primary">
                Learn More About Us
                <ArrowRight size={20} />
              </button>
</Link>
             <Link to= "/contact">
              <button className="btn-outline">
                Get in Touch
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;