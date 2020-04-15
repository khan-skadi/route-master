import React from 'react';

const AdminPanelList = ({ driver }) => {
  return (
    <ul>
      <li>
        <div className="card grey lighten-5 z-depth-0.2">
          <div className="row valign-wrapper">
            <div className="col s5">
              <div className="card-image waves-effect waves-block waves-light">
                <img src={driver.imageUrl} alt="" className="responsive-img" />
              </div>
            </div>
            <div className="col s8">
              <span className="flow-text black-text">{driver.firstName}</span>{' '}
              <span className="flow-text black-text">{driver.lastName}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AdminPanelList;
