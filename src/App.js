
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignUpPage from './pages/account/Pages/SignUpPage.jsx'
import LoginPage from './pages/account/Pages/LoginPage.jsx'
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

import ShopSingle from './pages/shop-single.jsx'
import CreatePost from './pages/dashboard/post.jsx';

import SinglePost from './pages/SinglePost.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Wide from './pages/Wide';
import LeaderBoard from './pages/LeaderBoard';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PostsList from './pages/dashboard/post-list.jsx';


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
          <Route path='/AccessDenied' element={<AccessDenied />} />
          <Route path='/Error404' element={<Error404 />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Blog" element={<AllBlogs />} />
          <Route path="/blog-category" element={<BlogCategory />} />
          <Route path="/Single-blog" element={<SingleBlog />} />
          <Route path="/all-posts" element={<Posts />} />
          <Route path="/shop-single" element={<ShopSingle />} />
          <Route path="/dashboard/post" element={<CreatePost />} />
          <Route path="/dashboard/post/list" element={<PostsList />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wide" element={<Wide />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
