import React from 'react';

const Category = ({ imageUrl, title, link}) => {
  return (
    <div className="col-lg col-md-4 col-6">
      <div className="text-center mb-10" >
        <a href={link}><img src={imageUrl} alt="" className="card-image "/></a>
        <div className="mt-4">
          <h5 className="fs-6 mb-0"><a href={link} className="text-inheritt">{title}</a></h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
