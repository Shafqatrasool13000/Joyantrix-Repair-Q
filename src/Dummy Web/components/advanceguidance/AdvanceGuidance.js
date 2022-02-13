import React from "react";
import guidance from "../../assets/guidance.svg";
import "./AdvanceGuidance.css";
const AdvanceGuidance = () => {
  return (
    <div id="advanced-guide">
      <div className="guide-text-area column">
        <p className="mini-title">lorem ipsum</p>
        <p className="title">Advanced guidance from us.</p>
        <p className="p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at
          neque facilisis mi fusce. Leo accumsan at dolor a, at amet. In
          adipiscing urna proin vestibulum scelerisque. Nisi magna turpis sit
          in. Pellentesque nisl tortor, in ac. Aliquet gravida tincidunt
          maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. Neque
          nulla non praesent etiam faucibus pretium. Praesent sit malesuada
          tincidunt praesent.
        </p>
        <p className="p-2">
          Aliquet gravida tincidunt maecenas dolor malesuada. Sed sollicitudin
          laoreet a, auctor. Neque nulla non praesent etiam faucibus pretium.
          Praesent sit malesuada tincidunt praesent.
        </p>
      </div>
      <div className="advanced-img column">
        <img src={guidance} alt="guidance" />
      </div>
    </div>
  );
};

export default AdvanceGuidance;
