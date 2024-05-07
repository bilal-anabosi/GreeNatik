import React from 'react';
import './Products.css';

const Shopping = () => {
    return (
        <div className="ba">
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="mb-4 bg-light d-lg-flex justify-content-between align-items-center rounded p-4">
                            <div className="p-lg-5 p-0">
                                <h2 className="mb-2 fw-bold">One Stop Grocery Shop</h2>
                                    <p className="mb-3 lead">Shopping for your furry friend? Find food,<br /> treats, and more in one easy spot.</p>
                                    <a href="# " className="btn btn-dark">Get Discount on Share</a>
                            </div>
                        <div className="p-lg-4 d-lg-block d-none">
                            <img src="/pics/images/store.png" alt="..." className="img-fluid" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Shopping;
