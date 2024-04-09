import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/sa1.png';
import image2 from '../images/sa2.png';
import image3 from '../images/sa3.png';
import { useState } from 'react';
import './Slide.css';

const Slide = () => {

const [buttonClicked, setButtonClicked] = useState(false);

const handleClick = () => {
    setButtonClicked(true);
};

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

const handleImageClick = () => {
    setIndex(index === 2 ? 0 : index + 1);
};

return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause="hover" wrap={true} controls={false} >

            {/* Slide 1 */}
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image1}
            alt="..."
            onClick={handleImageClick}
            />
                <Carousel.Caption>
                <div className="carousl-caption top-50, start-50, text-7xl ">
                    <div className="text-white display fw-bolder mb mt-4 ">Guilt Free <br/> Shopping</div>
                </div>

                <div className="row">
                    <div className="col mb-4 mb-md-0">
                    <h3 className="teext-white display fw-bolder mb mt-4">80+</h3>
                    <h3 className="tt-white display fw mb mt-0">eco friendly products</h3>
                    </div>

                    <div className="col mb-4 mb-md-0">
                    <h3 className="txt-white display fw-bolder mb mt-4">100+</h3>
                    <span className="t-white display fw mb mt-0 ">customers</span>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 d-none d-lg-block">
                    <form action="#" className="d-flex">
                        <div className="inputt-group">
                        <input className="form-control rounded-start" type="search" placeholder="What are you looking for?" aria-label="Search" />
                        <button className="btn btn-outline-secondary rounded-end" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} color='black' fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /></svg>
                        </button>
                        </div>
                    </form>
                    </div>
                </div>

                </Carousel.Caption>
        </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="..."
                    onClick={handleImageClick}
                />
                <Carousel.Caption>
                    <div className="carousl-caption top-50, start-50, text-7xl ">
                        <div className="text-white display fw-bolder mb mt-4 ">Earth Day Every Day</div>
                        <span className="lead text-whitee">
                        "By embracing recycling practices and promoting green <br/> initiatives, we can work together to protect our planet <br/> Earth for future generations. <br/><br/><br/> For More <br/><br/><br/> 
                            <button type="button" className={`btn btn-btn btn-success custom-button ${buttonClicked ? 'clicked' : ''}`} onClick={handleClick}>
                            Click Here
                            </button>
                        </span>
                    <div className="r"></div>
                    </div>
                </Carousel.Caption>

            </Carousel.Item>
            {/* Slide 3 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="..."
                    onClick={handleImageClick}
                />
                <Carousel.Caption>
                <div className="carousl-caption top-50, start-50, text-7xl ">
                    <div className="text-white display  mb mt-4 ">Try Our GreeNatik Kit Risk-Free!</div>
                        <div className="textwhite display fw-bolder mb mt-4 ">
                        The Perfect Kit To Kickstart <br/> Your Sustainable Journey 
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
);
}
export default Slide;