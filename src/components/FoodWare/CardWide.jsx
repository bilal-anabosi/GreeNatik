import React from 'react'
import StyleWide from './StyleWide.css'

export const CardWide = ({text1,number1,text2,Sale,number2,img}) => {
    return (
      <div>
        
        <div className='Cardd'>
  <div className="card card-product" style={{maxWidth: 390}}>
    <div className="card-body">
      <div className="text-center position-relative">
        <div className="position-absolute top-0 start-0">
          <span className="badge bg-danger">{Sale}</span>
        </div>
        <a href="#!">
          <img src={img} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
        </a>
        <div className="card-product-action">
          <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
            <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View" />
          </a>
          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart" /></a>
          <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right" /></a>
        </div>
      </div>
      <div className="text-small mb-1">
        <a href="#!" className="text-decoration-none text-muted"><small>${text1}</small></a>
      </div>
      <h2 className="fs-6">
        <a href="../../pages/shop-single.html" className="text-inherit text-decoration-none">{text2}</a>
      </h2>
      <div>
        <small className="text-warning">
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-fill" />
          <i className="bi bi-star-half" />
        </small>
       
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <span className="text-dark">{number1}</span>
          <span className="text-decoration-line-through text-muted">{number2}</span>
        </div>
        <div >
          <a href="#!" className="btn btn-primary btn-sm AddBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
            Add
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
    )
  }
  export default CardWide ;
  
  
