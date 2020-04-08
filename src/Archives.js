import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withFirestore, isLoaded, isEmpty } from "react-redux-firebase";
import { addArchive } from "./store/archivesActions.js";
import ArchivesItem from "./ArchivesItem.js";

const Archives = (props) => {
  const { firestore, archs } = props;

  useEffect(() => {
    firestore.get("archs");
    //eslint-disable-next-line
  }, []);

  const handleSubmit = () => {};

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Archives</h4>
        </li>
        {!isLoaded(archs)
          ? "Loading"
          : isEmpty(archs)
          ? "Archives list is empty"
          : archs.map((arch) => <ArchivesItem key={arch.id} arch={arch} />)}
      </ul>
      <div className="col">
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={handleSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default compose(
  withFirestore,
  connect((state) => ({
    archs: state.firestore.ordered.archs,
    archives: state.archives,
  }))
)(Archives);
