
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Test';
import Cart from './pages/Cart';
import SignUpPage from './pages/Pages/SignUpPage.jsx'
import LoginPage from './pages/Pages/LoginPage.jsx'
import SignupFactory from './pages/Pages/SignupFactory.jsx'
import VerifyPage from './pages/Pages/VerifyPage.jsx'
import SetPasswordPage from './pages/Pages/SetPasswordPage.jsx'
import ForgetPage from './pages/Pages/ForgetPage.jsx'
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
        <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forget' element={<ForgetPage />} />
      <Route path='/verify' element={<VerifyPage />} />
      <Route path='/set-password' element={<SetPasswordPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/SignupFactory' element={<SignupFactory />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
