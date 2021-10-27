import "./FormContainer.css";
import React from "react";

import MultiStepForm from "../MultiStepForm/MultiStepForm";

export default function FormContainer() {
  return (
    <div className="FormContainer">
      <div className="buffer"></div>
      <div className="content">
        <MultiStepForm />
      </div>
    </div>
  );
}
