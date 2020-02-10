
import React from "react";
import { Route } from "react-router-dom";
import App from '../Containers/App';
import TestPage from "../Containers/TestPage";


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route  path="/test" component={TestPage} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;