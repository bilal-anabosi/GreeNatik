import React, { useState } from 'react';
import ProductInformation from '../components/addProcduct/ProductInformation';
import ProductStatus from '../components/addProcduct/ProductStatus';
import ProductPrice from '../components/addProcduct/ProductPrice';
import Header from '../components/addProcduct/Header'

const CreateProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        weight: '',
        units: '',
        inStock: false,
        productCode: '',
        productSKU: '',
        status: 'Active',
        regularPrice: '',
        salePrice: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send formData to server
        console.log(formData);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: inputValue });
    };

    return (
        <div className="container">
            <Header/>
            <div className="row">
                <div className="col-lg-9 col-12"> {/* 3/4 of the screen */}
                    
                        <ProductInformation onChange={handleInputChange} />
                    
                </div>
                <div className="col-lg-3 col-12"> {/* 1/4 of the screen */}
                    <ProductPrice onChange={handleInputChange} />
                    <ProductStatus onChange={handleInputChange} />
                    
                </div>
                <form onSubmit={handleFormSubmit}>
                <button type="submit" className="btn btn-primary">Create Product</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProductForm;
