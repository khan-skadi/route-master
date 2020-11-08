import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { truncate } from '../../util/helper';
import adminBackground from '../../assets/img/truck7.png';

const Sidenav = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [lastLogin, setLastLogin] = useState('');
  const [time, setTime] = useState('');

  const { auth, profile, logs, drivers } = props;

  useEffect(() => {
    if (!profile.isEmpty) {
      setFirstName(
        profile.firstName.charAt(0).toUpperCase() +
          profile.firstName.substring(1)
      );
      setLastName(
        profile.lastName.charAt(0).toUpperCase() + profile.lastName.substring(1)
      );
      setImage(profile.photoURL);
    }
    if (auth) {
      setLastLogin(auth.lastLoginAt);
    }

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [
    profile.isEmpty,
    profile.firstName,
    profile.lastName,
    profile.photoURL,
    auth
  ]);

  return (
    <div className="wrap">
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src={adminBackground}
                alt="admin profile background truck sidebar"
              />
            </div>
            <a href="#!">
              <img className="circle" src={image} alt="admin profile sidebar" />
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
        <li
          className="sidenav-text header center blue lighten-4"
          style={{ marginTop: '-10px', fontSize: '1.1rem', fontWeight: '500' }}
        >
          Admin Sidebar
        </li>

        <li>
          <a href="#add-admin-image" className="modal-trigger">
            <i className="material-icons">add</i>Add profile image
          </a>
        </li>
        <li>
          <a href="#edit-admin-details" className="modal-trigger">
            <i className="material-icons">edit</i>Edit details
          </a>
        </li>

        <div className="divider"></div>

        <li
          className="sidenav-text header center blue lighten-4"
          style={{ fontSize: '1.1rem', fontWeight: '500' }}
        >
          Admin Information
        </li>
        <li className="sidenav-text">
          Name:{' '}
          <span className="blue-text text-darken-3">
            {profile.firstName} {profile.lastName}
          </span>
        </li>
        <li>
          <a href={`mailto: ${auth.email}`}>
            Email: <span className="blue-text text-darken-3">{auth.email}</span>
          </a>
        </li>
        <li className="sidenav-text">
          Last login:{' '}
          <span className="blue-text text-darken-3">
            {new Date(lastLogin * 1000).toLocaleTimeString()}
          </span>
        </li>

        <div className="divider"></div>

        <li
          className="sidenav-text header center blue lighten-4"
          style={{ fontSize: '1.1rem', fontWeight: '500' }}
        >
          Admin Shortlist
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header" href="#!">
                Active Routes<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  {logs &&
                    logs.map((log) => (
                      <li key={log.id}>
                        <a
                          className={`modal-trigger ${
                            log.attention
                              ? 'red-text'
                              : log.progress
                              ? 'green-text'
                              : 'blue-text'
                          }`}
                          href="#edit-log-modal"
                        >
                          {truncate(log.locationFrom, 6)} -{' '}
                          {truncate(log.locationTo, 6)}{' '}
                          <span
                            className="blue-text text-darken-3"
                            style={{ float: 'right' }}
                          >
                            | {log.driver}
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header" href="#!">
                Available Drivers
                <i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  {drivers &&
                    drivers
                      .filter((driver) =>
                        driver.available === true ? driver : false
                      )
                      .map((driver) => (
                        <li key={driver.license}>
                          <a
                            href={`/drivers/${driver.id}`}
                            className="blue-text text-darken-3"
                          >
                            {truncate(driver.id, 16)}
                          </a>
                        </li>
                      ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="bottom">
          <span className="sidenav-text">{`${new Date().toLocaleDateString()}`}</span>{' '}
          <span className="sidenav-text">{time}</span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
  logs: state.firestore.ordered.logs,
  drivers: state.firestore.ordered.drivers
});

export default connect(mapStateToProps)(Sidenav);
