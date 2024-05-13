import React from 'react';

const ProductInformation = ({ onChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-12">
          <div className="card mb-6 card-lg">
            <div className="card-body p-6">
              <h4 className="mb-4 h5">Product Information</h4>
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    required=""
                    onChange={onChange}
                    name="title"
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Product Category</label>
                  <select
                    className="form-select"
                    onChange={onChange}
                    name="category"
                  >
                    <option selected="">Product Category</option>
                    <option value="Dairy, Bread &amp; Eggs">Dairy, Bread &amp; Eggs</option>
                    <option value="Snacks &amp; Munchies">Snacks &amp; Munchies</option>
                    <option value="Fruits &amp; Vegetables">Fruits &amp; Vegetables</option>
                  </select>
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Weight</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Weight"
                    required=""
                    onChange={onChange}
                    name="weight"
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Units</label>
                  <select
                    className="form-select"
                    onChange={onChange}
                    name="units"
                  >
                    <option selected="">Select Units</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="mb-3 col-lg-12 mt-5">
                  <h4 className="mb-3 h5">Product Images</h4>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={onChange}
                    name="images"
                    multiple
                  />
                  <small className="form-text text-muted">You can upload up to 4 images.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;