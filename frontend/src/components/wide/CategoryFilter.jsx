import React from 'react';

const CategoryFilter = () => {
    return (
        <div>
            <h5 className="mb-3">Categories</h5>
            <ul className="nav nav-category">
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">Foodware</a>
                </li>
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">skincare</a>
                </li>
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">pets</a>
                </li>
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">home</a>
                </li>
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">something</a>
                </li>
                <li className="nav-item border-bottom w-100">
                    <a href="#!" className="nav-link">somewhere</a>
                </li>
            </ul>
        </div>
    );
};

export default CategoryFilter;
