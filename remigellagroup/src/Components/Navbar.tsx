import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../Styles/Navbar.css';
import SecondaryLogo from '../assets/Secondary-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimerRef = useRef<number | null>(null);

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
    setActiveDropdown(null);
  }, [location]);

  const companies = [
    { name: 'Remigella Interlink', sector: 'Trading', link: 'https://www.ohamadikefcc.org', isExternal: true },
    { name: 'Ohamadike Foundation', sector: 'Non-Profit', link: 'https://www.ohamadikefoundation.org', isExternal: true },
  ];

  const services = [
    { name: 'Construction', link: '#services', isExternal: false },
    { name: 'Oil & Gas', link: '#services', isExternal: false },
    { name: 'Real Estate', link: '#services', isExternal: false },
    { name: 'Transportation', link: '#services', isExternal: false },
    { name: 'Pharmaceuticals', link: '#services', isExternal: false },
    { name: 'Agriculture', link: '#services', isExternal: false },
    { name: 'Healthcare', link: '#services', isExternal: false },
    { name: 'Food Services', link: '#services', isExternal: false }
  ];

  const handleMouseEnter = (dropdown: string) => {
    // Clear any existing timer
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a timer to close the dropdown after 300ms
    dropdownTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string, isExternal: boolean) => {
    e.preventDefault();
    
    // Close dropdown immediately
    setActiveDropdown(null);
    
    if (isExternal) {
      // Open external links in new tab
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal section navigation
      scrollToSection(link);
    }
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo-container">
            <img src={SecondaryLogo} alt="Remigella Group Logo" className="logo" />
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
            onMouseEnter={() => handleMouseEnter('companies')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              Companies <ChevronDown size={16} />
            </button>
            {activeDropdown === 'companies' && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter('companies')}
                onMouseLeave={handleMouseLeave}
              >
                {companies.map((company, idx) => (
                  <a 
                    key={idx} 
                    href={company.link}
                    onClick={(e) => handleLinkClick(e, company.link, company.isExternal)}
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
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'services' && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service, idx) => (
                  <a 
                    key={idx} 
                    href={service.link}
                    onClick={(e) => handleLinkClick(e, service.link, service.isExternal)}
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