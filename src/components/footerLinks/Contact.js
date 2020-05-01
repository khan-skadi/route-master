import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Contact = props => {
  return (
    <div className="section section-contact">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="center">Contact us</h2>
            <div className="map">
              <Map
                google={props.google}
                zoom={8}
                style={mapStyle}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
              >
                <Marker position={{ lat: 47.444, lng: -122.176 }} />
              </Map>
            </div>
          </div>

          <div className="col s5"></div>

          <div className="col s3">
            <br />
            <a className="black-text" href="#!">
              <i className="fas fa-home"></i> &nbsp;&nbsp;600-648 Embarcadero
              Rd. <br /> Palo Alto, CA 94301, USA
            </a>
            <br />
            <br />
            <a className="black-text" href="mailto:routemasterinfo@gmail.com">
              <i className="fas fa-envelope-open"></i>{' '}
              &nbsp;routemasterinfo@gmail.com
            </a>
            <br />
            <br />
            <a className="black-text" href="tel:+389-072544622">
              <i className="fas fa-phone"></i> &nbsp;(+389) 072/544-622
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStyle = {
  width: '100%',
  height: '100%'
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP
})(Contact);
