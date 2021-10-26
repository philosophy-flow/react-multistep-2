import React, { useEffect } from "react";
import { Formik } from "formik";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import * as validationSchemas from "./validationSchemas";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

export default function MultiStepForm() {
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname.substring(1);

  // returns user to first page on refresh
  useEffect(() => {
    history.push("1");
  }, [history]);

  // validation schema depends on current form step
  const handleValidation = (step) => {
    switch (step) {
      case "1":
        return validationSchemas.validate1;
      case "2":
        return validationSchemas.validate2;
      case "3":
        return validationSchemas.validate3;
      default:
        return validationSchemas.noValidation;
    }
  };

  // moves user to next step, final submission sends alert, resets form
  const handleSubmit = (values, resetForm, setTouched) => {
    setTouched({});

    let nextLocation;
    if (currentLocation === "4") {
      nextLocation = "1";
      alert("Thanks for your submission!");
      console.log(values);
      resetForm();
      history.push(nextLocation);
      return;
    }

    nextLocation = (parseInt(currentLocation) + 1).toString();
    history.push(nextLocation);
  };

  // moves user to previous step
  const handleBack = () => {
    const previousLocation = (parseInt(currentLocation) - 1).toString();
    history.push(previousLocation);
  };

  return (
    <Formik
      initialValues={{
        first: "",
        last: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        zipcode: "",
        product: "",
      }}
      onSubmit={(values, bag) => {
        handleSubmit(values, bag.resetForm, bag.setTouched);
      }}
      validationSchema={handleValidation(currentLocation)}
    >
      {({ values }) => (
        <Switch>
          <Route exact path="/">
            <Redirect to="/1" />
          </Route>
          <Route path="/1">
            <Step1 />
          </Route>
          <Route path="/2">
            <Step2 handleBack={handleBack} />
          </Route>
          <Route path="/3">
            <Step3 handleBack={handleBack} />
          </Route>
          <Route path="/4">
            <Step4 values={values} handleBack={handleBack} />
          </Route>
          <Route>
            <Redirect to="/1" />
          </Route>
        </Switch>
      )}
    </Formik>
  );
}
