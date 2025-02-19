import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ProductDetail from './Components/Product/ProductDetail';
import Product from './pages/Product';
import CustomProduct from './pages/CustomProduct';
import NotFoundPage from './pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';

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
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-All Route for Undefined Pages */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
