import React from "react";
import "./QualityTime.css";
const QualityTime = ({ image, order }) => {
  return (
    <div id="quality-main" className="row">
      <div className="quality-img col-md-6  gap-2" style={{ order: `${order}` }}>
        <img src={image} alt="quality" />
      </div>
      <div className="quantity-container col-md-6  gap-2">
        <h1 className="title">
          <span style={{ display: "block" }}>Quality Work for</span>
          <span>Every Client.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at
          neque facilisis mi fusce. Leo accumsan at dolor a, at amet. In
          adipiscing urna proin vestibulum scelerisque. Nisi magna turpis sit
          in. Pellentesque nisl tortor, in ac. Aliquet gravida tincidunt
          maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. Neque
        </p>
        <p>
          nulla non praesent etiam faucibus pretium. Praesent sit malesuada
          tincidunt praesent. Aliquet gravida tincidunt maecenas dolor
          malesuada. Sed sollicitudin laoreet a, auctor. Neque nulla non
          praesent etiam faucibus pretium. Praesent sit malesuada tincidunt
          praesent.
        </p>

      </div>
    </div>
  );
};

export default QualityTime;
