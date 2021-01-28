import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAuthHeaders } from "./apis/axios";
import Header from "./componenets/header/Header";
import HomePage from "./componenets/HomePage";
import Report from "./componenets/Report";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAuthHeaders(setLoading);
  });
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/report">
          <Report />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
