import React from 'react';
import axios from 'axios';

const ProductCards = ({ id, title, rating, regularPrice, salePrice, images, category, inStock }) => {
    
    const handleAddToWishlist = async () => {
        try {
            const response = await axios.post('http://localhost:4000/wishlist', { productId: id });
            console.log('Product added to wishlist:', response.data);
          
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };

    return (
        <div className="card card-product">
            <div className="card-body">
              
                <div className="text-center position-relative">
                    {salePrice && (
                        <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                        </div>
                    )}
                    <a href={`/shop-single/${id}`}>
                   
                        <img src={images && images.length > 0 ? `http://localhost:4000/${images[0]}` : 'path/to/default-image.jpg'} alt={`${title} Image`} className="mb-3 img-fluid" />
                    </a>
                 
                 
                </div>
           
                <div className="text-small mb-1">
                    <a href="#!" className="text-decoration-none text-muted"><small>{category}</small></a>
                </div>
                <h2 className="fs-6"><a href={`/shop-single/${id}`} className="text-inherit text-decoration-none">{title}</a></h2>

                <div>
             
                    <small className="text-warning">
                        {Array.from({ length: 5 }, (_, i) => (
                            <i className={"bi " + (i < Math.floor(rating) ? "bi-star-fill" : (i < rating ? "bi-star-half" : "bi-star"))} key={i} />
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

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <span className="text-dark">${salePrice ? salePrice : regularPrice}</span>
                        {salePrice && <span className="text-decoration-line-through text-muted">${regularPrice}</span>}
                    </div>
                 
                    <div>
                        <a href={`/shop-single/${id}`} className="btn btn-primary btn-sm">
                            View more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
