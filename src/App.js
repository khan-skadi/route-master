import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SearchBar from "./components/layout/SearchBar";
import DriverProfile from "./components/driverProfileLayout/DriverProfile";
import AddBtn from "./components/layout/AddBtn";
import HomePage from "./components/layout/HomePage";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddDriverModal from "./components/drivers/AddDriverModal";
import DriverListModal from "./components/drivers/DriverListModal";
import DriverSelectOptions from "./components/drivers/DriverSelectOptions";
import ArchivedRoutes from "./components/layout/ArchivedRoutes";
import FindRoutes from "./components/layout/FindRoutes";
import Footer from "./components/layout/Footer";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="content" style={{ width: "80%", margin: "0 auto" }}>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddDriverModal />
        <DriverListModal />
        <DriverSelectOptions />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/driver/:id" component={DriverProfile} />
          <Route path="/archived-routes" component={ArchivedRoutes} />
          <Route path="/find-routes" component={FindRoutes} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
