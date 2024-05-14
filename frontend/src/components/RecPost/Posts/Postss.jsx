import React from 'react';
import {useState}  from 'react';
import './Postss.css';
import FormII from '../Formss/FormII';
import FormI from './FormI';

const Postss = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

    return (
      <div>
        <div className="sa">
          <div className="card mb-4 bg-light border-0"  style={{ marginTop: '50px' }}>
            <div className="card-body p-9">
              <div className="mb-0 fs-1"> 
                <div className="card">
                  {/* Card body START */}
                    <div className="card-bodyy">
                      <div className="d-md-flex flex-wrap align-items-start text-center text-md-start">
                        <div className="mb-2">
                          {/* Avatar */}
                            <div className="avatar avatar-xl ">
                              <img className="avatar-img border-0" alt="..." src={props.avatarSrc} />
                            </div>
                        </div>
                      <div className="ms-md-4 mt-3">
                        {/* Info */}
                          <h1 className="h5 mb-0"> 
                          {props.postTitle} 
                            <button type="button" className="btn btn-primary btn-sm"  disabled>
                              {props.buttonText}
                            </button>
                          </h1>
                        <ul className="nav nav-divider justify-content-center justify-content-md-start">
                          <li className="nav-item">{props.location}</li>
                        </ul>
                      </div>
                        {/* Button */}
                          <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-3 ms-lg-auto">
                            <div className="s">
                              <button className={`btn btn-primary ${isClicked ? 'red-heart' : ''}`} type="button" onClick={handleClick} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                              </button>

                              <button className="btn btn-primary" type="button" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                                  <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

<div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-3">
      <FormI Title="Requesting" description="Metal , Any type of metal (aluminum, copper, titanium, Tefal)" />
    </div>
    <div className="col-md-6 col-lg-3">
      <FormI Title="Quantity" description="500 Kg" />
    </div>
    <div className="col-md-6 col-lg-3">
      <FormI Title="Condition" description="At any condition" />
    </div>
    <div className="col-md-6 col-lg-3">
      <FormI Title="Date" description="20 March 2024" />
    </div>
  </div>
</div>

<hr/>
{/* labels */}
<div className="progress" style={{marginTop: '60px' , height:'25px' }}>
  <div className="progress-bar" role="progressbar" style={{ width: props.Value + '%' }} aria-valuenow={props.Value} aria-valuemin={0} aria-valuemax={100}>{props.Value}%</div>
</div>

<hr/>

<FormII/>

      </div>
    </div>
  </div>
</div>

<div className="x">
  <div className="card-header border-0 pb-0">
    <br/>
    <br/>
    <br/>
        <h1 className="h4 card-title mb-0">Related Posts</h1>
        <br/>
    </div>
    </div>
</div>
  );
};
export default Postss;