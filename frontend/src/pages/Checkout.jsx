import React, { useState } from 'react';
import Order from '../components/checkout/Order';
import BreadcrumbComponent from '../components/checkout/BreadcrumbComponent';
import DeliveryAddress from '../components/checkout/DeliveryAddress';
import DeliveryInstructionsAccordion from '../components/checkout/DeliveryInstructionsAccordion';
import PaymentMethodAccordion from '../components/checkout/PaymentMethodAccordion';
import CheckoutComponent from '../components/checkout/CheckoutComponent';
import Discount from '../components/checkout/Discount';

import './Checkout.css';

function Checkout() {
  const totalPoints = 300;
  const items = [
    {
      name: "Haldiram's Sev Bhujia",
      description: ".98 / lb",
      quantity: 1,
      price: 5.00,
      image: process.env.PUBLIC_URL + '/pics/productimg1.png'
    },
    {
      name: "NutriChoice Digestive",
      description: "250g",
      quantity: 1,
      price: 20.00,
      image: process.env.PUBLIC_URL + '/pics/productimg2.png'
    },
    {
      name: "Cadbury 5 Star Chocolate",
      description: "1 kg",
      quantity: 1,
      price: 15.00,
      image: process.env.PUBLIC_URL + '/pics/productimg3.png'
    },
    {
      name: "Onion Flavour Potato",
      description: "250g",
      quantity: 1,
      price: 15.00,
      image: process.env.PUBLIC_URL + '/pics/productimg4.png'
    }
  ];

  // Calculate totalPrice
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const [checkoutData, setCheckoutData] = useState({});
  const [discountAmount, setDiscountAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdateCheckoutData = (newData) => {
   
    const updatedPoints = newData.selectedPoints > totalPoints ? totalPoints : newData.selectedPoints;

    setCheckoutData((prevData) => ({
      ...prevData,
      ...newData,
      selectedPoints: updatedPoints,
    }));

    setDiscountAmount(newData.discountAmount || 0);
  };

  const handleSubmit = () => {
    if (checkoutData.selectedPoints > totalPoints) {
      setErrorMessage("Points used exceed total available points!"); // Display error message
    } else {
      console.log("Collected data:", checkoutData);
      setErrorMessage(""); // Clear error message if no error
    }
  };

  return (
    <div className="container3">
      <div className="CheckoutGrid">
        <div className="sidebar">
          <BreadcrumbComponent />
          <CheckoutComponent />
          <DeliveryAddress onUpdate={handleUpdateCheckoutData} />
          <DeliveryInstructionsAccordion onUpdate={handleUpdateCheckoutData} />
          <PaymentMethodAccordion onUpdate={handleUpdateCheckoutData} />
          <Discount onUpdate={handleUpdateCheckoutData} totalPoints={totalPoints} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={handleSubmit} className="btn btn-primary mt-4">Place Order</button>
          </div>
          <div className="mb-3">
            {errorMessage && (
              <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                    <strong className="me-auto">GreeNatik</strong>
                    <small>Now</small>
                    <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
                  </div>
                  <div className="toast-body">
                    {errorMessage}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="main-content" style={{ marginBottom: '20px' }}>
          <Order items={items} discountAmount={discountAmount} subtotal={totalPrice} />
        </div>
      </div>
    </div>
    
  );
}

export default Checkout;
