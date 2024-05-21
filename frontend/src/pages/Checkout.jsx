import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Order from '../components/checkout/Order';
import BreadcrumbComponent from '../components/checkout/BreadcrumbComponent';
import DeliveryAddress from '../components/checkout/DeliveryAddress';
import DeliveryInstructionsAccordion from '../components/checkout/DeliveryInstructionsAccordion';
import PaymentMethodAccordion from '../components/checkout/PaymentMethodAccordion';
import CheckoutComponent from '../components/checkout/CheckoutComponent';
import Discount from '../components/checkout/Discount';

import './Checkout.css';

function Checkout() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('userToken');
  const totalPoints = 300;

  useEffect(() => {
    const fetchWishlistData = async () => {
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/cart', {
          headers: {
            'Authorization': `group__${token}`
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlistData();
  }, [token]);

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

 

  const handleSubmit = async () => {
    const requestData = {
      address: checkoutData.address,
      deliveryInstructions: checkoutData.deliveryInstructions,
      paymentMethod: checkoutData.paymentMethod,
      items: items.map(item => ({
        name: item.title,
        quantity: item.quantity,
        price: item.regularPrice,
        image: item.images,
        description: item.sizes,
      })),
    };

    try {
      await axios.post('http://localhost:4000/checkout', requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `group__${token}`,
        },
      });

      setErrorMessage('Order placed successfully');
    } catch (error) {
      setErrorMessage('Failed to place order');
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
          <Order 
            items={items} 
            discountAmount={discountAmount} 
            serviceFee={3.00}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
