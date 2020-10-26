import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinStepOne from "./pages/JoinSteps/JoinStepOne";
import JoinStepTwo from "./pages/JoinSteps/JoinStepTwo";
import JoinStepThree from "./pages/JoinSteps/JoinStepThree";
import MainPage from "./pages/MainPage/MainPage";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import MainBanner from "./pages/MainPage/components/MainBanner/MainBanner";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/JoinStepOne" component={JoinStepOne} />
          <Route exact path="/JoinStepTwo" component={JoinStepTwo} />
          <Route exact path="/JoinStepThree" component={JoinStepThree} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/MainBanner" component={MainBanner} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;