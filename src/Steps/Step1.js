import { Form, Field, ErrorMessage } from "formik";

const Step1 = () => (
  <Form className="Form">
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

    <button type="submit" className="form-btn">
      Next
    </button>
  </Form>
);

export default Step1;
