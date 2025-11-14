import { Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop'; // Add this

// Pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop /> {/* Add this */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;