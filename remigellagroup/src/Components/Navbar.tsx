import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown} from 'lucide-react';
import '../Styles/Navbar.css';
import SecondaryLogo from "../assets/Secondary-logo.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies = [
    { name: 'Remigella Interlink', sector: 'Trading' },
    { name: 'Ohamadike Foundation', sector: 'Non-Profit' },
    { name: 'Villa Franca Travels', sector: 'Tourism' },
    { name: 'Bella Vita Properties', sector: 'Real Estate' },
    { name: 'Valpantena Oil & Gas', sector: 'Energy' },
    { name: 'Grand Afrique Foods', sector: 'Food Service' },
    { name: 'Dansantoria Construction', sector: 'Construction' },
    { name: 'View All Companies', sector: '' }
  ];

  const services = [
    'Construction',
    'Oil & Gas',
    'Real Estate',
    'Transportation',
    'Pharmaceuticals',
    'Agriculture',
    'Healthcare',
    'Food Services'
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <img src={SecondaryLogo} alt="Remigella Group Logo" className="logo" />
          </div>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          
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
                    href="#companies" 
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
                  <a key={idx} href="#services" className="dropdown-item">
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="nav-button">Get Started</a>
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