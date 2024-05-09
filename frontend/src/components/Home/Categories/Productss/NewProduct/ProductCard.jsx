import React from 'react';

const ProductCard = ({ imageUrl, productName, productRating, currentPrice, originalPrice, isOnSale ,sale, rating,productPrice}) => {

  // Function to render the sale badge
  const renderSaleBadge = () => {
    if (sale) {
      return <span className="badge bg-danger">Sale</span>;
    }
    return null;
  };

// Function to render the star ratings
const renderStarRatings = () => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="bi bi-star-fill"></i>);
  }
  if (hasHalfStar) {
    stars.push(<i key={stars.length} className="bi bi-star-half"></i>);
  }

  return (
    <div>
      <small className="text-warning">
        {stars}
      </small>
      <span className="text-muted small">{productRating}</span>
    </div>
  );
};

const renderOriginalPrice = () => {
  if (!isOnSale) {
    return <span className="text-decoration-line-through text-muted">{originalPrice}</span>;
  }
  return null;
};

  return (
    <div className="col">
      <div className="card card-product-v2 h-100">
        <div className="card-body position-relative">
          <div className="text-center position-relative">
            <div className="position-absolute top-0 start-0">
              <span className="badge bg-danger">{renderSaleBadge()}</span>
            </div>
            <a href="#!"><img src={imageUrl} alt="Product" className="mb-3 img-fluid" /></a>
            <div className="product-action-btn">
              <a href="#!" className="btn-action mb-1" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="bi bi-eye"></i></a>
              <a href="../pages/shop-wishlist.html" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart"></i></a>
              <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare"><i className="bi bi-arrow-left-right"></i></a>
            </div>
          </div>
          <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">{productName}</a></h2>
          {renderStarRatings()}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-danger">{currentPrice}</span>
              <div><span className="text-dark">{productPrice}</span></div>
              <span className="text-decoration-line-through text-muted"> {originalPrice && renderOriginalPrice()}</span>
            </div>
            <div><span className="text-uppercase small text-primary">In Stock</span></div>
          </div>
          <div className="product-fade-block">
            <div className="d-grid mt-4">
              <button className="btn btn-primary rounded-pill">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-content-fade border-info" style={{ marginBottom: '-60px' }}></div>
      </div>
    </div>
  );
}

export default ProductCard;
