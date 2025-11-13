import { useEffect, useRef } from 'react';
import { 
  Building2, 
  Heart, 
  Plane, 
  Home, 
  Fuel, 
  UtensilsCrossed, 
  Hammer, 
  Truck,
  ShoppingBag,
  Pill,
  Wheat,
  Hospital,
  GraduationCap,
  Ship,
  ShieldCheck,
  Droplet,
  FileText,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/CompainesSection.css';

gsap.registerPlugin(ScrollTrigger);

interface Company {
  name: string;
  icon: LucideIcon;
  sector: string;
  year: string;
  description: string;
  location?: string;
}

const CompaniesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.company-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const companies: Company[] = [
    { 
      name: 'Remigella Interlink', 
      icon: Building2,
      sector: 'Trading & Commerce', 
      year: '1993',
      description: 'Pioneer company specializing in imports, exports and general trading',
      location: 'Lagos, Nigeria'
    },
    { 
      name: 'Ohamadike Foundation', 
      icon: Heart, 
      sector: 'Non-Profit', 
      year: '2010',
      description: 'Humanitarian organization supporting education, healthcare and community development',
      location: 'Nigeria'
    },
    { 
      name: 'Villa Franca Travels', 
      icon: Plane, 
      sector: 'Tourism & Travel', 
      year: '2017',
      description: 'Full-service travel agency offering global tourism and corporate travel solutions',
      location: 'Lagos, Nigeria'
    },
    { 
      name: 'Bella Vita Properties', 
      icon: Home, 
      sector: 'Real Estate', 
      year: '2018',
      description: 'Premier real estate development and property management services',
      location: 'Nigeria & UK'
    },
    { 
      name: 'Valpantena Oil & Gas', 
      icon: Fuel, 
      sector: 'Energy', 
      year: '2018',
      description: 'Oil and gas exploration, marketing and petroleum products distribution',
      location: 'Multi-National'
    },
    { 
      name: 'Grand Afrique Foods', 
      icon: UtensilsCrossed, 
      sector: 'Food Service', 
      year: '2019',
      description: 'Comprehensive foodservice distribution and hospitality solutions',
      location: 'Nigeria'
    },
    { 
      name: 'Dansantoria Construction', 
      icon: Hammer, 
      sector: 'Construction', 
      year: '2018',
      description: 'Building and road construction with experienced architects and engineers',
      location: 'Nigeria'
    },
    { 
      name: 'Bella Strada Transport', 
      icon: Truck, 
      sector: 'Logistics', 
      year: '2018',
      description: 'Road transport and logistics services across West Africa',
      location: 'Nigeria'
    },
    { 
      name: 'Texas Global Kitchens', 
      icon: ShoppingBag, 
      sector: 'Quick Service Restaurants', 
      year: '2019',
      description: 'Restaurant chain serving quality meals to millions daily',
      location: 'Nigeria'
    },
    { 
      name: 'Propensity Pharma', 
      icon: Pill, 
      sector: 'Pharmaceuticals', 
      year: '2019',
      description: 'Quality pharmaceutical ingredients and products distribution',
      location: 'USA & Nigeria'
    },
    { 
      name: 'Primavera Farms', 
      icon: Wheat, 
      sector: 'Agriculture', 
      year: '2019',
      description: 'Large-scale cassava farming and agricultural production',
      location: 'Ogun State'
    },
    { 
      name: 'Verona Hospital', 
      icon: Hospital, 
      sector: 'Healthcare', 
      year: '2019',
      description: 'State-of-the-art medical facility with international standards',
      location: 'Nigeria'
    },
    { 
      name: 'Prima Grado Schools', 
      icon: GraduationCap, 
      sector: 'Education', 
      year: '2019',
      description: 'International school providing world-class education',
      location: 'Nigeria'
    },
    { 
      name: 'Verona Foreign Exchange', 
      icon: FileText, 
      sector: 'Financial Services', 
      year: '2018',
      description: 'Foreign exchange and money transfer services',
      location: 'USA & Nigeria'
    },
    { 
      name: 'Akuma Shipping', 
      icon: Ship, 
      sector: 'Maritime', 
      year: '2020',
      description: 'Global shipping and maritime transport solutions',
      location: 'UK'
    },
    { 
      name: 'Sicurezza Security', 
      icon: ShieldCheck, 
      sector: 'Security Services', 
      year: '2019',
      description: 'Professional security and protection services',
      location: 'Nigeria'
    },
    { 
      name: 'Rengo Foods', 
      icon: Droplet, 
      sector: 'Manufacturing', 
      year: '2021',
      description: 'Premium table water production and distribution',
      location: 'Nigeria'
    },
    { 
      name: 'Ohamadike FC', 
      icon: Building2, 
      sector: 'Sports', 
      year: '2017',
      description: 'Professional football club developing African talent',
      location: 'Nigeria'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="companies-section" id="companies" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">22 Companies. Infinite Impact.</h2>
          <p className="section-subtitle">
            Diverse businesses united by excellence and innovation across multiple continents
          </p>
        </motion.div>

        <motion.div 
          className="companies-grid"
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company, idx) => {
            const IconComponent = company.icon; 
            return (
              <motion.div 
                key={idx} 
                className="company-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="company-icon-wrapper">
                  <div className="company-icon">
                    <IconComponent size={40} />
                  </div>
                </div>
                <h3 className="company-name">{company.name}</h3>
                <p className="company-sector">{company.sector}</p>
                <p className="company-section-description">{company.description}</p>
                
                <div className="company-meta">
                  <span className="company-year">Est. {company.year}</span>
                  {company.location && (
                    <span className="company-location">
                      <MapPin size={14} />
                      {company.location}
                    </span>
                  )}
                </div>
                
                <button className="company-link">
                  Learn More 
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;