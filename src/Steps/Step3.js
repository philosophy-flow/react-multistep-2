import { Form, Field, ErrorMessage } from "formik";

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

export default Step3;
