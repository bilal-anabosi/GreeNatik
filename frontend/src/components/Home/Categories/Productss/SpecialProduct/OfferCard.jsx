import React from 'react';
import { useState, useEffect } from 'react';
import '../Products.css';
import ProductCards from '../../../../wide/ProductCards';
import axios from 'axios';

const OfferCard = () => {

    const [LatestProductsWithSale, setLatestProductsWithSale] = useState([]);

    useEffect(() => {
        async function fetchLatestProductsWithSale() {
        try {
            const response = await axios.get('http://localhost:4000/store/sale-products');
            setLatestProductsWithSale(response.data.latestProductsWithSale);
        } 
        catch (error) {
            console.error('Error fetching latest products sale:', error);
        }
    }
        fetchLatestProductsWithSale();
}, []);

return (
<div>
    <div className="kk">
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-md-flex justify-content-between align-items-center mb-8">
                            <div>
                                <h3 className="mb-1">Special Offers of the View All Week!</h3>
                                <p>Get exclusive ongoing offers, deals, and discount codes of shopping</p>
                            </div>
                        <div>
                        <a href="# " className="custom-view-all-link">
                        View All
                        <i className="feather-icon icon-chevron-right" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-0 border border-2 border-danger rounded-3 custom-border">
    {LatestProductsWithSale.map((product, index)=> {
                                            const firstSize = product.sizes && product.sizes[0] ? product.sizes[0] : {};
                                            return (
                                                <ProductCards
                                                    key={index}
                                                    title={product.title}
                                                    rating={product.rating}
                                                    regularPrice={firstSize.regularPrice}
                                                    salePrice={firstSize.salePrice}
                                                    images={product.images}
                                                    category={product.category}
                                                    inStock={product.inStock}
                                                />
                                            );
                                        })}
    </div>
</div></section></div></div>
);
}
export default OfferCard;