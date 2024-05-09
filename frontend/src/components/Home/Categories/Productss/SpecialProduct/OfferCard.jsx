import React from 'react';
import Offers from './Offers'; 
import '../Products.css';
const OfferCard = () => {
// Sample data for products
const prod = [
    { 
    Id: 1, 
    textOffer: "",
    Offer: "25%",
    imagesrc: '/pics/productimg1.png', 
    TitleName: "Haldiram's Sev Bhujia", 
    Rate: '4.4(3,149)', 
    Price: '15$',
    NumProduct: 12,
    Rating: 4.4
    },
    { 
    Id: 2, 
    textOffer: "Buy 1 Get 4.00$ Off",
    Offer: "",
    imagesrc: '/pics/productimg2.png', 
    TitleName: "Haldiram's Sev Bhujia", 
    Rate: '4.7(1,149)', 
    Price: '32$',
    NumProduct: 34,
    Rating: 4.7
    },
    { 
    Id: 3, 
    textOffer: "",
    Offer: "22%",
    imagesrc: '/pics/productimg3.png', 
    TitleName: "Haldiram's Sev Bhujia", 
    Rate: '4.7(1,130)',
    OriginalPrice: '$28',
    OfferPrice: '$25', 
    NumProduct: 8,
    Rating: 4.7
    },
    { 
    Id: 4, 
    textOffer: "",
    Offer: "16%",
    imagesrc: '/pics/productimg4.png', 
    TitleName: "Haldiram's Sev Bhujia", 
    Rate: '4.5(212)', 
    OriginalPrice: '$38',
    OfferPrice: '$34', 
    NumProduct: 67,
    Rating: 4.5
    },
    { 
    Id: 4, 
    textOffer: "",
    Offer: "",
    imagesrc: '/pics/productimg1.png', 
    TitleName: "Haldiram's Sev Bhujia", 
    Rate: '4.3(68)', 
    OriginalPrice: '$29',
    OfferPrice: '$22', 
    NumProduct: 44,
    Rating: 4.3
    }
];
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
{prod.map(product => (
    <div key={product.Id} className="col mb-lg-0">
        <Offers
        textOffer={product.textOffer}
        Offer={product.Offer}
        imagesrc={product.imagesrc}
        OfferPrice={product.OfferPrice}
        OriginalPrice={product.OriginalPrice}
        Price={product.Price}
        TitleName={product.TitleName}
        Rate={product.Rate}
        Rating={product.Rating}
        NumProduct={product.NumProduct}
        />
    </div>
))}
    </div>
</div></section></div></div>
);
}
export default OfferCard;