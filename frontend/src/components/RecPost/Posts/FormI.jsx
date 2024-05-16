import React from 'react';
import './Postss.css';
const FormI = ({ index, description }) => {

  // const titles
  const titles = ["Requesting", "Quantity", "Condition", "Date"];
    
  const title = titles[index];

    return (
<div>
  <section className="my-lg-14 my-8">
    <div className="mb-8 mb-xl-0">
      <div className="mb-6"/>
        <h3 className="h5 mb-3">{title}</h3>
            <p>{description}</p>
    </div>
  </section>
</div>

  );
};
export default FormI;