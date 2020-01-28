// Implement routes by fetching from some API
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRoutes } from "../../store/actions/routeActions";
import FindRoutesItem from "./FindRoutesItem";

const FindRoutes = ({ getRoutes, route }) => {
  useEffect(() => {
    getRoutes();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container">
        <ul className="collection">
          {route.routes !== null &&
            route.routes.map(route => {
              return <FindRoutesItem route={route} key={route.id} />;
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    route: state.route
  };
};

export default connect(mapStateToProps, { getRoutes })(FindRoutes);
