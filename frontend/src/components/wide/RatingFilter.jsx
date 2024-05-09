import React from 'react';

const RatingFilter = () => {
    // Create an array for the ratings
    const ratings = [5, 4, 3, 2, 1];

    // Function to generate stars for a given rating
    const renderStars = (rating) => {
        return (
            <>
                {[...Array(rating)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill text-warning"></i>
                ))}
                {[...Array(5 - rating)].map((_, index) => (
                    <i key={index} className="bi bi-star text-warning"></i>
                ))}
            </>
        );
    };

    return (
        <div>
            <h5 className="mb-3">Rating</h5>
            {ratings.map((rating) => (
                <div key={rating} className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" value="" id={`rating${rating}`}/>
                    <label className="form-check-label" htmlFor={`rating${rating}`}>
                        {renderStars(rating)}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RatingFilter;
