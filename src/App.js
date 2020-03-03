import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/Navbar";
import DriverProfile from "./components/driverProfileLayout/DriverProfile";
import AddBtn from "./components/layout/AddBtn";
import HomePage from "./components/layout/HomePage";
import Footer from "./components/layout/Footer";

import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddDriverModal from "./components/drivers/AddDriverModal";
import AddProfileImage from "./components/modals/AddProfileImage";
import EditProfileDetails from "./components/modals/EditProfileDetails";
import DriverListModal from "./components/drivers/DriverListModal";
import EditDriverProfile from "./components/modals/EditDriverProfile";

import ArchivedRoutes from "./components/layout/ArchivedRoutes";
import ArchivedItemModal from "./components/layout/ArchivedItemModal";
import FindRoutes from "./components/layout/FindRoutes";
import FindRoutesModal from "./components/layout/FindRoutesModal";
import Sidenav from "./components/layout/Sidenav";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = props => {
  const { auth, profile } = props;

  useEffect(() => {
    M.AutoInit();
  });

  const PrivateRoute = ({ component: { Component, ...rest } }) => (
    <Route
      {...rest}
      render={props =>
        auth.uid ? <HomePage {...props} /> : <Redirect to="/signin" />
      }
    />
  );

  return (
    <Fragment>
      <Navbar />
      <Sidenav auth={auth} profile={profile} />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddProfileImage auth={auth} profile={profile} />
      <EditProfileDetails profile={profile} />
      <EditDriverProfile />
      <ArchivedItemModal />
      <AddDriverModal />
      <DriverListModal />
      <FindRoutesModal />
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/archived-routes" component={ArchivedRoutes} />
        <Route path="/find-routes" component={FindRoutes} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route
          path="/drivers/:driver_id"
          render={routeProps => <DriverProfile {...routeProps} />}
        />
      </Switch>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(App);
