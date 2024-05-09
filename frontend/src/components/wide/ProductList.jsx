import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    // Manually define details for each product card
    const products = [
        { name: "Haldiram's Sev Bhujia", isOnSale: true, rating: 4.5, price: 15, salePrice: 20, imageUrl: './pics/productimg1.png', category: 'Foodware' },
        { name: "Lay's Potato Chips", isOnSale: false, rating: 4.0, price: 10, salePrice: 12, imageUrl: './pics/productimg2.png', category: 'Foodware' },
        { name: "Oreo Cookies", isOnSale: true, rating: 4.8, price: 8, salePrice: 10, imageUrl: './pics/productimg3.png', category: 'Foodware' },
        { name: "Alpenliebe Candy", isOnSale: false, rating: 4.2, price: 5, salePrice: 7, imageUrl: './pics/productimg4.png', category: 'Foodware' },
        { name: "Doritos Nachos", isOnSale: true, rating: 4.9, price: 12, salePrice: 15, imageUrl: './pics/productimg1.png', category: 'Foodware' },
        { name: "Cadbury Dairy Milk", isOnSale: false, rating: 4.6, price: 22, salePrice: 25, imageUrl: '../pics/productimg1.png', category: 'Foodware' },
        { name: "Sunfeast Biscuits", isOnSale: true, rating: 3.9, price: 6, salePrice: 8, imageUrl: './pics/productimg1.png', category: 'Foodware' },
        { name: "Britannia Cake", isOnSale: false, rating: 3.5, price: 15, salePrice: 18, imageUrl: './pics/productimg1.png', category: 'Foodware' }
    ];

    return (
        <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    isOnSale={product.isOnSale}
                    rating={product.rating}
                    price={product.price}
                    salePrice={product.salePrice}
                    imageUrl={product.imageUrl}
                    category={product.category}
                />
            ))}
        </div>
    );
};

export default ProductList;
