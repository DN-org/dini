import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./router";
import { GlobalStyles } from "./styles/global.styled";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <Fragment>
      <ScrollToTopButton>
        <GlobalStyles />
        <Router>
          <GlobalStyles />
          <AppRoutes />
        </Router>
      </ScrollToTopButton>
    </Fragment>
  );
}
export default App;
