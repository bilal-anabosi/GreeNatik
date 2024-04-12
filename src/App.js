
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
      </>
  );
}

export default App;
