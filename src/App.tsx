//Packages
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { AppRoutes } from "./router";

//Styles
import { GlobalStyles } from "./styles/global.styled";

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
