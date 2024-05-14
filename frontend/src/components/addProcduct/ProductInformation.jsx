import React, {useState} from 'react';
const ProductInformation = ({ onChange }) => {

    const [sizes, setSizes] = useState([{ size: '', quantity: '', unit: '' }]);
    const [images, setImages] = useState([]);
  
    const handleSizeChange = (index, event) => {
      const { name, value } = event.target;
      const newSizes = [...sizes];
      newSizes[index][name] = value;
      setSizes(newSizes);
      onChange({ target: { name: 'sizes', value: newSizes } }); // Propagate the change event to the parent component
    };
  
    const addSize = () => {
      if (sizes.length < 3) {
        setSizes([...sizes, { size: '', quantity: '', unit: '' }]);
      }
    };
    const handleImageChange = (event) => {
      const fileList = event.target.files;
      const imagesArray = [];
      for (let i = 0; i < Math.min(fileList.length, 4); i++) {
        imagesArray.push(URL.createObjectURL(fileList[i]));
      }
      setImages(imagesArray);
      onChange({ target: { name: 'images', value: fileList } }); // Propagate the change event to the parent component
    };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
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
                    <option defaultValue="none">Product Category</option>
                    <option value="FoodWare">FoodWare</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Pets">Pets</option>
                    <option value="Shopping bags">Shopping bags</option>
                    <option value="Office">Office</option>
                    <option value="Skin care">Skin care</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
                <div className="mb-3 col-lg-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="add your Description here"
                    rows="3"
                    onChange={onChange}
                    name="longDescription"
                  ></textarea>
                </div>
                <div className="mb-3 col-lg-12">
                  <h4 className="mb-3 h5">Sizes and Quantity</h4>
                  {sizes.map((size, index) => (
                    <div key={index} className="row">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label">Size</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Size"
                          required=""
                          name="size"
                          value={size.size}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label">Unit</label>
                        <select
                          className="form-select"
                          name="unit"
                          value={size.unit}
                          onChange={(e) => handleSizeChange(index, e)}
                        >
                          <option defaultValue="none">Select Unit</option>
                          <option value="clothing">clothing</option>
                          <option value="kg">Kg</option>
                          <option value="g">g</option>
                          <option value="mL">mL</option>
                          <option value="L">L</option>
                          <option value="number">number</option>
                          
                        </select>
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                          required=""
                          name="quantity"
                          value={size.quantity}
                          onChange={(e) => handleSizeChange(index, e)}
                        />
                      </div>
                    </div>
                  ))}
                  {sizes.length < 3 && (
                    <button className="btn btn-secondary" onClick={addSize}>
                      Add Size
                    </button>
                  )}
                </div>
                <div className="mb-3 col-lg-12 mt-5">
                  <h4 className="mb-3 h5">Product Images</h4>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange}
                    name="images"
                    multiple
                  />
                  <div className="row mt-3">
                    {images.map((image, index) => (
                      <div key={index} className="col-lg-3">
                        <img src={image} alt={`Product Image ${index + 1}`} className="img-fluid" />
                      </div>
                    ))}
                  </div>
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
