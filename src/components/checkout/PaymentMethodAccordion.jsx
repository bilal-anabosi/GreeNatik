import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function PaymentMethodAccordion({ onUpdate }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");
  const [expiryDate, setExpiryDate] = useState(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false); // تحديد ما إذا تم اختيار وسيلة الدفع أم لا

  const validationSchema = (selectedPaymentMethod) => {
    if (selectedPaymentMethod === "creditdebitcard") {
      return Yup.object().shape({
        // Define validation schema for credit/debit card
        cardNumber: Yup.string()
          .required('Card number is required')
          .matches(/^\d{16}$/, 'Invalid card number'),
        cardName: Yup.string().required('Name on card is required'),
        expiryDate: Yup.date().nullable().required('Expiry date is required'),
        cvv: Yup.string()
          .required('CVV code is required')
          .matches(/^\d{3,4}$/, 'Invalid CVV code')
      });
    } else {
      return Yup.object().shape({
        // Define validation schema for other payment methods
      });
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    // Update the parent component with the selected payment method
    onUpdate({ paymentMethod: method });
    setIsPaymentMethodSelected(true); // تحديد أنه تم اختيار وسيلة الدفع
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform submission logic here
    console.log(values);
    setSubmitting(false);
  };

  useEffect(() => {
    // تعيين القيمة الافتراضية عند دخول المكون
    setIsAccordionOpen(false);
  }, []); // يتم تنفيذ هذا فقط عندما يتم تحميل المكون لأول مرة

  return (
    <div className="accordion-item py-4">
      <a href="#!" className="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <i className="bi bi-credit-card-2-front" style={{ color: 'gray' }}></i>
        Payment Method
      </a>
      {/* collapse */}
      <div id="flush-collapseFour" className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`} data-bs-parent="#accordionFlushExample" style={{}}>
        <div className="mt-5">
          <Formik
            initialValues={{ cardNumber: '', cardName: '', expiryDate: null, cvv: '', paymentMethod: selectedPaymentMethod }}
            validationSchema={validationSchema(selectedPaymentMethod)}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div>
                  {/* Paypal */}
                  <div className="card card-bordered shadow-none mb-2">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field type="radio" name="paymentMethod" id="paypal" className="form-check-input" value="paypal" checked={selectedPaymentMethod === "paypal"} onChange={() => handlePaymentMethodChange("paypal")} />
                          <label htmlFor="paypal" className="form-check-label ms-2">Payment with Paypal</label>
                        </div>
                        <div>
                          <p className="mb-0 small">You will be redirected to PayPal website to complete your purchase securely.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Credit/Debit Card */}
                  <div className="card card-bordered shadow-none mb-2">
  <div className="card-body p-6">
    <div className="d-flex mb-4">
      <div className="form-check">
        <Field type="radio" name="paymentMethod" id="creditdebitcard" className="form-check-input" value="creditdebitcard" checked={selectedPaymentMethod === "creditdebitcard"} onChange={() => handlePaymentMethodChange("creditdebitcard")} />
        <div className="d-flex flex-column"> {/* Added flex-column class */}
          <span htmlFor="creditdebitcard" className="form-check-label ms-2" style={{fontWeight: 'bold'}}>Credit / Debit Card</span> {/* Applied bold font weight */}
          <p className="mb-0 small" style={{marginTop: '5px'}}>Safe money transfer using your bank account. We support Mastercard, Visa, Discover, and Stripe.</p> {/* Added margin-top */}
        </div>
      </div>
    </div>


                      <div className="row g-2">
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <Field type="text" name="cardNumber" className="form-control" placeholder="1234 4567 6789 4321" />
                            <ErrorMessage name="cardNumber" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="mb-3 mb-lg-0">
                            <label className="form-label">Name on Card</label>
                            <Field type="text" name="cardName" className="form-control" placeholder="Enter your first name" />
                            <ErrorMessage name="cardName" component="div" className="text-danger" />
                          </div>
                        </div>
                       <div className="mb-3 mb-lg-0 position-relative">
  <label className="form-label">Expiry date</label>
  <input className="form-control flatpickr flatpickr-input" type="text" placeholder="Select Date" readOnly="readonly" />
  <div className="position-absolute bottom-0 end-0 p-3 lh-1">
    <i className="bi bi-calendar text-muted" />
  </div>
</div>

                        <div className="col-md-3 col-12">
                          <div className="mb-3 mb-lg-0">
                            <label className="form-label">CVV code</label>
                            <Field type="password" name="cvv" className="form-control" placeholder="***" />
                            <ErrorMessage name="cvv" component="div" className="text-danger" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Payoneer */}
                  <div className="card card-bordered shadow-none mb-2">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field type="radio" name="paymentMethod" id="payoneer" className="form-check-input" value="payoneer" checked={selectedPaymentMethod === "payoneer"} onChange={() => handlePaymentMethodChange("payoneer")} />
                          <label htmlFor="payoneer" className="form-check-label ms-2">Pay with Payoneer</label>
                        </div>
                        <div>
                          <p className="mb-0 small">You will be redirected to the Payoneer website to complete your purchase securely.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Cash on Delivery */}
                  <div className="card card-bordered shadow-none">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field type="radio" name="paymentMethod" id="cashonDelivery" className="form-check-input" value="cashonDelivery" checked={selectedPaymentMethod === "cashonDelivery"} onChange={() => handlePaymentMethodChange("cashonDelivery")} />
                          <label htmlFor="cashonDelivery" className="form-check-label ms-2">Cash on Delivery</label>
                        </div>
                        <div>
                          <p className="mb-0 small">Pay with cash when your order is delivered.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                 
                  {!isPaymentMethodSelected && (
                    <div className="text-danger">Please select a payment method</div>
                  )}
               

                </div>
                
                <div className="mt-5 d-flex justify-content-end">
  <a href="#!" className="btn btn-outline-gray-400 text-muted collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
    Prev
  </a>

</div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodAccordion;
