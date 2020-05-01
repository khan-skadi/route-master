import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Contact = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2 className="center">Contact</h2>
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
          <a href="#!" style={{ lineHEight: '50px' }}>
            <i className="fas fa-home"></i> Home address
          </a>
          <br />
          <a href="#!">
            <i className="fas fa-envelope-open"></i>{' '}
            &nbsp;truckdispatcher@gmail.com
          </a>
          <br />
          <a href="#!">
            <i className="fas fa-phone"></i> &nbsp;+389 072 544 622
          </a>
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
  apiKey: 'AIzaSyAfL_7q_SUd4OImEC_UjMIgWBF4ut2fnxo'
})(Contact);
