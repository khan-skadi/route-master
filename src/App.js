import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import Navbar from './components/layout/Navbar.js';
import HomePage from './components/layout/HomePage.js';
import DriverProfile from './components/driverProfileLayout/DriverProfile.js';
import ArchivedRoutes from './components/archived-routes/ArchivedRoutes.js';
import Sidenav from './components/layout/Sidenav.js';
import TestComponent from './components/layout/TestComponent.js';

import PrivacyPolicy from './components/footerLinks/PrivacyPolicy.js';
import TermsAndConditions from './components/footerLinks/TermsAndConditions.js';
import AboutUs from './components/footerLinks/AboutUs.js';
import Contact from './components/footerLinks/Contact.js';

import AddBtn from './components/layout/AddBtn.js';
import AddLogModal from './components/modals/AddLogModal.js';
import AddDriverModal from './components/modals/AddDriverModal.js';
import EditDriverProfile from './components/modals/EditDriverProfile.js';
import AddAdminImage from './components/modals/AddAdminImage.js';
import EditAdminDetails from './components/modals/EditAdminDetails.js';
import EditLogModal from './components/modals/EditLogModal.js';
import ArchivedItemModal from './components/modals/ArchivedItemModal.js';

import 'materialize-css/dist/css/materialize.min.css';
import * as M from 'materialize-css/dist/js/materialize';

const App = ({ auth }) => {
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
    <>
      <div className="content">
        <AddLogModal />
        <AddAdminImage />
        <EditAdminDetails />
        <EditLogModal />
        <ArchivedItemModal />
        <EditDriverProfile />
        <AddDriverModal />
        <Sidenav />
        <Navbar />
        <AddBtn />
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/archived-routes" component={ArchivedRoutes} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/drivers/:driver_id"
            render={routeProps => <DriverProfile {...routeProps} />}
          />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/test" component={TestComponent} />
        </Switch>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
