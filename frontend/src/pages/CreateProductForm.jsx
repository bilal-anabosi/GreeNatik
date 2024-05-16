import React, { useState } from 'react';
import ProductInformation from '../components/addProcduct/ProductInformation';
import ProductStatus from '../components/addProcduct/ProductStatus';
import ProductPrice from '../components/addProcduct/ProductPrice';
import Header from '../components/addProcduct/Header'
import axios from 'axios';

const CreateProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        longDescription: '',
        sizes: [],
        images: [],
        regularPrice: '',
        salePrice: '',
        inStock: false,
        status: 'Active'
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('userToken');
            const response = await axios.post('http://localhost:4000/api/products', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `group__${token}`
                }
            });
    
            if (response.status === 201) {
                console.log('Product created successfully');
                // Redirect or show success message
            } else {
                console.error('Error creating product:', response.data);
                // Handle specific error scenario based on response status or data
            }
        } catch (error) {
            console.error('Error creating product:', error);
            // Handle network error or other exceptions
        }
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
