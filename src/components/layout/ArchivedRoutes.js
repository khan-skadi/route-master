import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArchs } from "../../store/actions/archActions";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import ArchivedItem from "./ArchivedItem";

const ArchivedRoutes = ({ arch: { archs, loading }, getArchs }) => {
  useEffect(() => {
    getArchs();
    // eslint-disable-next-line
  }, []);

  if (loading || archs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Archived Routes</h4>
            </li>
            {!loading && archs.length === 0 ? (
              <p className="center">No archives to show...</p>
            ) : (
              archs.map(arch => <ArchivedItem arch={arch} key={arch.id} />)
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

ArchivedRoutes.propTypes = {
  arch: PropTypes.object.isRequired,
  getArchs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  arch: state.arch
});

export default connect(mapStateToProps, { getArchs })(ArchivedRoutes);
