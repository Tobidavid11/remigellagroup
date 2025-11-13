import { useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Clock,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.contact-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
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
            <Mail size={20} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="section-subtitle">
            Ready to work together? Reach out and let's create something amazing
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          <motion.div 
            className="contact-card phone-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <Phone size={32} />
              </div>
            </div>
            <h3>Call Us</h3>
            <p className="card-description">Available Mon-Fri, 8am to 6pm</p>
            <div className="contact-details">
              <a href="tel:+2348126415001" className="contact-link">
                <Phone size={18} />
                +234 81 264 15001
              </a>
              <a href="tel:+2349130863353" className="contact-link">
                <Phone size={18} />
                +234 91 308 63353
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-card email-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <Mail size={32} />
              </div>
            </div>
            <h3>Email Us</h3>
            <p className="card-description">We'll respond within 24 hours</p>
            <div className="contact-details">
              <a href="mailto:info@remigellagroup.com" className="contact-link">
                <Mail size={18} />
                info@remigellagroup.com
              </a>
              <a href="mailto:chairman@remigellagroup.com" className="contact-link">
                <Mail size={18} />
                chairman@remigellagroup.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-card location-card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <MapPin size={32} />
              </div>
            </div>
            <h3>Visit Us</h3>
            <p className="card-description">Head Office - Lagos, Nigeria</p>
            <div className="contact-details">
              <div className="location-info">
                <MapPin size={18} />
                <span>2, Olowu Street, Off Obafemi Awolowo Way, Ikeja, Lagos</span>
              </div>
              <div className="location-info">
                <Clock size={18} />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="location-info">
                <Globe size={18} />
                <span>10+ Countries Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Box */}
        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <Send size={48} className="cta-icon" />
            <h3>Ready to Get Started?</h3>
            <p>Contact us today and let's discuss how we can help grow your business</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us a Message
              <Send size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;