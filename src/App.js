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
import ArchivedRoutes from "./components/layout/ArchivedRoutes";
import ArchivedItemModal from "./components/layout/ArchivedItemModal";
import FindRoutes from "./components/layout/FindRoutes";
import FindRoutesModal from "./components/layout/FindRoutesModal";

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
      {/* <div className="content" style={{ width: "70%", margin: "0 auto" }}> */}
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <ArchivedItemModal />
        <AddDriverModal />
        <DriverListModal />
        <FindRoutesModal />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/archived-routes" component={ArchivedRoutes} />
          <Route path="/find-routes" component={FindRoutes} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route
            path="/drivers/:driver_id"
            render={routeProps => <DriverProfile {...routeProps} />}
          />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
