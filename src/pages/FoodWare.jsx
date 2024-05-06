import React from 'react'
import Rating from '../components/FoodWare/Rating'
import CardWide from '../components/FoodWare/CardWide'
import Price from '../components/FoodWare/Price'
import Category from '../components/FoodWare/Category'
import NavbarTwo from '../components/FoodWare/NavbarTwo'
import Filterr from '../components/FoodWare/Filterr'

function FoodWide () {
  return (
    <div>
         <div style={{marginBottom:'-200px'}}> <NavbarTwo/></div>


    



<div className="container container-1onee ">
  <div className="left-section">
 
  <Category/>
<Rating/>
<Price/>

  </div>
  <div className="right-section">
   <Filterr/>

  <div className="container container-2twoo Carddd">
  <div className="row">
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"> <CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
  </div>
</div>

<div className="container container-3threee Carddd">
  <div className="row">
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} Sale={"Sale"} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"><CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
    <div className="col-sm-3">
      <div className="card"> <CardWide number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'\img\category-instant-food.jpg'} /></div>
    </div>
  </div>
</div>
  </div>
</div>






    </div>
  )
}
export default FoodWide