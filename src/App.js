import { BrowserRouter as Router } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider>
      <Router store={store}>
        <div className="App">
          <MultiStepForm />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
