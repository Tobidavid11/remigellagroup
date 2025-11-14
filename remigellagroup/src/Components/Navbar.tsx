import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../Styles/Navbar.css';
import SecondaryLogo from '../assets/Secondary-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const companies = [
    { name: 'Remigella Interlink', sector: 'Trading', link: '#companies' },
    { name: 'Ohamadike Foundation', sector: 'Non-Profit', link: '#companies' },
    { name: 'Villa Franca Travels', sector: 'Tourism', link: '#companies' },
    { name: 'Bella Vita Properties', sector: 'Real Estate', link: '#companies' },
    { name: 'Valpantena Oil & Gas', sector: 'Energy', link: '#companies' },
    { name: 'Grand Afrique Foods', sector: 'Food Service', link: '#companies' },
    { name: 'Dansantoria Construction', sector: 'Construction', link: '#companies' },
    { name: 'View All Companies', sector: '', link: '#companies' }
  ];

  const services = [
    { name: 'Construction', link: '#services' },
    { name: 'Oil & Gas', link: '#services' },
    { name: 'Real Estate', link: '#services' },
    { name: 'Transportation', link: '#services' },
    { name: 'Pharmaceuticals', link: '#services' },
    { name: 'Agriculture', link: '#services' },
    { name: 'Healthcare', link: '#services' },
    { name: 'Food Services', link: '#services' }
  ];

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo-container">
            <img src={SecondaryLogo || "/placeholder.svg"} alt="Remigella Group Logo" className="logo" />
          </Link>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'isActive' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'isActive' : ''}`}>
            About Us
          </Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('companies')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link dropdown-trigger">
              Companies <ChevronDown size={16} />
            </button>
            {activeDropdown === 'companies' && (
              <div className="dropdown-menu">
                {companies.map((company, idx) => (
                  <a 
                    key={idx} 
                    href={company.link}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(company.link);
                    }}
                    className="dropdown-item"
                  >
                    <span>{company.name}</span>
                    {company.sector && <span className="sector">{company.sector}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link dropdown-trigger">
              Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                {services.map((service, idx) => (
                  <a 
                    key={idx} 
                    href={service.link}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.link);
                    }}
                    className="dropdown-item"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'isActive' : ''}`}>
            Contact
          </Link>
          <Link to="/contact" className="nav-button">Get Started</Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};


export default Navbar;