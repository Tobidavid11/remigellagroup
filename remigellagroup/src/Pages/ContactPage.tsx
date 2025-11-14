import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  User,
  Building2,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
  ArrowRight,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Pages/ContactPage.css';

// Import images
import contactHeroImg from '../assets/contact-hero.jpeg';
import officeImg1 from '../assets/Hero1.jpeg';
import officeImg2 from '../assets/Hero3.jpeg';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && sectionRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const offices = [
    {
      location: 'Nigeria (Head Office)',
      address: '2, Olowu Street, Off Obafemi Awolowo Way, Ikeja, Lagos',
      phone: ['+234 81 264 15001', '+234 91 308 63353'],
      email: ['info@remigellagroup.com', 'chairman@remigellagroup.com'],
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
      image: officeImg1,
      color: '#F3BA00'
    },
    {
      location: 'Dubai, UAE',
      address: 'Suite 308, Mohammed Al Qaizi Building, Deira, P.O Box 116123',
      phone: ['+971 XXX XXXXX'],
      email: ['dubai@remigellagroup.com'],
      hours: 'Sun - Thu: 9:00 AM - 5:00 PM',
      image: officeImg2,
      color: '#4ECDC4'
    },
    {
      location: 'Togo Office',
      address: '540 Rue des Hydrocarbures, Soted de L\'Afrique, Tokin BP. 20761 Lome',
      phone: ['+228 XXX XXXXX'],
      email: ['togo@remigellagroup.com'],
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      image: officeImg1,
      color: '#FF6B6B'
    },
    {
      location: 'Benin Office',
      address: 'Zone des Ambassades 06 BP 2621 Cotonou, République du Benin',
      phone: ['+229 XXX XXXXX'],
      email: ['benin@remigellagroup.com'],
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      image: officeImg2,
      color: '#95E1D3'
    }
  ];

  const services = [
    'Construction & Infrastructure',
    'Oil & Gas Solutions',
    'Real Estate Development',
    'Transportation & Logistics',
    'Pharmaceuticals',
    'Agriculture & Farming',
    'Healthcare Services',
    'Travel & Tourism',
    'Other'
  ];

  const contactMethods = [
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm',
      primary: '+234 81 264 15001',
      secondary: '+234 91 308 63353',
      color: '#F3BA00'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      description: 'We\'ll respond within 24 hours',
      primary: 'info@remigellagroup.com',
      secondary: 'chairman@remigellagroup.com',
      color: '#4ECDC4'
    },
    {
      icon: <Headphones size={28} />,
      title: 'Live Chat',
      description: 'Available during business hours',
      primary: 'Start a conversation',
      secondary: 'Quick support',
      color: '#FF6B6B'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="contactpage-container" ref={sectionRef}>
        {/* Hero Section */}
        <section className="contactpage-hero">
          <div className="contactpage-hero-bg">
            <img src={contactHeroImg} alt="Contact Us" className="contactpage-hero-image" />
            <div className="contactpage-hero-overlay"></div>
          </div>
          <div className="contactpage-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="contactpage-hero-title">
                Let's Start a Conversation
              </h1>
              <p className="contactpage-hero-description">
                Have a question or want to partner with us? We're here to help 
                and answer any questions you might have
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="contactpage-methods-section">
          <div className="contactpage-container-inner">
            <div className="contactpage-methods-grid">
              {contactMethods.map((method, idx) => (
                <motion.div 
                  key={idx}
                  className="contactpage-method-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="contactpage-method-icon" 
                    style={{ background: `${method.color}15`, color: method.color }}
                  >
                    {method.icon}
                  </div>
                  <h3>{method.title}</h3>
                  <p className="contactpage-method-desc">{method.description}</p>
                  <div className="contactpage-method-details">
                    <span className="contactpage-method-primary">{method.primary}</span>
                    <span className="contactpage-method-secondary">{method.secondary}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="contactpage-form-section">
          <div className="contactpage-container-inner">
            <div className="contactpage-form-grid">
              {/* Contact Form */}
              <motion.form 
                ref={formRef}
                className="contactpage-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="contactpage-form-header">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible</p>
                </div>
                
                <div className="contactpage-form-row">
                  <div className="contactpage-form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="contactpage-form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="contactpage-form-row">
                  <div className="contactpage-form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div className="contactpage-form-group">
                    <label htmlFor="company">
                      <Building2 size={18} />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="contactpage-form-group">
                  <label htmlFor="service">
                    <Globe size={18} />
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="contactpage-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={18} />
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="contactpage-submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      className="contactpage-success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>

              {/* Contact Info Sidebar */}
              <div className="contactpage-sidebar">
                <div className="contactpage-info-card">
                  <h3>Contact Information</h3>
                  <p>Fill out the form and our team will get back to you within 24 hours</p>
                  
                  <div className="contactpage-info-items">
                    <div className="contactpage-info-item">
                      <Phone size={20} />
                      <div>
                        <strong>Phone</strong>
                        <span>+234 81 264 15001</span>
                        <span>+234 91 308 63353</span>
                      </div>
                    </div>
                    <div className="contactpage-info-item">
                      <Mail size={20} />
                      <div>
                        <strong>Email</strong>
                        <span>info@remigellagroup.com</span>
                        <span>chairman@remigellagroup.com</span>
                      </div>
                    </div>
                    <div className="contactpage-info-item">
                      <MapPin size={20} />
                      <div>
                        <strong>Head Office</strong>
                        <span>2, Olowu Street, Off Obafemi</span>
                        <span>Awolowo Way, Ikeja, Lagos</span>
                      </div>
                    </div>
                    <div className="contactpage-info-item">
                      <Clock size={20} />
                      <div>
                        <strong>Business Hours</strong>
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM (WAT)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contactpage-social-card">
                  <h4>Follow Us</h4>
                  <div className="contactpage-social-links">
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook size={20} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="contactpage-offices-section">
          <div className="contactpage-container-inner">
            <div className="contactpage-section-header">
              <span className="contactpage-section-tag">Global Offices</span>
              <h2 className="contactpage-section-title">Visit Our Offices</h2>
              <p className="contactpage-section-subtitle">
                We have offices across multiple continents to serve you better
              </p>
            </div>
            
            <div className="contactpage-offices-grid">
              {offices.map((office, idx) => (
                <motion.div 
                  key={idx}
                  className="contactpage-office-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="contactpage-office-image">
                    <img src={office.image} alt={office.location} />
                    <div 
                      className="contactpage-office-badge" 
                      style={{ background: office.color }}
                    >
                      <MapPin size={16} />
                    </div>
                  </div>
                  <div className="contactpage-office-content">
                    <h3>{office.location}</h3>
                    <p className="contactpage-office-address">
                      <MapPin size={16} />
                      {office.address}
                    </p>
                    <div className="contactpage-office-details">
                      {office.phone.map((phone, i) => (
                        <a key={i} href={`tel:${phone}`} className="contactpage-office-link">
                          <Phone size={14} />
                          {phone}
                        </a>
                      ))}
                      {office.email.map((email, i) => (
                        <a key={i} href={`mailto:${email}`} className="contactpage-office-link">
                          <Mail size={14} />
                          {email}
                        </a>
                      ))}
                      <div className="contactpage-office-hours">
                        <Clock size={14} />
                        {office.hours}
                      </div>
                    </div>
                    <button className="contactpage-office-button">
                      Get Directions
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contactpage-faq-section">
          <div className="contactpage-container-inner">
            <div className="contactpage-section-header">
              <span className="contactpage-section-tag">FAQ</span>
              <h2 className="contactpage-section-title">Frequently Asked Questions</h2>
            </div>
            <div className="contactpage-faq-grid">
              <div className="contactpage-faq-item">
                <h4>What services do you offer?</h4>
                <p>
                  We offer a comprehensive range of services including Construction, Oil & Gas, 
                  Real Estate, Transportation, Pharmaceuticals, Agriculture, Healthcare, and more.
                </p>
              </div>
              <div className="contactpage-faq-item">
                <h4>How can I partner with Remigella?</h4>
                <p>
                  Send us your partnership proposal via email or use the contact form above. 
                  Our business development team will review and get back to you within 48 hours.
                </p>
              </div>
              <div className="contactpage-faq-item">
                <h4>Do you operate internationally?</h4>
                <p>
                  Yes! We operate in over 10 countries across Africa, Europe, Middle East, 
                  and North America with offices in Nigeria, UAE, UK, Italy, and more.
                </p>
              </div>
              <div className="contactpage-faq-item">
                <h4>How do I apply for a job?</h4>
                <p>
                  Visit our Careers page or send your CV to careers@remigellagroup.com. 
                  We're always looking for talented individuals to join our team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;