import React, { useState } from 'react';
import Order from '../components/checkout/Order';
import BreadcrumbComponent from '../components/checkout/BreadcrumbComponent';
import DeliveryAddress from '../components/checkout/DeliveryAddress';
import DeliveryInstructionsAccordion from '../components/checkout/DeliveryInstructionsAccordion';
import PaymentMethodAccordion from '../components/checkout/PaymentMethodAccordion';
import CheckoutComponent from '../components/checkout/CheckoutComponent';

import './Checkout.css';

function Checkout() {
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
  const [checkoutData, setCheckoutData] = useState({
    // Initialize with empty data or default values
    // Add default value for paymentMethod
    // Add other fields as needed
  });

  const handleSubmit = () => {
    // Submit form logic here, you can use checkoutData state to access collected data
    console.log("Collected data:", checkoutData);
    // Example: You can send this data to a server or perform further processing
  };

  const handleUpdateCheckoutData = (newData) => {
    // Update checkoutData state with new data from child components
    setCheckoutData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <div className="container3" style={{}}>
      <div className="CheckoutGrid">
        <div className="sidebar" > {/* Add border and padding to the right */}
          <BreadcrumbComponent />
          <CheckoutComponent />
          <DeliveryAddress onUpdate={handleUpdateCheckoutData} />
          <DeliveryInstructionsAccordion onUpdate={handleUpdateCheckoutData} />
          <PaymentMethodAccordion onUpdate={handleUpdateCheckoutData} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* Align the button vertically */}
            <button onClick={handleSubmit} className="btn btn-primary mt-4">Place Order</button>
          </div>
        </div>
        <div className="main-content" style={{ marginBottom: '20px' }}>
          <Order items={items} />
        </div>
      </div>
    </div>
  );
  
}

export default Checkout;
