import React from 'react';


const Order = ({ items }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const serviceFee = 3.00;
  const subtotal = totalPrice + serviceFee;
 
  return (
    <div className="mt-4 mt-lg-0" style={{ maxWidth: '800px' }}>
      <div className="card shadow-sm">
        <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li className="list-group-item px-4 py-3" key={index}>
              <div className="row align-items-center">
                <div className="col-2 col-md-2">
                  <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-5 col-md-5">
                  <h6 className="mb-0">{item.name}</h6>
                  <span><small className="text-muted">{item.description}</small></span>
                </div>
                <div className="col-2 col-md-2 text-center text-muted">
                  <span>{item.quantity}</span>
                </div>
                <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                  <span className="fw-bold">${item.price.toFixed(2)}</span>
                </div>
              </div>
            </li>
          ))}
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>Item Subtotal</div>
              <div className="fw-bold">${totalPrice.toFixed(2)}</div>
            </div>
          </li>
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>Service Fee</div>
              <div className="fw-bold">${serviceFee.toFixed(2)}</div>
            </div>
          </li>
          {/* Subtotal */}
          <li className="list-group-item px-4 py-3">
            <div className="d-flex align-items-center justify-content-between fw-bold">
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Order;
