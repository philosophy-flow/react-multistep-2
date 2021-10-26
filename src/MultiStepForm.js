import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

export default function MultiStepForm() {
  const history = useHistory();
  const location = useLocation();

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
    const currentLocation = location.pathname.substring(1);
    const previousLocation = (parseInt(currentLocation) - 1).toString();
    history.push(previousLocation);
  };

  return (
    <Formik
      initialValues={{ first: "", location: "" }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
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
    <label htmlFor={"first"}>First Name: </label>
    <Field id={"first"} name={"first"} />
    <button type="submit">Next</button>
  </Form>
);

const Step2 = ({ handleBack }) => (
  <Form>
    <label htmlFor={"location"}>Location: </label>
    <Field id={"location"} name={"location"} />
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
      <p>First Name: {values.first} </p>
      <p>Location: {values.location} </p>
      <button onClick={handleBack} type="button">
        Previous
      </button>
      <button type="submit">Submit Form</button>
    </Form>
  );
};
