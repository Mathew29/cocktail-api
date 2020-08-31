import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Splash} />
      </Switch>
    </div>
  );
}

export default App;
