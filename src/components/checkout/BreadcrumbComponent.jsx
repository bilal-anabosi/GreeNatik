import React from 'react';

const BreadcrumbComponent = () => {
  return (
 
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Home</a></li>
              <li className="breadcrumb-item"><a href="#!">Shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
            </ol>
          </nav>
    
    
  );
};

export default BreadcrumbComponent;
