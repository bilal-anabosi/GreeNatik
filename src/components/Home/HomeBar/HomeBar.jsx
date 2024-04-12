import React from 'react';
import './HomeBar.css'
const HomeBar = () => {
    return (
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="# ">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>
    );
  };
  
  export default HomeBar;
  