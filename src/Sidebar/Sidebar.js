import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Sidebar() {
  const [activeStep, setActiveStep] = useState(1);
  const currentLocation = useLocation().pathname.substring(1);

  useEffect(() => {
    if (activeStep < currentLocation) {
      setActiveStep(currentLocation);
    }
  }, [currentLocation, activeStep]);

  return (
    <div className="Sidebar">
      <h2>Product Survey</h2>
      <nav>
        <ul>
          <li className="form-step">
            <span>Basic Details</span>
            <span
              className={`status-circle ${activeStep > 1 && "step-complete"}`}
            ></span>
          </li>
          <li className="form-step">
            <span>Address Details </span>
            <span
              className={`status-circle ${activeStep > 2 && "step-complete"}`}
            ></span>
          </li>
          <li className="form-step">
            <span>Product Selection </span>
            <span
              className={`status-circle ${activeStep > 3 && "step-complete"}`}
            ></span>
          </li>
          <li className="form-step">Review</li>
        </ul>
      </nav>
    </div>
  );
}
