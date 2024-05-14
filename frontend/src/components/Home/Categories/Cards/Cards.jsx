import React from 'react';
import Category from './Category';
import './Cards.css';

const Cards = () => {
  return (
<div className="j">
  <div className="categories-container">
    <h2 className="special-h2">Categories</h2>
    <h4 className="special-h4">Find what you are looking for</h4>
</div>

<div className="row row-cols-5 g-4">
<Category 
  imageUrl="/pics/images/s1.png" 
  title="Food Were" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s2.png" 
  title="Gardeing" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s3.png" 
  title="Laundry" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s4.png" 
  title="Pets" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s5.png" 
  title="Shopping Bags" 
  link="#" 
/>
</div>

<div className="row row-cols-5 g-4">

<Category 
  imageUrl="/pics/images/s6.png" 
  title="Office" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s7.png" 
  title="Skin Care" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s8.png" 
  title="Electronics" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s9.png" 
  title="Clothing" 
  link="#" 
/>
<Category 
  imageUrl="/pics/images/s10.png" 
  title="Home" 
  link="#" 
/>
</div>
</div>
  );
}
export default Cards;