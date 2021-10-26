import { BrowserRouter as Router } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

function App() {
  return (
    <Router>
      <div className="App">
        <MultiStepForm />
      </div>
    </Router>
  );
}

export default App;
