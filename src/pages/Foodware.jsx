import Rating from '../components/Rating'
import Card from '../components/Card';
import Price from '../components/Price'
import Category from '../components/Category';
import NavbarTwo from '../components/NavbarTwo';
import Style from '../components/Style.css';
import Filter from '../components/Filter';

function  Foodware () {
  return (
    <div>
      
 <NavbarTwo/>

    



    <div className="container1 ">
      <div className="left-section">
     
      <Category/>
    <Rating/>
    <Price/>

      </div>
      <div className="right-section">
       <Filter/>
    
      <div className="container2 Carddd">
      <div className="row">
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"> <Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
      </div>
    </div>

    <div className="container3 Carddd">
      <div className="row">
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} Sale={"Sale"} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"><Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
        <div className="col-sm-3">
          <div className="card"> <Card number1={'$55'} number2={'$33'}text1={"rr"} text2={"ddd"} img={'/pics/category-instant-food.jpg'} /></div>
        </div>
      </div>
    </div>
      </div>
    </div>

    
   



    </div>
    
    
  )
}
export default Foodware
