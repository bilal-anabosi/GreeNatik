import React from 'react';
import ProductCard from './ProductCard'; 
import '../Products.css';
const NewProduct = () => {

  // Sample data for products
    const products = [
    { 
        id: 1, 
        imageUrl: '/pics/productimg1.png', 
        productName: "Haldiram's Sev Bhujia", 
        productRating: '4.5(149)', 
        productPrice:'24$',
        sale: false ,
        rating:'4.5'
    },
    { 
        id: 2, 
        imageUrl: '/pics/productimg2.png', 
        productName: "Haldiram's Sev Bhujia", 
        productRating: '4(149)', 
        currentPrice: '$20', 
        originalPrice: '$24', 
        sale: true,
        rating:'4'
    },
    { id: 3, 
        rating:'4.5',
        imageUrl: '/pics/productimg3.png', productName: "Haldiram's Sev Bhujia", productRating: '4.5(149)', productPrice: '$18' },
    { id: 4, 
        rating:'4',
        imageUrl: '/pics/productimg4.png', productName: "Haldiram's Sev Bhujia", productRating: '4(149)', productPrice: '$10' },
    { id: 5, 
        rating:'4.5',
        
        imageUrl: '/pics/productimg1.png', productName: "Haldiram's Sev Bhujia", productRating: '4.5(149)', productPrice: '$18' },
];

return (
    <div className="kk">
        <br/>
        <br/>
        <br/>
            <section className="mb-lg-14 mb-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
                            {/* heading */}
                                <div className="mb-5 mb-xl-0">
                                    <h3 className="mb-0">New Products</h3>
                                        <p className="mb-0">New products with updated stocks</p>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        {/* row */}
    <div className="row">
        <div className="col-12">
            {/* tab */}
            <div className="col">
                <div className="container">
                    <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
    {products.map(product => (
        <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            productName={product.productName}
            productRating={product.productRating}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice} 
            sale={product.sale}
            rating={product.rating} 
            productPrice={product.productPrice}
        />
    ))}
    </div>
</div>
</div></div></div></div></section></div>
);
}
export default NewProduct;