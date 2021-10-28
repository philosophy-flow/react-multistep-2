import { Form, Field, ErrorMessage } from "formik";

const Step3 = ({ handleBack, products }) => {
  const productInputs = products.map((p) => (
    <div className="form-control" key={p.id}>
      <label>
        <Field type="radio" name="product" value={p.title} />
        {p.title}
      </label>
    </div>
  ));

  return (
    <Form className="Form">
      <h3>Product Selection</h3>
      <div className="radio-group">
        {productInputs}
        <ErrorMessage name="product">
          {(msg) => <p className="error">{msg}</p>}
        </ErrorMessage>
      </div>
      <button onClick={handleBack} type="button" className="form-btn">
        Previous
      </button>
      <button type="submit" className="form-btn">
        Next
      </button>
    </Form>
  );
};

export default Step3;
