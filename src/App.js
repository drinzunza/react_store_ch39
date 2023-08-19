import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Admin from './pages/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalState from './store/globalState';

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

/**
 * Create the Cart page
 * register a route on app.js for /cart
 * update the navbar, the button should be a link to /cart
 */
