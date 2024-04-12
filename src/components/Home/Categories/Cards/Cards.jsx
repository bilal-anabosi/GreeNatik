import React from 'react';
import img1 from '../../images/s1.png';
import img2 from '../../images/s2.png';
import img3 from '../../images/s3.png';
import img4 from '../../images/s4.png';
import img5 from '../../images/s5.png';
import img6 from '../../images/s6.png';
import img7 from '../../images/s7.png';
import img8 from '../../images/s8.png';
import img9 from '../../images/s9.png';
import img10 from '../../images/s10.png';
import Category from '../Category';
import './Cards.css';

const Cards = () => {
  return (
  <div classname="categories-container">
    <h2>Categories</h2>
    <h4>Find what you are looking for</h4>

    <div className="row">
        <div className="col">
          <Category imgSrc={img1} title="Food Were" imgStyle={{ width: '280px', height: '230px' }} />
          <br/>
          <h5>Food Were</h5>
        </div>

        <div className="col">
          <Category imgSrc={img2} title="Gardening" imgStyle={{ width: '280px', height: '260px' }} />
          <br/>
          <h5>Gardening</h5>
        </div>

        <div className="col">
          <Category imgSrc={img3} title="Laundry" imgStyle={{ width: '270px', height: '230px' }} />
          <br/>
          <h5>Laundry</h5>
        </div>

        <div className="col">
          <Category imgSrc={img4} title="Pets" imgStyle={{ width: '270px', height: '230px' }} />
          <br/>
          <h5>Pets</h5>
        </div>
    </div>


    <div className="row">
    <div className="col">
    <Category imgSrc={img5} title="Shopping bags" imgStyle={{ width: '250px', height: '270px' }} />
          <br/>
          <h5>Shopping bags</h5>
    </div>

    <div className="col">
    <Category imgSrc={img6} title="Office" imgStyle={{ width: '280px', height: '230px' }} />
          <br/>
          <h5>Office</h5>
    </div>

    <div className="col">
    <Category imgSrc={img7} title="Skin care" imgStyle={{ width: '280px', height: '230px' }}  />
          <br/>
          <h5>Skin care</h5>
    </div>

    <div className="col">
    <Category imgSrc={img8} title="Pets" imgStyle={{ width: '280px', height: '230px' }}  />
          <br/>
          <h5>Electronics</h5>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <Category imgSrc={img9} title="Clothing" imgStyle={{ width: '250px', height: '270px' }} cardStyle={{ width: '340px', height: '300px' }} />
          <br/>
          <h6>Clothing</h6>
    </div>

    <div className="col">
    <Category imgSrc={img10} title="Home" imgStyle={{ width: '280px', height: '230px' }} cardStyle={{ width: '340px'}} />
          <br/>
          <h1>Home</h1>
    </div>
    </div>
</div>
  );
}

export default Cards;
