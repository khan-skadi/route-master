import React from "react";
import { useFirebase } from "react-redux-firebase";

const TestRoutes = () => {
  const firebase = useFirebase();

  function createArchive() {
    return firebase.push("archs", { locationFrom: "Boston" });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h1 className="center">Test Routes</h1>
            </li>
            <a
              href="#!"
              className="waves-effect waves-light btn"
              onClick={createArchive}
            >
              button
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestRoutes;
