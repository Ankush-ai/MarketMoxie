import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route exact path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
