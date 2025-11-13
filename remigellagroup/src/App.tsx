import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import AboutSection from './Components/AboutSection';
import CompaniesSection from './Components/CompaniesSection';
import ServicesSection from './Components/ServiceSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Herosection />
      <AboutSection />
      <CompaniesSection />
      <ServicesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;