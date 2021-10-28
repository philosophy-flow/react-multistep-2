import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { loadProducts } from "./redux/actions/productActions";

import Sidebar from "./Sidebar/Sidebar";
import FormContainer from "./FormContainer/FormContainer";

function App() {
  const dispatch = useDispatch();

  // makes API call to fetch products via redux saga
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <FormContainer />
      </div>
    </Router>
  );
}

export default App;
