import React from 'react';
import WishlistBreadcrumb from "../components/Home/Categories/Wishlist/WishlistBreadcrumb"
import WishlistPage from '../components/Home/Categories/Wishlist/WishlistTable';
const Wishlist = () => {
    return ( <>
     <div className="container10">
<WishlistBreadcrumb/>
<WishlistPage/>



     </div>
    </>   );
}

export default Wishlist;