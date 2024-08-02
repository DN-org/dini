import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./router";
import { GlobalStyles } from "./styles/global.styled";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <GlobalStyles />
        <AppRoutes />
      </Router>
    </Fragment>
  );
}
export default App;
