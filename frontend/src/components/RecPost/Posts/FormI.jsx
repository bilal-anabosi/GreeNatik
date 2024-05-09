import React from 'react';
import './Postss.css';
const FormI = (props) => {
    return (
<div>
  <section className="my-lg-14 my-8">
    <div className="mb-8 mb-xl-0">
      <div className="mb-6"/>
        <h3 className="h5 mb-3">{props.Title}</h3>
            <p>{props.description}</p>
    </div>
  </section>
</div>

  );
};
export default FormI;