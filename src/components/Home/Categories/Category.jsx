import React from 'react';
import { useState } from 'react';
import './Cards/Cards.css';

const Category = ({ imgSrc,imgStyle ,cardStyle}) => {
  const [clicked, setClicked] = useState(false); // State to track clicked status

  // Function to handle click event
  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };
  // Dynamically set class name based on clicked state
  const cardClassName = `card ${clicked ? 'clicked' : ''}`;

  return (
    <div className={cardClassName} style={cardStyle} onClick={handleClick}>
      <img src={imgSrc} className="card-img-top" alt="..." style={imgStyle} />
    </div>
  );
}
export default Category;