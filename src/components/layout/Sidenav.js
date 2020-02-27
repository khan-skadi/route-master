import React from "react";
import profilePic from "../../img/profile1.jpg";
import background from "../../img/truck7.png";

const Sidenav = props => {
  const { auth, profile } = props;
  console.log(auth.photoURL);

  const firstName =
    profile.firstName &&
    profile.firstName.charAt(0).toUpperCase() + profile.firstName.substring(1);

  const lastName =
    profile.lastName &&
    profile.lastName.charAt(0).toUpperCase() + profile.lastName.substring(1);

  const photo = auth.photoURL || profilePic;

  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={background} alt="" />
            </div>
            <a href="#!">
              <img className="circle" src={photo} alt="" />
            </a>
            <a href="#!">
              <span className="white-text name">
                {firstName} {lastName}
              </span>
            </a>
            <a href={`mailto: ${auth.email}`}>
              <span className="white-text email">{auth.email}</span>
            </a>
          </div>
        </li>

        <li>
          <a href="#add-profile-image" className="modal-trigger">
            <i className="material-icons">add</i>Add profile image
          </a>
        </li>
        <li>
          <a href="#edit-profile-details" className="modal-trigger">
            <i className="material-icons">edit</i>Edit details
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="#!" className="subheader">
            Subheader
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header" href="#!">
                Dropdown<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <a href="#!">First</a>
                  </li>
                  <li>
                    <a href="#!">Second</a>
                  </li>
                  <li>
                    <a href="#!">Third</a>
                  </li>
                  <li>
                    <a href="#!">Fourth</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!">First</a>
            </li>
            <li>
              <a href="#!">Second</a>
            </li>
            <li>
              <a href="#!">Third</a>
            </li>
            <li>
              <a href="#!">Fourth</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
