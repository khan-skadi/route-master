import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/ProfileModal.css";

const ProfileModal = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Our Staff</h4>
            </li>
            <ul className="list-inline">
              <li>
                <div className="col s12 m3">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src="https://content-static.upwork.com/blog/uploads/sites/4/2016/11/01071306/Amy-Sept-profile.jpg"
                        alt=""
                      />
                      <span className="card-title">Sara Wilson</span>
                    </div>
                    <div className="card-content">
                      <p>
                        Sara Wilson is the first employee of this company and
                        she's been working for us for over 10 years.
                      </p>
                    </div>
                    <div className="card-action">
                      <NavLink to="/driver">Profile</NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="col s12 m3">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt=""
                      />
                      <span className="card-title">John Doe</span>
                    </div>
                    <div className="card-content">
                      <p>
                        John Doe is the second employee of this company and he's
                        been working for us for over 2 years now.
                      </p>
                    </div>
                    <div className="card-action">
                      <a href="#!">Profile</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="col s12 m3">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt=""
                      />
                      <span className="card-title">Sam Smith</span>
                    </div>
                    <div className="card-content">
                      <p>
                        Sam Smith is the third employee of this company and he's
                        been working for us for over 3 years now.
                      </p>
                    </div>
                    <div className="card-action">
                      <a href="#!">Profile</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="col s12 m3">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg"
                        alt=""
                      />
                      <span className="card-title">Khan Skadi</span>
                    </div>
                    <div className="card-content">
                      <p>
                        Khan Skadi is the fourth employee of this company and
                        he's been working for us for over 8 years now.
                      </p>
                    </div>
                    <div className="card-action">
                      <a href="#!">Profile</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
