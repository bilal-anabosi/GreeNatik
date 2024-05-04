import React from 'react';
import './Formss.css';
import { useState } from 'react';
import Map from './Map';
const FormII = () => {

    const [material, setMaterial] = useState('');
    const [quantity, setQuantity] = useState('');
    const [condition, setCondition] = useState('');
    const [notes, setNotes] = useState('');

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = () => {
    // Validate inputs
    if (
        (pickup && (!city || !street || !zip.startsWith('p'))) ||
        (dropOff && (!date || !time)) ||
        !material ||
        !quantity ||
        !condition
        )
{
    setErrorMessage('Please fill out all fields correctly.');
    setSuccessMessage('');
} else 
{
    setErrorMessage('');
    setSuccessMessage('Form submitted successfully!');
}
    };

    const [errorMsg, setErrorMsg] = useState('');
    const handleChange = (e) => {
    const value = e.target.value;

    // Validate the zip code
    if (!value.startsWith('p')) {
        setErrorMsg('Invalid zip number');
    } else {
        setErrorMsg('');
    }
    // Update the zip state
    setZip(value);
};

    const [pickup, setPickup] = useState(true);
    const [dropOff, setDropOff] = useState(false);

    const handleOptionChange = (option) => {
    if (option === 'pickup') {
        setPickup(true);
        setDropOff(false);
    } else {
        setPickup(false);
        setDropOff(true);
    }
};

const locationUrl1 = 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d418932.30157428246!2d35.57709594891422!3d32.22224307839886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x151ce0f650425697%3A0x7f0ba930bd153d84!2sNablus!3m2!1d32.222667799999996!2d35.262146099999995!5e0!3m2!1sar!2s!4v1714582625175!5m2!1sar!2s';

return (

<div>

<div>
<div className="so">
    <div className="card-header border-0 pb-0">
        <br/>
        <h1 class="h4 card-title mb-0">Do you have any leftovers? <br/>
        Take the first step in turning it into something <span className="green-text">Green</span>
        </h1>
    </div>
</div>

<br/>

<div className="r">
    <form className="row g-3">
    {/* Material */}
        <div className="col-sm-6">
            <label className="form-label">Material <span className="red-txt">*</span></label>
                <input
                type="text"
                className="form-control"
                placeholder="In simple words followed by , e.g (Tefal, copper)"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                />
        </div>

        {/* Quantity */}
            <div className="col-sm-6">
                <label className="form-label">Quantity <span className="red-txt">*</span></label>
                <input
                type="text"
                className="form-control"
                placeholder="In Kg (Kilograms)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

        {/* Condition */}
            <div className="col-sm-6">
                <label className="form-label">Condition <span className="red-txt">*</span></label>
                <input
                type="text"
                className="form-control"
                placeholder="In simple words"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                />
            </div>

        {/* Notes */}
            <div className="col-sm-6">
                <label className="form-label">Notes </label>
                <input
                type="text"
                className="form-control"
                placeholder="In simple words"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                />
            </div>
    </form>
</div>

<hr/>
</div>

<div className="n">
    <div className="card-header border-0 pb-0">
    <br/>
        <h1 className="h4 card-title mb-0"> {pickup ? 'Pick up' : 'Drop off'} details
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked={pickup}
                onChange={() => handleOptionChange('pickup')}
                />

            <label className="btn btn-outline-primary" htmlFor="btnradio1">Pick Up</label>
                <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                checked={dropOff}
                onChange={() => handleOptionChange('dropoff')}
                />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Drop-Off</label>
        </div>
    <br />
<span className="s-text">fill your {pickup ? 'pick up' : 'drop off'} location manually or use the map</span>
    </h1>
        </div>
<br />

    <div className="row">
        <div className="col-lg-6">
            <form data-gtm-form-interact-id={0}>
                {/*city input */}
                {pickup && (
                    <div className="mb-3">
                        <label className="form-label">City <span className="red-txt">*</span>{' '} </label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Cities/Towns/Villages"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                )}
                {pickup && (
                    <div className="mb-3">
                        <label className="form-label">Street Name <span className="red-txt">*</span> {' '}</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="..."
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                )}
                {pickup && (
                    <div className="mb-5">
                        <label className="form-label">Zip <span className="red-txt">*</span>{' '} </label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Starting with 'p' followed by your zip number"
                        value={zip}
                        onChange={handleChange}
                        />
                            {errorMsg && <p className="text-danger">{errorMsg}</p>}
                    </div>
                )}

                {dropOff && (
                    <div className="mb-5">
                        <label className="form-label">Date <span className="red-txt">*</span>{' '} </label>
                        <input
                        type="date"
                        className="form-control"
                        placeholder="..."
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                )}

                {dropOff && (
                    <div className="mb-5">
                        <label className="form-label">Time <span className="red-txt">*</span>{' '} </label>
                        <input
                        type="time"
                        className="form-control"
                        placeholder="..."
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                )}

<div className="mb-3">
    {/* Display error message box */}
        {errorMessage && (
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                        <strong className="me-auto">GreeNatik</strong>
                        <small className="f-6">Now</small>
                        <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
                    </div>
                            <div className="toast-body">
                            {errorMessage}
                            </div>
                </div>
            </div>
        )}
</div>
</form>

<div>
    <div className="m">
        <button type="button" className="btn btn-primary btn-lg">Get it from my Account</button>
        <button type="button" className="btn btn-secondary btn-lg"  onClick={handleSubmit}>Submit</button>
    </div>
</div>

    <div className="d">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color='#333333CC' fill="currentColor" class="bi bi-exclamation-circle-fill"  viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg> 
                <span className="t-text">
                By clicking submit it means you agree to our <a href="# ">terms and conditions</a>
                </span>
    </div>
</div>

        <Map locationUrl={locationUrl1} />

</div>

{/* Display success message */}
{successMessage && <p className="text-success">{successMessage}</p>}
</div>
</div>
);
};
export default FormII;