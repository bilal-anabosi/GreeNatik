import React, { useState } from 'react';
import PageHeader from '../components/productsDash/PageHeader';
import SearchForm from '../components/productsDash/SearchForm';
import SelectOption from '../components/productsDash/SelectOption';
import ProductTable from '../components/productsDash/ProductTable';
import Pagination from '../components/productsDash/Pagination';

const ProductsPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: '../img/product-single-img-1.jpg',
      name: "Haldiram's Sev Bhujia",
      category: "Snack & Munchies",
      status: "Active",
      price: "$18.00",
      createdAt: "24 Nov 2022"
    },
    {
      id: 2,
      image: '../img/product-single-img-2.jpg',
      name: "NutriChoice Digestive",
      category: "Bakery & Biscuits",
      status: "Active",
      price: "$24.00",
      createdAt: "20 Nov 2022"
    },
    {
      id: 3,
      image: '../img/product-single-img-3.jpg',
      name: "Cadbury 5 Star Chocolate",
      category: "Snack & Munchies",
      status: "Active",
      price: "$3.00",
      createdAt: "14 Nov 2022"
    },
    // Add more product objects
    {
      id: 4,
      image: '../img/product-single-img-4.jpg',
      name: "Onion Flavour Potato",
      category: "Snack & Munchies",
      status: "Draft",
      price: "$13.00",
      createdAt: "08 Nov 2022"
    },
    {
      id: 5,
      image: '../img/product-single-img-2.jpg',
      name: "Salted Instant Popcorn",
      category: "Instant Food",
      status: "Draft",
      price: "$9.00",
      createdAt: "09 Nov 2022"
    },
    {
      id: 6,
      image: '../img/product-single-img-1.jpg',
      name: "Blueberry Greek Yogurt",
      category: "Dairy, Bread & Eggs",
      status: "Deactive",
      price: "$11.00",
      createdAt: "02 Nov 2022"
    },
    {
      id: 7,
      image: '../img/product-single-img-4.jpg',
      name: "Britannia Cheese Slices",
      category: "Dairy, Bread & Eggs",
      status: "Active",
      price: "$24.00",
      createdAt: "15 Oct 2022"
    },
    {
      id: 8,
      image: '../img/product-single-img-3.jpg',
      name: "Blueberry Greek Yogurt",
      category: "Instant Food",
      status: "Deactive",
      price: "$12.00",
      createdAt: "24 Oct 2022"
    },
    {
      id: 9,
      image: '../img/product-single-img-2.jpg',
      name: "Slurrp Millet Chocolate",
      category: "Instant Food",
      status: "Active",
      price: "$8.00",
      createdAt: "08 Oct 2022"
    },
    {
      id: 10,
      image: '../img/product-single-img-1.jpg',
      name: "Amul Butter - 500 g",
      category: "Instant Food",
      status: "Active",
      price: "$8.00",
      createdAt: "09 Oct 2022"
    },
    {
        id: 11,
        image: '../img/product-single-img-4.jpg',
        name: "skin care - 500 g",
        category: "Instant Food",
        status: "Active",
        price: "$8.00",
        createdAt: "09 Oct 2022"
      }
    // Add more product objects if needed
  ];

  // State for search query, selected option, and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); // Initialize with empty string for default
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

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
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
