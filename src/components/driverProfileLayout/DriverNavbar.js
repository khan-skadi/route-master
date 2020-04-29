import React from 'react';

const DriverNavbar = ({ driver }) => {
  return (
    <nav className="blue darken-2" style={{ marginBottom: '10px' }}>
      <div className="nav-wrapper">
        <div className="col s12">
          <div className="col s6 left" style={{ marginLeft: '10px' }}>
            <a href="#!" className="breadcrumb">
              Driver{' '}
            </a>
            <a href="#!" className="breadcrumb">
              {driver.firstName} {driver.lastName}
            </a>
          </div>
          <div
            className="col s6 right valign-wrapper"
            style={{ marginRight: '10px' }}
          >
            <a href="#!" className="breadcrumb">
              Status{' '}
            </a>
            <a href="#!" className="breadcrumb">
              {' '}
            </a>
            <a
              href="#!"
              className={`waves-effect waves-light btn ${
                driver.available ? 'green accent-4' : 'red accent-4'
              }`}
            >
              {driver.available ? 'Available' : 'En Route'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DriverNavbar;
