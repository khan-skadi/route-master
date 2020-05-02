import React from 'react';
import background from '../../assets/RouteMasterLogo.png';
import Preloader from './Preloader';

const PreloadPage = () => {
  return (
    <div className="section section_preloader valign-wrapper">
      <img src={background} alt="logo" />
      <Preloader />
    </div>
  );
};

export default PreloadPage;
