import React from 'react';
import '../Products.css';
import Best from './Best';
const BestProduct = ( {exchangeRate}) => {
return (
    <div className="kk">
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-6">
                        <h3 className="mb-1">Bestsellers Products </h3>
                        <p className="mb-0">Find the bestseller products with discount.</p>
                    </div>
                </div>
                <Best exchangeRate={exchangeRate} />
            </div>
        </section>
    </div>
);
};
export default BestProduct;