import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Heart,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import SecondaryLogo from "../assets/Secondary-logo.png"
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const companies = [
    { name: 'Remigella Interlink', link: 'https://www.ohamadikefcc.org' },
    { name: 'Ohamadike Foundation', link: 'https://www.ohamadikefoundation.org' },

  ];

  const quickLinks = [
    { name: 'About Us', link: '#about' },
    { name: 'Our Services', link: '#services' },
    { name: 'All Companies', link: '#companies' },
    { name: 'Careers', link: '#' },
    { name: 'News & Updates', link: '#' },
    { name: 'Sustainability', link: '#' },
  ];

  const services = [
    { name: 'Construction', link: '#services' },
    { name: 'Oil & Gas', link: '#services' },
    { name: 'Real Estate', link: '#services' },
    { name: 'Transportation', link: '#services' },
    { name: 'Healthcare', link: '#services' },
    { name: 'Agriculture', link: '#services' },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column company-info">
              <div className="footer-logo">
               <img src={SecondaryLogo} alt="" />
              </div>
              <p className="company-description">
                Building Africa's future since 1993. A conglomerate of 22 companies 
                delivering excellence across multiple industries with a commitment to 
                innovation and customer satisfaction.
              </p>
              <div className="company-stats">
                <div className="stat">
                  <strong>22</strong>
                  <span>Companies</span>
                </div>
                <div className="stat">
                  <strong>265+</strong>
                  <span>Employees</span>
                </div>
                <div className="stat">
                  <strong>10+</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>

            {/* Companies */}
            <div className="footer-column">
              <h4>Our Companies</h4>
              <ul className="footer-links">
                {companies.map((company, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={company.link}>
                      <ExternalLink size={14} />
                      {company.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.link}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
              <h4 style={{ marginTop: '2rem' }}>Services</h4>
              <ul className="footer-links">
                {services.map((service, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={service.link}>{service.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4>Get In Touch</h4>
              <div className="contact-items">
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Head Office</strong>
                    <p>2, Olowu Street, Off Obafemi Awolowo way, Ikeja, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <div>
                    <a href="tel:+2348126415001">+234 81 264 15001</a>
                    <a href="tel:+2349130863353">+234 91 308 63353</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <a href="mailto:info@remigellagroup.com">info@remigellagroup.com</a>
                    <a href="mailto:chairman@remigellagroup.com">chairman@remigellagroup.com</a>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter">
                <h5>Subscribe to Newsletter</h5>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                  </motion.button>
                </form>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h5>Follow Us</h5>
                <div className="social-links">
                  <motion.a 
                    href="#" 
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Remigella International Group. All rights reserved.
              </p>
              <p className="tagline">
                Customers First • Excellence • Innovation
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="made-with">
              Made with <Heart size={14} className="heart-icon" /> in Nigeria
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;