import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechItem from "./TechItem";
import { getTechs } from "../../store/actions/techActions";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  // We no longer need this because we are getting the techs through Redux. We will use techs as APP-level state and pass them as props
  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/techs");
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Driver List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
