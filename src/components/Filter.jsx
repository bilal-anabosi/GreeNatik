import React from 'react'
import Style from '../components/Style.css'
function Filter () {
  return (
    <div className='Filterr'> 

<div className="row">
  <div className="col-12">
    <div className="d-lg-flex justify-content-between align-items-center">
      <div className="mb-3 mb-lg-0">
        <p className="mb-0"> <span className="text-dark">24 </span> Products found </p>
      </div>
      {/* icon */}
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-between">
         
          
        </div>
        <div className="d-flex mt-2 mt-lg-0">
          <div className="me-2 flex-grow-1">
            {/* select option */}
        
          </div>
          <div>
            {/* select option */}
            <select className="form-select" aria-label="Default select example">
              <option selected>Sort by: Featured</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low"> Price: High to Low</option>
              <option value="Release Date"> Release Date</option>
              <option value="Avg. Rating"> Avg. Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
export default Filter 