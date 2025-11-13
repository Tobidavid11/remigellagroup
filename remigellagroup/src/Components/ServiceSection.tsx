import { useEffect, useRef } from 'react';
import { 
  Building2, 
  Fuel, 
  Home, 
  Truck, 
  Pill, 
  Wheat,
  Hospital,
  Plane,
  Utensils,
  HardHat,
  Ship,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/ServiceSection.css';
import constructionImg from '../assets/ServiceSection1.jpeg';
import oilGasImg from '../assets/ServiceSection2.jpeg';
import realEstateImg from '../assets/ServiceSection3.jpeg';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  color: string;
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (sectionRef.current) {
      const featuredCards = sectionRef.current.querySelectorAll('.featured-service-card');
      
      gsap.fromTo(
        featuredCards,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.featured-services',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const services: Service[] = [
    {
      title: 'Construction & Infrastructure',
      icon: HardHat,
      description: 'World-class building and road construction with experienced architects and engineers',
      features: ['Commercial Buildings', 'Road Construction', 'Project Management', 'Quality Assurance'],
      color: '#F3BA00'
    },
    {
      title: 'Oil & Gas Solutions',
      icon: Fuel,
      description: 'Comprehensive petroleum marketing, exploration and distribution services',
      features: ['Exploration Services', 'Distribution Network', 'Petroleum Products', 'Global Trading'],
      color: '#FF6B6B'
    },
    {
      title: 'Real Estate Development',
      icon: Home,
      description: 'Premier property development and management across Nigeria and UK',
      features: ['Property Development', 'Investment Advisory', 'Property Management', 'International Sales'],
      color: '#4ECDC4'
    },
    {
      title: 'Transportation & Logistics',
      icon: Truck,
      description: 'Efficient road transport and logistics solutions across West Africa',
      features: ['Fleet Management', 'Cargo Services', 'Supply Chain', 'Regional Coverage'],
      color: '#95E1D3'
    },
    {
      title: 'Pharmaceuticals',
      icon: Pill,
      description: 'Quality pharmaceutical ingredients and healthcare products distribution',
      features: ['API Distribution', 'Quality Control', 'Regulatory Support', 'Global Sourcing'],
      color: '#A8E6CF'
    },
    {
      title: 'Agriculture & Farming',
      icon: Wheat,
      description: 'Large-scale cassava farming and agricultural production for local and export',
      features: ['Cassava Production', 'Fish Farming', 'Export Services', 'Food Processing'],
      color: '#FFD93D'
    },
    {
      title: 'Healthcare Services',
      icon: Hospital,
      description: 'State-of-the-art medical facilities with international healthcare standards',
      features: ['Modern Equipment', 'Specialist Care', 'Emergency Services', 'Patient-Centered'],
      color: '#6BCB77'
    },
    {
      title: 'Travel & Tourism',
      icon: Plane,
      description: 'Full-service travel agency offering global tourism and corporate solutions',
      features: ['International Tours', 'Corporate Travel', 'Visa Services', 'Travel Insurance'],
      color: '#4D96FF'
    },
    {
      title: 'Food Services',
      icon: Utensils,
      description: 'Comprehensive foodservice distribution and restaurant operations',
      features: ['Food Distribution', 'Restaurant Chains', 'Quality Products', 'Nationwide Network'],
      color: '#FF8C42'
    },
    {
      title: 'Maritime Services',
      icon: Ship,
      description: 'Global shipping and maritime transport solutions',
      features: ['Cargo Shipping', 'Port Services', 'International Trade', 'Logistics Support'],
      color: '#2E86AB'
    },
    {
      title: 'Security Solutions',
      icon: ShieldCheck,
      description: 'Professional security and protection services for businesses',
      features: ['Physical Security', 'Surveillance', 'Risk Assessment', 'Trained Personnel'],
      color: '#C1292E'
    },
    {
      title: 'General Trading',
      icon: Building2,
      description: 'Import and export of automobiles, equipment and consumer goods',
      features: ['Auto Import', 'Equipment Supply', 'Spare Parts', 'General Trading'],
      color: '#F3BA00'
    }
  ];

  const featuredServices = [
    {
      title: 'Construction Excellence',
      image: constructionImg,
      description: 'Building Africa\'s future with world-class infrastructure projects',
      stats: ['500+ Projects', '30 Years Experience', 'ISO Certified']
    },
    {
      title: 'Energy Solutions',
      image: oilGasImg,
      description: 'Powering growth through reliable oil & gas distribution',
      stats: ['Multi-National', '24/7 Operations', 'Certified Partners']
    },
    {
      title: 'Property Development',
      image: realEstateImg,
      description: 'Creating premium living and commercial spaces',
      stats: ['Nigeria & UK', 'Luxury Projects', 'Investment Ready']
    }
  ];

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="header-badge">
            <Sparkles size={20} />
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">Comprehensive Solutions Across Industries</h2>
          <p className="section-subtitle">
            From construction to healthcare, we deliver excellence in every sector we serve
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="featured-services">
          {featuredServices.map((service, idx) => (
            <motion.div 
              key={idx}
              className="featured-service-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="featured-image">
                <img src={service.image} alt={service.title} />
                <div className="featured-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="featured-btn">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className="featured-stats">
                {service.stats.map((stat, i) => (
                  <div key={i} className="stat-badge">
                    <CheckCircle2 size={16} />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Services Grid */}
        <div className="services-grid" ref={cardsRef}>
          {services.map((service, idx) => {
            const IconComponent = service.icon; // Get the component
            return (
              <motion.div 
                key={idx}
                className="service-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon" style={{ background: `${service.color}15`, color: service.color }}>
                  <IconComponent size={32} /> {/* Render it here */}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="service-link">
                  Explore Service
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Need a Custom Solution?</h3>
            <p>Our team of experts is ready to discuss your unique requirements</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Schedule Consultation
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline-white">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;