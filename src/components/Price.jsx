import React from 'react'

function Price() {
  return (
   <div>
    
  <div className="mb-8 mt-8 Pricee" style={{maxWidth: 390}}>
    
    <h5 className="mb-3">Price</h5>
    <div>
      
  
      <div id="priceRange" className="mb-3" />
      
      <div>
  <input type="range" className="form-range" id="customRange1" /><small className="text-muted">Price:</small> range price</div>

      <span id="priceRange-value" className="small" />
    </div>
  </div>
</div>

  )
}
export default Price 