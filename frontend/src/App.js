import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignUpPage from './pages/account/Pages/SignUpPage.jsx';
import LoginPage from './pages/account/Pages/LoginPage.jsx';
import SetPasswordPage from './pages/account/Pages/SetPasswordPage.jsx';
import ForgetPage from './pages/account/Pages/ForgetPage.jsx';
import Error404 from './pages/account/Pages/Error404.jsx';
import Store from './pages/Store';
import AccessDenied from './pages/account/Pages/AccessDined';
import AllBlogs from './pages/blog/AllBlogs';
import BlogCategory from './pages/blog/BlogCategory';
import SingleBlog from './pages/blog/SingleBlog';
import Posts from "./pages/postsPage/Posts.jsx";
import Profile from './pages/account/Pages/profile/Profile.jsx';
import ShopSingle from './pages/shop-single.jsx';
import CreatePost from './pages/dashboard/post.jsx';
import SinglePost from './pages/SinglePost.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Wide from './pages/Wide';
import LeaderBoard from './pages/LeaderBoard';
import EditProductPage from './pages/editProduct/EditProductPage';
import PostsList from './pages/dashboard/post-list.jsx';
import Test from './pages/Test';
import ProductsPage from './pages/ProductsPage';
import CreateProductForm from './pages/CreateProductForm';
import { useState, useEffect } from 'react';
import RiseLoader from "react-spinners/RiseLoader";


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='load'>
      {loading ? (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100vh', width:'100%', textAlign:'center'}}>
  
        <RiseLoader


          color="rgb(54, 230, 56)"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forget" element={<ForgetPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/access-denied" element={<AccessDenied />} />
            <Route path="/error-404" element={<Error404 />} />
            <Route path="/store" element={<Store />} />
            <Route path="/blog" element={<AllBlogs />} />
            <Route path="/blog-category" element={<BlogCategory />} />
            <Route path="/single-blog" element={<SingleBlog />} />
            <Route path="/all-posts" element={<Posts />} />
            <Route path="/shop-single" element={<ShopSingle />} />
            <Route path="/dashboard/post" element={<CreatePost />} />
            <Route path="/dashboard/post/list" element={<PostsList />} />
            <Route path="/singlepost" element={<SinglePost />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/wide" element={<Wide />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/test" element={<Test />} />
            <Route path="/dashboard/products" element={<ProductsPage />} />
            <Route path="/dashboard/add-products" element={<CreateProductForm />} />
            <Route exact path="/dashboard/edit-product/:productId" element={<EditProductPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
