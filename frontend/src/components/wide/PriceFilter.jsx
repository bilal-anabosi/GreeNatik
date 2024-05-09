import React from 'react';

const PriceFilter = () => {
    const priceRanges = [
        '$0 - $10',
        '$10 - $50',
        '$50 - $100',
        '$100 - $200',
        '$200 and up'
    ];

    return (
        <div>
            <h5 className="mb-3">Price</h5>
            <div>
                {priceRanges.map((range, index) => (
                    <div key={index} className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priceRange"
                            id={`priceRange${index}`}
                            value={range}
                            // `checked` and `onChange` handlers are removed
                        />
                        <label className="form-check-label" htmlFor={`priceRange${index}`}>
                            {range}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceFilter;

