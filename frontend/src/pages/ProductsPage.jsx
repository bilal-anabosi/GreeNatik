import React, { useState, useEffect } from 'react';
import PageHeader from '../components/productsDash/PageHeader';
import SearchForm from '../components/productsDash/SearchForm';
import SelectOption from '../components/productsDash/SelectOption';
import ProductTable from '../components/productsDash/ProductTable';
import Pagination from '../components/productsDash/Pagination';
import axios from 'axios'; // Import Axios

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  // State for search query, selected option, and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initialize with empty string for default
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Retrieve the authentication token from local storage or cookie
        const authToken = localStorage.getItem('userToken'); // Adjust this according to your authentication setup
  
        // If authToken exists, include it in the request headers
        if (authToken) {
          const response = await axios.get('http://localhost:4000/api/products', {
            headers: {
              Authorization: `group__${authToken}`
            }
          });
  
          setProducts(response.data.products);
        } else {
          // Handle case where authToken is missing (e.g., user not logged in)
          console.error('Authentication token not found');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []); // Empty dependency array to ensure the effect runs only once
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  }

  // Function to handle select option change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setCurrentPage(1); // Reset pagination when select option changes
  }

  // Filter products based on search query and selected option
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedOption === '' || product.status.toLowerCase() === selectedOption.toLowerCase())
  );

  // Calculate indexes of products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row mb-8">
        <div className="col-md-12">
          {/* Page header */}
          <PageHeader />
        </div>
      </div>
      {/* Row for search form and select option */}
      <div className="row">
        <SearchForm handleSearchChange={handleSearchChange} />
        <SelectOption handleSelectChange={handleSelectChange} />
      </div>
      {/* Row for product table */}
      <div className="row mt-5">
        <div className="col-xl-12 col-12 mb-5">
          {/* Product table */}
          <ProductTable products={currentProducts} />
          {/* Pagination */}
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
