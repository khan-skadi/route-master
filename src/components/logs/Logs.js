import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = ({ arch, log: { logs, loading } }) => {
  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} arch={arch} />)
      )}
      <NavLink to="/archived-routes" className="flow-text">
        <blockquote style={{ color: "green" }}>Archived Routes</blockquote>
      </NavLink>
    </div>
  );
};

export default connect()(Logs);
