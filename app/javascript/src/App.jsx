import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAuthHeaders } from "./apis/axios";
import HomePage from "./componenets/HomePage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAuthHeaders(setLoading);
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
