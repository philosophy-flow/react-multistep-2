import "./Sidebar.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const activeStep = useSelector((state) => state.activeStep);

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
