import { Form } from "formik";

const Step4 = ({ values, handleBack }) => {
  return (
    <Form className="Form">
      <h3>Verify Info</h3>
      <div className="review-details">
        <p>
          Name: <span>{`${values.first} ${values.last}`}</span>
        </p>
        <p>
          Email Address: <span>{values.email}</span>
        </p>
        <p>---</p>
        <p>
          Address Line 1: <span> {values.address1}</span>
        </p>
        <p>
          Address Line 2: <span> {values.address2 || "--"}</span>
        </p>
        <p>
          City: <span> {values.city}</span>
        </p>
        <p>
          Zip Code: <span>{values.zipcode}</span>
        </p>
        <p>---</p>
        <p>
          Product: <span>{values.product}</span>
        </p>
      </div>

      <button onClick={handleBack} type="button" className="form-btn">
        Previous
      </button>
      <button type="submit" className="form-btn">
        Submit Form
      </button>
    </Form>
  );
};

export default Step4;
