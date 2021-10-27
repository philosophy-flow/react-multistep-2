import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Sidebar from "./Sidebar/Sidebar";
import FormContainer from "./FormContainer/FormContainer";

import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Sidebar />
          <FormContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
