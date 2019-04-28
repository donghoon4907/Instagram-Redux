import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../routes/Feed";
import Auth from "../routes/auth/";
import Explore from "../routes/Explore";
import Profile from "../routes/Profile";
import Search from "../routes/Search";

const LoginRoute = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LogoutRoute = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);

function AppRouter({ isLogin }) {
  return isLogin ? <LoginRoute /> : <LogoutRoute />;
}

export default AppRouter;

AppRouter.propTypes = {
  isLogin: PropTypes.bool.isRequired
};
