import React from 'react';
import background from '../../assets/RouteMasterLogo.png';

const PreloadPage = () => {
  return (
    <div className="section section_preloader valign-wrapper">
      <div className="row">
        <div className="col s12 center">
          <img src={background} alt="logo" />
        </div>
        <br />
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col s12 center">
            <div className="progress blue lighten-4" style={{ width: '250px' }}>
              <div className="indeterminate blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloadPage;
