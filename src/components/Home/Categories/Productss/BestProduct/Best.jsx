import React from 'react';
import ProductCard from '../NewProduct/ProductCard'; 
import '../Products.css';
import Slider from 'react-slick'; // Import Slick Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Best = () => {

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
            id: 1, 
            imageUrl: '/pics/productimg1.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg2.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg3.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg4.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg1.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg2.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },{ 
            id: 1, 
            imageUrl: '/pics/productimg3.png', 
            productName: "Haldiram's Sev Bhujia", 
            productRating: '4.5(149)', 
            productPrice:'24$',
            sale: false ,
            rating:'4.5'
        },
    ];

    // Slick Slider settings
    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <span className="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" /></svg></span>,
        nextArrow: <span className="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" /></svg></span>,
    };

    return (
        <div className="kk">
            <section className="mb-lg-14 mb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="col">
                                <div className="container">
                                    {/* Wrap the product cards with the Slick Slider */}
                                    <Slider {...sliderSettings}>
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
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Best;