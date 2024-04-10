import './App.css';
import Navbar from './components/Navbar';
import Store from './pages/Store';
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
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
