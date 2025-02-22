import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ProductDetail from './Components/Product/ProductDetail';
import Product from './pages/Product';
import CustomProduct from './pages/CustomProduct';
import NotFoundPage from './pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';
import FAQDB from './pages/FAQDB';
import FAQDF from './pages/FAQDF';
import FAQWC from './pages/FAQWC';
import FAQSB from './pages/FAQSB';
import FAQHR from './pages/FAQHR';
import FAQCP from './pages/FAQCP';
import FAQTP from './pages/FAQTP';
import FAQRS from './pages/FAQRS';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productUrl" element={<ProductDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path="/custom-product" element={<CustomProduct />} />
          <Route path="/faq/dock-fenders" element={<FAQDF />} />
          <Route path="/faq/dock-bumpers" element={<FAQDB />} />
          <Route path="/faq/wheel-chockers" element={<FAQWC />} />
          <Route path="/faq/speed-breakers" element={<FAQSB />} />
          <Route path="/faq/hose-ramps" element={<FAQHR />} />
          <Route path="/faq/cable-protectors" element={<FAQCP />} />
          <Route path="/faq/tipper-pads" element={<FAQTP />} />
          <Route path="/faq/rubber-stoppers" element={<FAQRS />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-All Route for Undefined Pages */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
