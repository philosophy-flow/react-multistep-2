import { Form } from "formik";

const Step4 = ({ values, handleBack }) => {
  return (
    <Form>
      <h3>Verify Info</h3>
      <p>Name: {`${values.first} ${values.last}`} </p>
      <p>Email Address: {values.email} </p>
      <p>---</p>
      <p>Address Line 1: {values.address1} </p>
      <p>Address Line 2: {values.address2 || "--"} </p>
      <p>City: {values.city} </p>
      <p>Zip Code: {values.zipcode} </p>
      <p>---</p>
      <p>Product: {values.product}</p>
      <button onClick={handleBack} type="button">
        Previous
      </button>
      <button type="submit">Submit Form</button>
    </Form>
  );
};

export default Step4;
