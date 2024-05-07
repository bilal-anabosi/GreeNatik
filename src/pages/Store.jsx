// src/pages/Home.js
import React from 'react';
import HomeBar from '../components/Home/HomeBar/HomeBar';
import Slide from '../components/Home/Slides/Slide';
import Feature from '../components/Home/Feature/Feature';
import Cards from '../components/Home/Categories/Cards/Cards';
import NewProduct from '../components/Home/Categories/Productss/NewProduct/NewProduct';
import Shopping from '../components/Home/Categories/Productss/Shopping';
import OfferCard from '../components/Home/Categories/Productss/SpecialProduct/OfferCard';
import BestProduct from '../components/Home/Categories/Productss/BestProduct/BestProduct';

const Store = () => {
  return (
   

<div className='Homee'>

<HomeBar/>
<Slide/>
<Feature/>
<Cards/>
<NewProduct/>
<Shopping />
<OfferCard/>
<BestProduct/>

</div>



  );
};

export default Store;
