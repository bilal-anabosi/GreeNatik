import React from 'react';
import '../Products.css';
const Offers = ({textOffer,Offer,imagesrc,OfferPrice,Price,TitleName,OriginalPrice,sale,NumProduct,Rate,Rating}) => {

// Function to render the star ratings
const renderStarRating = () => {
    const fullStar = Math.floor(Rating);
    const hasHalfSta = Rating % 1 !== 0;

    const star = [];
    for (let i = 0; i < fullStar; i++) {
        star.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    if (hasHalfSta) {
        star.push(<i key={star.length} className="bi bi-star-half"></i>);
}

return (
    <div>
        <small className="text-warning">
            {star}
        </small>
        <span className="text-muted small">{Rate}</span>
    </div>
);
};
const renderOriginalPric = () => {
    if (!sale) {
        return <span className="text-decoration-line-through text-muted">{OriginalPrice}</span>;
    }
    return null;
};

return (
    <div className="g">
        <div className="col mb-lg-0">
            <div className="card card-product-v2 h-100">
                <div className="card-body position-relative text-center">
                    <div className="text-center position-relative" >
                        <div className="position-absolute top-0 text-danger">
                            <small>{textOffer}</small>
                        </div>
                            <div className="position-absolute top-0">
                                <span className="badge bg-success">{Offer}</span>
                            </div>
                                {/* img */}
                                <a href="#!">
                                <img src={imagesrc} alt="..." className="mb-3 img-fluid" />
                                </a>
                                {/* action btn */}
                                    <div className="product-action-btn">
                                        <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View" />
                                        </a>
                                            <a href="../pages/shop-wishlist.html" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
                                                <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right" /></a>
                                    </div>
                                </div>
                            <div className="mb-3">
                                    <span className="text-danger">{OfferPrice}</span>
                                        <span className="text-dark">{Price}</span>
                                            <span className="text-muted text-decoration-line-through ms-1">{OriginalPrice && renderOriginalPric()}</span>
                            </div>
                        {/* title */}
                    <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">{TitleName}</a></h2>
                
                {renderStarRating()}
            
            <div className="mt-3"><span className="text-uppercase small text-primary">In Stock</span></div>
        <div className="mt-4">
    <div className="my-3">
        <small>
        the available products :
        <span className="text-dark fw-bold">{NumProduct}</span>
        </small>
    </div>
        </div>
            {/* btn */}
            <div className="product-fade-block">
                <div className="d-grid mt-4">
                    <a href="# " className="btn btn-primary rounded-pill">Add to Cart</a>
                </div>
            </div>
        </div>
            <div className="product-content-fade border-info" style={{marginBottom: '-60px'}} />
    </div>
</div>
</div>
);
};
export default Offers;