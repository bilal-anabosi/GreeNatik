import React from 'react';
import Points from './Points'; // استدعاء المكون Points

const CardPoint= () => {
  return (
    <div>
      <div className ="container-fluid">
        <br/>
        <br/>
        <div className="lh-1">
          <h1 className="mb-2 fw-bold fs-2">Current Leaders </h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 mb-6">
            <Points 
              Name="Wahiba Jalal"
              totalpoint={56782}
              photoSrc="/pics/E1.png"
              logoSrc="/pics/A1.png"
              points={450}
              tasks={13}
            />
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <Points 
              Name="John Doe"
              totalpoint={78965}
              photoSrc="/pics/E2.png"
              logoSrc="/pics/A2.png"
              points={600}
              tasks={20}
            />
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <Points 
              Name="Jane Smith"
              totalpoint={45321}
              photoSrc="/pics/E3.png"
              logoSrc="/pics/A3.png"
              points={350}
              tasks={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPoint;
