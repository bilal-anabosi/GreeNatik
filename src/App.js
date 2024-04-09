
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Test';
import Foodware from './pages/Foodware';
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
        <Route path="/Foodware" element={<Foodware />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
