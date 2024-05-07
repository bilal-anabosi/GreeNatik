import React from 'react';

const CategoryName = () => {
    const categoryName = "Foodware";
    const productCount = 24;

    return (
        <>
       <div className="card mb-4 bg-light border-0">
  {/* card body */}
  <div className="card-body p-9">
    {/* title */}
    <h2 className="mb-0 fs-1">{categoryName}</h2>
  </div>
</div>

        <p className="product-count mb-0">
                <span className="text-dark">{productCount}</span> Products found
            </p>
        </>
    );
};

export default CategoryName;
