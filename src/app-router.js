import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import './index.css';


function App() {
  return (
    <>
    <Router>
      <Route path={ROUTES.HOME} exact component={Home} />
    </Router>

    </>
  );
}

export default App;
