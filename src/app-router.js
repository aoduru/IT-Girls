import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import About from "./pages/about";
import History from "./pages/history";
import Eligibility from "./pages/eligibility";
import Navbar from "./components/navbar/navbar";
import './index.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path={ROUTES.ABOUT} exact component={About} />
      <Route path={ROUTES.HISTORY} exact component={History} />
      <Route path={ROUTES.ELIGIBILITY} exact component={Eligibility} />
    </Router>

    </>
  );
}

export default App;
