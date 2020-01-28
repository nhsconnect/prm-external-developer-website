import React from "react";
import "./phasebanner.scss";

const PhaseBanner = ({ tag, children }) => (
  <div className="gp2gp-phase-banner">
    <p className="nhsuk-body-s nhsuk-u-margin-bottom-3">
      <strong className="nhsuk-u-margin-right-3">{tag}</strong>
      {children}
    </p>
  </div>
);

export default PhaseBanner;