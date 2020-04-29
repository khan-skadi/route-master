import React from 'react';

import AdminPanel from '../adminPanel/AdminPanel.js';
import OurStaff from '../ourStaff/OurStaff.js';
import Logs from '../logs/Logs.js';

const HomePage = () => {
  return (
    <div className="section section-home_page">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <a
              href="#add-route-modal"
              className="waves-effect waves-light btn modal-trigger blue darken-2"
            >
              <i className="material-icons left">drive_eta</i>Add Route
            </a>{' '}
            <a
              href="#add-drivers-modal"
              className="waves-effect waves-light btn modal-trigger blue darken-2"
            >
              <i className="material-icons left">group_add</i>Add Driver
            </a>
          </div>
          <div className="col l8 m12 s12">
            <Logs />
            <OurStaff />
          </div>
          <div className="col s4 hide-on-med-and-down">
            <AdminPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
