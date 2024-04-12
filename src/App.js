import './App.css';
import Navbar from './components/Navbar';
import Store from './pages/Store';
import Cart from './pages/Cart';


import Checkout from './pages/Checkout';

import SignUpPage from './pages/account/Pages/SignUpPage.jsx'
import LoginPage from './pages/account/Pages/LoginPage.jsx'
import SignupFactory from './pages/account/Pages/SignupFactory.jsx'
import VerifyPage from './pages/account/Pages/VerifyPage.jsx'
import SetPasswordPage from './pages/account/Pages/SetPasswordPage.jsx'
import ForgetPage from './pages/account/Pages/ForgetPage.jsx'
import AccessDenied from './pages/account/Pages/AccessDined';
import Error404 from './pages/account/Pages/Error404.jsx';


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
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forget' element={<ForgetPage />} />
      <Route path='/verify' element={<VerifyPage />} />
      <Route path='/set-password' element={<SetPasswordPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/SignupFactory' element={<SignupFactory />} />
      <Route path='/AccessDenied' element={<AccessDenied />} />
      <Route path='/Error404' element={<Error404 />} />

      
        </Routes>
      </Router>
      </>
  );
}

export default App;
