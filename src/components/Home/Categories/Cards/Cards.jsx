import React from 'react';
import Category from '../Category';
import './Cards.css';

const Cards = () => {
  return (
  <div classname="categories-container">
    <h2 className="special-h2">Categories</h2>
    <h4 className="special-h4">Find what you are looking for</h4>

    <div className="row">
        <div className="col">
          <Category imgSrc="/pics/images/s1.png" title="Food Were" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5"> Food Were </h5>
        </div>

        <div className="col">
          <Category imgSrc="/pics/images/s2.png" title="Gardening" imgStyle={{ width: '280px', height: '260px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Gardening</h5>
        </div>

        <div className="col">
          <Category imgSrc="/pics/images/s3.png" title="Laundry" imgStyle={{ width: '270px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Laundry</h5>
        </div>

        <div className="col">
          <Category imgSrc="/pics/images/s4.png" title="Pets" imgStyle={{ width: '270px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Pets</h5>
        </div>
    </div>


    <div className="row">
    <div className="col">
    <Category imgSrc="/pics/images/s5.png" title="Shopping bags" imgStyle={{ width: '250px', height: '270px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Shopping bags</h5>
    </div>

    <div className="col">
    <Category imgSrc="/pics/images/s6.png" title="Office" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}}/>
          <br/>
          <h5 className="special-h5">Office</h5>
    </div>

    <div className="col">
    <Category imgSrc="/pics/images/s7.png" title="Skin care" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Skin care</h5>
    </div>

    <div className="col">
    <Category imgSrc="/pics/images/s8.png" title="Pets" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h5 className="special-h5">Electronics</h5>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <Category imgSrc="/pics/images/s9.png" title="Clothing" imgStyle={{ width: '250px', height: '270px' }} cardStyle={{ width: '340px', height: '300px' }} />
          <br/>
          <h1 className="special-h1">Clothing</h1>
    </div>

    <div className="col">
    <Category imgSrc="/pics/images/s10.png" title="Home" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h1 className="special-h1">Home</h1>
    </div>
    </div>
</div>
  );
}

export default Cards;
