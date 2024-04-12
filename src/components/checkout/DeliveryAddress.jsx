import React, { useState, useEffect } from 'react';

function AddressAccordion({ onUpdate }) {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddAddressClicked, setIsAddAddressClicked] = useState(false);
  const [isAddDeliveryAddressClicked, setIsAddDeliveryAddressClicked] = useState(true);
  const [isAddressSelected, setIsAddressSelected] = useState(false); // تحديد ما إذا تم تحديد أي عنوان أم لا

  const addressData = [
    {
      type: 'Home',
      name: 'Jitu Chauhan',
      address: '4450 North Avenue',
      city: 'Oakland',
      state: 'Nebraska',
      zip: '12345',
      country: 'USA',
      phone: '402-776-1106'
    },
    {
      type: 'Office',
      name: 'Nitu Chauhan',
      address: '3853 Coal Road',
      city: 'Tannersville',
      state: 'Pennsylvania',
      zip: '18372',
      country: 'USA',
      phone: '402-776-1106'
    }
  ];

  const handleAddressSelection = (index) => {
    setSelectedAddress(index === selectedAddress ? null : index);
    onUpdate({ address: addressData[index] });
    setIsAddressSelected(true); // تحديد أنه تم تحديد عنوان
  };

  const handleAddAddressClick = () => {
    setIsAddAddressClicked(!isAddAddressClicked);
  };

  const handleAddDeliveryAddressClick = () => {
    setIsAddDeliveryAddressClicked(!isAddDeliveryAddressClicked);
  };

  useEffect(() => {
    setIsAddDeliveryAddressClicked(false);
  }, []);

  return (
    <div className="accordion-item py-4">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#!!" className={`fs-5 text-inherit h4 ${isAddDeliveryAddressClicked ? 'text-success' : ''}`} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" onClick={handleAddDeliveryAddressClick}>
          <i className="bi bi-geo-alt" style={{ color: 'gray' }}></i>
          Add delivery address
        </a>
        <a href="#!" className={`btn ${isAddAddressClicked ? 'btn-primary' : 'btn-outline-primary'}`} data-bs-toggle="modal" data-bs-target="#addAddressModal" onClick={handleAddAddressClick}>
          Add a new address
        </a>
      </div>
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="mt-5">
          {addressData.map((address, index) => (
            <div key={index}>
              <div className="card card-body p-6">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={`${address.type.toLowerCase()}Radio`}
                    checked={selectedAddress === index}
                    onChange={() => handleAddressSelection(index)}
                  />
                  <label className={`form-check-label ${isAddDeliveryAddressClicked ? 'text-success' : 'text-dark'}`} htmlFor={`${address.type.toLowerCase()}Radio`}>{address.type}</label>
                </div>
                <address>
                  <strong>{address.name}</strong>
                  <br />
                  {address.address},
                  <br />
                  {address.city}, {address.state}, {address.zip}, {address.country},
                  <br />
                  <abbr title="Phone">P: {address.phone}</abbr>
                </address>
                {selectedAddress === index && <span className="text-danger">Default address</span>}
              </div>
            </div>
          ))}
          {!isAddressSelected && (
            <div className="text-danger">Please select an address</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddressAccordion;
