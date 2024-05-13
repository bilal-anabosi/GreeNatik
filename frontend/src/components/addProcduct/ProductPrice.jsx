import React from 'react';

const ProductPrice = ({ onChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-12">
          <div className="card mb-6 card-lg">
            <div className="card-body p-6">
              <h4 className="mb-4 h5">Product Price</h4>
              <div className="mb-3">
                <label className="form-label">Regular Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$0.00"
                  onChange={onChange}
                  name="regularPrice"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Sale Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$0.00"
                  onChange={onChange}
                  name="salePrice"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;