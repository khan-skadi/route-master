import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs.js";
import DriverProfile from "./components/driverLayout/DriverProfile";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import AddDriverModal from "./components/driverLayout/AddDriverModal";
import TechListModal from "./components/techs/TechListModal";
import DriverListModal from "./components/driverLayout/DriverListModal";
import ArchivedRoutes from "./components/layout/ArchivedRoutes";
import Footer from "./components/layout/Footer.js";
import FindRoutes from "./components/layout/FindRoutes";

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
        <AddDriverModal />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <DriverListModal />
        <Switch>
          <Route exact path="/" component={Logs} />
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
