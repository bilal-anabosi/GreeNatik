import React from 'react';
const BarI = (props) => {
    return (
      <div className="ss">
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="# ">Home</a></li>
        <li className="breadcrumb-item"><a href="# ">Recycling</a></li>
        <li className="breadcrumb-item active" aria-current="page">{props.Title}</li>
      </ol>
    </nav>
    </div>
    );
  };
  
  export default BarI;
  