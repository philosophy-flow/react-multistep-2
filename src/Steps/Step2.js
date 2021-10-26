import { Form, Field, ErrorMessage } from "formik";

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

export default Step2;
