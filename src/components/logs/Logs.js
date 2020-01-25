import React, { useEffect } from "react";
import { getLogs } from "../../store/actions/logActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import LogItem from "./LogItem";
import InfoPanel from "../layout/InfoPanel";
import ProfileModal from "./ProfileModal";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s8">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">All Routes</h4>
            </li>
            {!loading && logs.length === 0 ? (
              <p className="center">No logs to show...</p>
            ) : (
              logs.map(log => <LogItem log={log} key={log.id} />)
            )}
            <NavLink to="/archived-routes" className="flow-text">
              <blockquote style={{ color: "green" }}>
                Archived Routes
              </blockquote>
            </NavLink>
          </ul>
          <div>
            <ProfileModal />
          </div>
        </div>

        <div className="col s4">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
