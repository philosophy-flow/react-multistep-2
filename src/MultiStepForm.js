import React, { useEffect } from "react";
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

  // moves user to next step, final submission sends alert and logs values
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
        nextLocation = "4";
        break;
      case "/4":
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

export const Step1 = () => (
  <Form>
    <h3>Basic Info</h3>
    <div className="form-control">
      <label htmlFor="first">First Name: </label>
      <Field id="first" name="first" />
      <ErrorMessage name="first">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor="last">Last Name: </label>
      <Field id="last" name="last" />
      <ErrorMessage name="last">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor="email">Email Address: </label>
      <Field id="email" name="email" />
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
      <label htmlFor="address1">Address Line 1: </label>
      <Field id="address1" name="address1" />
      <ErrorMessage name="address1">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor="address2">Address Line 2: </label>
      <Field id="address2" name="address2" />
      <ErrorMessage name="address2">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor="city">City: </label>
      <Field id="city" name="city" />
      <ErrorMessage name="city">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>
    <div className="form-control">
      <label htmlFor="zipcode">Zip Code: </label>
      <Field id="zipcode" name="zipcode" />
      <ErrorMessage name="zipcode">
        {(msg) => <p className="error">{msg}</p>}
      </ErrorMessage>
    </div>

    <button onClick={handleBack} type="button">
      Previous
    </button>
    <button type="submit">Next</button>
  </Form>
);

console.log("rendering");
const Step3 = ({ handleBack }) => {
  return (
    <Form>
      <h3>Product Selection</h3>
      <div className="radio-group">
        <div className="form-control">
          <label>
            <Field type="radio" name="product" value="Product #1" />
            Product #1
          </label>
        </div>
        <div className="form-control">
          <label>
            <Field type="radio" name="product" value="Product #2" />
            Product #2
          </label>
        </div>
        <div className="form-control">
          <label>
            <Field type="radio" name="product" value="Product #3" />
            Product #3
          </label>
        </div>
        <ErrorMessage name="product">
          {(msg) => <p className="error">{msg}</p>}
        </ErrorMessage>
      </div>
      <button onClick={handleBack} type="button">
        Previous
      </button>
      <button type="submit">Next</button>
    </Form>
  );
};

const Step4 = ({ values, handleBack }) => {
  return (
    <Form>
      <h3>Verify Info</h3>
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
