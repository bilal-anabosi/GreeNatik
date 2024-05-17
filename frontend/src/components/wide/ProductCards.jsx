import React from 'react';

const ProductCards = ({ title, rating, regularPrice, salePrice, images, category, inStock }) => {
    return (
       <div className="card card-product">
          <div className="card-body">
            {/* badge */}
            <div className="text-center position-relative">
              {salePrice && (
                <div className="position-absolute top-0 start-0">
                  <span className="badge bg-danger">Sale</span>
                </div>
              )}
              <a href="shop-single.html">
                {/* img */}
                <img  src={images[0] ? `http://localhost:4000/${images[0]}` : 'path/to/default-image.jpg'} alt={`${title} Image`} className="mb-3 img-fluid" />
              </a>
              {/* action btn */}
              <div className="card-product-action">
                <a href="#wishlist" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="bi bi-heart" /></a>
              </div>
            </div>
            {/* heading */}
            <div className="text-small mb-1">
              <a href="#!" className="text-decoration-none text-muted"><small>{category}</small></a>
            </div>
            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">{title}</a></h2>

           <div>
  {/* rating */}
  <small className="text-warning">
    {Array.from({ length: 5 }, (_, i) => (
      <i className={"bi " + (i < Math.floor(rating) ? "bi-star-fill" : (i < rating ? "bi-star-half" : "bi-star"))} />
    ))}
  </small>
  {rating !== undefined && (
    <span className="text-muted small">{rating.toFixed(1)}({149})</span>
  )}
</div>

            <div>
            {inStock ? (
                <span className="text-uppercase small text-primary">In Stock</span>
              ) : (
                <span className="text-uppercase small text-danger">Out of Stock</span>
              )}
            </div>

            {/* price */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">${salePrice  ? salePrice : regularPrice}</span>
                {salePrice && <span className="text-decoration-line-through text-muted">${regularPrice}</span>}
              </div>
              {/* btn */}
              <div>
                <a href="#!" className="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductCards;
