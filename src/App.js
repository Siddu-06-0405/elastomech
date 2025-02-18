import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ProductDetail from './Components/Product/ProductDetail'
import Product from './pages/Product'
import CustomProduct from './pages/CustomProduct';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products/:productUrl" element={<ProductDetail />} />
      <Route path="/products" element={<Product />} />
      <Route path="/custom-product" element={<CustomProduct />} />

      <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
