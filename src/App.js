import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={RegistrationForm} />
      </Router>
    </React.Fragment>
  );
}

export default App;
