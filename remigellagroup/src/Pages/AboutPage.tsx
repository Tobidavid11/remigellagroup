import { useEffect, useRef } from 'react';
import { Award, Users, Globe, TrendingUp, Target, Eye, Heart, Lightbulb, Shield, Handshake, Calendar, MapPin, Building2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import aboutHeroImg from '../assets/AboutPage-hero.jpeg';
import founderImg from '../assets/founder.jpg';
import timelineImg1 from '../assets/timeline1.jpeg';
import timelineImg2 from '../assets/timeline2.jpeg';
import timelineImg3 from '../assets/timeline3.jpeg';
import teamImg from '../assets/team-group.jpeg';
import '../Styles/Pages/AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('.aboutpage-stat-number');
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power1.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }

    if (sectionRef.current) {
      const sections = sectionRef.current.querySelectorAll('.aboutpage-animate-section');
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  const timeline = [
    {
      year: '1993',
      title: 'The Beginning',
      description: 'Founded as Remigella Interlink and Associates Nigeria Limited in Lagos',
      image: timelineImg1,
      icon: <Calendar size={24} />
    },
    {
      year: '2010',
      title: 'Expansion Era',
      description: 'Established Ohamadike International Foundation and expanded to multiple sectors',
      image: timelineImg2,
      icon: <Globe size={24} />
    },
    {
      year: '2018-2019',
      title: 'Global Growth',
      description: 'Launched 15+ companies across Oil & Gas, Construction, Healthcare, and more',
      image: timelineImg3,
      icon: <TrendingUp size={24} />
    },
    {
      year: '2025',
      title: 'Leading Innovation',
      description: '22 companies strong, operating across 10+ countries with 265+ employees',
      image: teamImg,
      icon: <Award size={24} />
    }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Leadership',
      description: 'Setting industry standards through innovation and excellence in every venture',
      color: '#F3BA00'
    },
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices',
      color: '#4ECDC4'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Embracing change and pioneering new solutions for tomorrow\'s challenges',
      color: '#FF6B6B'
    },
    {
      icon: <Handshake size={32} />,
      title: 'Partnership',
      description: 'Creating lasting relationships built on mutual respect and shared success',
      color: '#95E1D3'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="aboutpage-container" ref={sectionRef}>
        {/* Hero Section */}
        <section className="aboutpage-hero">
          <div className="aboutpage-hero-bg">
            <img src={aboutHeroImg || "/placeholder.svg"} alt="About Remigella" className="aboutpage-hero-image" />
            <div className="aboutpage-hero-overlay"></div>
          </div>
          <div className="aboutpage-hero-content">
            <motion.div
              className="aboutpage-hero-inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="aboutpage-hero-title">
                Building Africa's Future Since 1993
              </h1>
              <p className="aboutpage-hero-description">
                From a single trading company to a conglomerate of 22 businesses, our journey 
                is marked by innovation, excellence, and unwavering commitment to growth
              </p>
              <motion.div
                className="aboutpage-hero-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <a href="#aboutpage">
                <button className="aboutpage-hero-btn">Explore Our Story</button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="aboutpage-stats-section" ref={statsRef}>
          <div className="aboutpage-container-inner">
            <div className="aboutpage-stats-grid">
              <motion.div 
                className="aboutpage-stat-card"
                whileHover={{ y: -5 }}
              >
                <div className="aboutpage-stat-icon">
                  <Building2 size={32} />
                </div>
                <div className="aboutpage-stat-number" data-target="22">0</div>
                <div className="aboutpage-stat-label">Companies</div>
              </motion.div>
              <motion.div 
                className="aboutpage-stat-card"
                whileHover={{ y: -5 }}
              >
                <div className="aboutpage-stat-icon">
                  <Users size={32} />
                </div>
                <div className="aboutpage-stat-number" data-target="265">0</div>
                <div className="aboutpage-stat-label">Employees</div>
              </motion.div>
              <motion.div 
                className="aboutpage-stat-card"
                whileHover={{ y: -5 }}
              >
                <div className="aboutpage-stat-icon">
                  <Globe size={32} />
                </div>
                <div className="aboutpage-stat-number" data-target="10">0</div>
                <div className="aboutpage-stat-label">Countries</div>
              </motion.div>
              <motion.div 
                className="aboutpage-stat-card"
                whileHover={{ y: -5 }}
              >
                <div className="aboutpage-stat-icon">
                  <Calendar size={32} />
                </div>
                <div className="aboutpage-stat-number" data-target="30">0</div>
                <div className="aboutpage-stat-label">Years</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="aboutpage-story-section aboutpage-animate-section" id='aboutpage'>
          <div className="aboutpage-container-inner">
            <div className="aboutpage-story-content">
              <div className="aboutpage-story-text">
                <span className="aboutpage-section-tag">Our Story</span>
                <h2 className="aboutpage-section-title">Three Decades of Excellence</h2>
                <p className="aboutpage-story-paragraph">
                  In 1993, Dr. Remigius Ifeanyi Chimezie Igbonaju founded Remigella Interlink and 
                  Associates Nigeria Limited with a vision to create lasting value across Africa. 
                  What began as a modest trading enterprise in Lagos has blossomed into one of 
                  the continent's most diverse and successful business conglomerates.
                </p>
                <p className="aboutpage-story-paragraph">
                  Our growth story is one of strategic expansion, calculated risk-taking, and 
                  an unwavering commitment to excellence. From trading to construction, oil and 
                  gas to healthcare, real estate to education, we've built a portfolio that serves 
                  millions across West Africa and beyond.
                </p>
                <p className="aboutpage-story-paragraph">
                  Today, Remigella International Group stands as a testament to what visionary 
                  leadership, dedicated teamwork, and customer-first values can achieve. With 
                  22 companies operating across 10 countries, we continue to set new benchmarks 
                  for business excellence in Africa.
                </p>
              </div>
              <div className="aboutpage-story-image">
                <img src={founderImg || "/placeholder.svg"} alt="Dr. Remigius Igbonaju" />
                <div className="aboutpage-story-image-caption">
                  <h4>Dr. Remigius I.C. Igbonaju</h4>
                  <p>Founder & Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="aboutpage-mission-vision aboutpage-animate-section">
          <div className="aboutpage-container-inner">
            <div className="aboutpage-mv-grid">
              <motion.div 
                className="aboutpage-mv-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aboutpage-mv-icon">
                  <Target size={48} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To build long-term relationships with our customers and clients by providing 
                  exceptional services through innovation and advanced technology, while maintaining 
                  the highest standards of integrity and business ethics in all aspects of our operations.
                </p>
              </motion.div>
              <motion.div 
                className="aboutpage-mv-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aboutpage-mv-icon">
                  <Eye size={48} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be recognized as Africa's leading diversified conglomerate, providing quality 
                  services that exceed customer expectations while creating sustainable value for 
                  our stakeholders and contributing positively to the communities we serve.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="aboutpage-values-section aboutpage-animate-section">
          <div className="aboutpage-container-inner">
            <div className="aboutpage-section-header">
              <span className="aboutpage-section-tag">Our Values</span>
              <h2 className="aboutpage-section-title">The LION Spirit</h2>
              <p className="aboutpage-section-subtitle">
                Our values embody the strength, courage, and unity of the lion - 
                an animal that commands respect and protects its territory
              </p>
            </div>
            <div className="aboutpage-values-grid">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  className="aboutpage-value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div 
                    className="aboutpage-value-icon" 
                    style={{ background: `${value.color}15`, color: value.color }}
                  >
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="aboutpage-timeline-section aboutpage-animate-section">
          <div className="aboutpage-container-inner">
            <div className="aboutpage-section-header">
              <span className="aboutpage-section-tag">Our Journey</span>
              <h2 className="aboutpage-section-title">Milestones That Define Us</h2>
            </div>
            <div className="aboutpage-timeline">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`aboutpage-timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="aboutpage-timeline-content">
                    <div className="aboutpage-timeline-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.title} />
                    </div>
                    <div className="aboutpage-timeline-text">
                      <div className="aboutpage-timeline-year">
                        {item.icon}
                        <span>{item.year}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="aboutpage-global-section aboutpage-animate-section">
          <div className="aboutpage-container-inner">
            <div className="aboutpage-section-header">
              <span className="aboutpage-section-tag">Global Reach</span>
              <h2 className="aboutpage-section-title">Operating Across Continents</h2>
            </div>
            <div className="aboutpage-global-grid">
              <div className="aboutpage-global-card">
                <MapPin size={32} />
                <h4>Africa</h4>
                <p>Nigeria • Benin • Togo • Guinea</p>
              </div>
              <div className="aboutpage-global-card">
                <MapPin size={32} />
                <h4>Europe</h4>
                <p>UK • Italy • Belgium • Austria • Serbia • Croatia • Poland</p>
              </div>
              <div className="aboutpage-global-card">
                <MapPin size={32} />
                <h4>Middle East</h4>
                <p>UAE • Dubai</p>
              </div>
              <div className="aboutpage-global-card">
                <MapPin size={32} />
                <h4>North America</h4>
                <p>USA • Wyoming</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="aboutpage-cta-section">
          <div className="aboutpage-container-inner">
            <motion.div 
              className="aboutpage-cta-content"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heart size={48} className="aboutpage-cta-icon" />
              <h2>Join Our Journey</h2>
              <p>
                Be part of Africa's leading conglomerate. Explore opportunities to 
                partner, invest, or grow your career with us.
              </p>
              <div className="aboutpage-cta-buttons">
<Link to="/">
                <motion.button 
                  className="aboutpage-btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase size={20} />
                  Career Opportunities
                </motion.button>
</Link>
<Link to="/contact">
                <motion.button 
                  className="aboutpage-btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Handshake size={20} />
                  Partner With Us
                </motion.button>
</Link>

              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
