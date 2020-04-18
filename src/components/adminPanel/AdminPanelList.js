import React from 'react';

const AdminPanelList = ({ driver }) => {
  return (
    <div className="card hoverable grey lighten-5 z-depth-0.2">
      <div className="row valign-wrapper">
        <div className="col s5">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              src={driver.imageUrl}
              alt="driver profile admin panel"
              className="responsive-img"
              style={{ boxShadow: '10px 10px 5px grey' }}
            />
          </div>
        </div>
        <div className="col s8">
          <span className="flow-text black-text">{driver.firstName}</span>{' '}
          <span className="flow-text black-text">{driver.lastName}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelList;
