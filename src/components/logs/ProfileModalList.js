// List logic for "Our Staff" section.
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfileModalList = ({ driver }) => {
  return (
    <ul className="list-inline">
      <li>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img
                src="https://content-static.upwork.com/blog/uploads/sites/4/2016/11/01071306/Amy-Sept-profile.jpg"
                alt="profile_picture"
              />
              <span className="card-title">{driver.firstName}</span>
            </div>
            <div className="card-content">
              <p>
                Sara Wilson is the first employee of this company and she's been
                working for us for over 10 years.
              </p>
            </div>
            <div className="card-action">
              <p>Profile</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

ProfileModalList.propTypes = {
  driver: PropTypes.object.isRequired
};

export default connect()(ProfileModalList);
