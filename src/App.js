
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
import Store from './pages/Store';
import AllBlogs from './pages/blog/AllBlogs';
import BlogCategory from './pages/blog/BlogCategory';
import SingleBlog from './pages/blog/SingleBlog';
import Posts from "./pages/postsPage/Posts.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SinglePost from './pages/SinglePost.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path='/checkout' element={<Checkout />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forget' element={<ForgetPage />} />
          <Route path='/verify' element={<VerifyPage />} />
          <Route path='/set-password' element={<SetPasswordPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/SignupFactory' element={<SignupFactory />} />
          <Route path='/AccessDenied' element={<AccessDenied />} />
          <Route path='/Error404' element={<Error404 />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Blog" element={<AllBlogs />} />
          <Route path="/blog-category" element={<BlogCategory />} />
          <Route path="/Single-blog" element={<SingleBlog />} />
          <Route path="/all-posts" element={<Posts />} />
          <Route path="/singlepost" element={<SinglePost />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
