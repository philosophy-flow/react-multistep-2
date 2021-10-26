import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import * as validationSchemas from "./validationSchemas";

export default function MultiStepForm() {
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname.substring(1);

  const handleValidation = (step) => {
    switch (step) {
      case "1":
        return validationSchemas.validate1;
      case "2":
        return validationSchemas.validate2;
      default:
        return validationSchemas.noValidation;
    }
  };

  const handleSubmit = (values, resetForm) => {
    let nextLocation;
    switch (location.pathname) {
      case "/1":
        nextLocation = "2";
        break;
      case "/2":
        nextLocation = "3";
        break;
      case "/3":
        nextLocation = "1";
        alert("Thanks for your submission!");
        console.log(values);
        resetForm();
        break;
      default:
        break;
    }
    history.push(nextLocation);
  };

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
        location: "",
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
      validationSchema={(values) => handleValidation(currentLocation)}
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
            <Step3 values={values} handleBack={handleBack} />
          </Route>
          <Route>
            <Redirect to="/1" />
          </Route>
        </Switch>
      )}
    </Formik>
  );
}

export const Step1 = () => (
  <Form>
    <h3>Basic Info</h3>
    <div className="form-control">
      <label htmlFor={"first"}>First Name: </label>
      <Field id={"first"} name={"first"} />
      <ErrorMessage name="first">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor={"last"}>Last Name: </label>
      <Field id={"last"} name={"last"} />
      <ErrorMessage name="last">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor={"email"}>Email Address: </label>
      <Field id={"email"} name={"email"} />
      <ErrorMessage name="email">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>

    <button type="submit">Next</button>
  </Form>
);

const Step2 = ({ handleBack }) => (
  <Form>
    <h3>Address Info</h3>
    <div className="form-control">
      <label htmlFor={"location"}>Location: </label>
      <Field id={"location"} name={"location"} />
      <ErrorMessage name="location">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>

    <button onClick={handleBack} type="button">
      Previous
    </button>
    <button type="submit">Next</button>
  </Form>
);

const Step3 = ({ values, handleBack }) => {
  return (
    <Form>
      <p>Verify Info </p>
      <p>----</p>
      <p>Name: {`${values.first} ${values.last}`} </p>
      <p>Email Address: {values.email} </p>
      <p>Location: {values.location} </p>
      <button onClick={handleBack} type="button">
        Previous
      </button>
      <button type="submit">Submit Form</button>
    </Form>
  );
};
