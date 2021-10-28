import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";
import FormContainer from "./FormContainer/FormContainer";
import { LOAD_PRODUCTS } from "./redux/constants";

function App() {
  const dispatch = useDispatch();

  // makes API call to fetch products via redux saga
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS });
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
