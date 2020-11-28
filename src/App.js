import React from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import PersonalData from "./pages/PersonalData";
import Switch from "react-bootstrap/esm/Switch";
import history from "./common/history";

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={RegistrationForm} />
          <Route exact path="/data" component={PersonalData} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
