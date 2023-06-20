import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} />
    </Routes>
 </>
  );
}

export default App;
