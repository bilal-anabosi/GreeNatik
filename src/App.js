
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Test';
import Cart from './pages/Cart';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Slide from './components/Home/Slides/Slide.jsx';
import Feature from './components/Home/Feature/Feature.jsx';
import Cards from './components/Home/Categories/Cards/Cards.jsx';


function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

<Slide/>

<Feature/>

<Cards/>


      </>
  );
}

export default App;
