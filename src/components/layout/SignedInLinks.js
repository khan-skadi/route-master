import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchbarDrivers from '../drivers/SearchbarDrivers.js';

const SignedInLinks = props => {
  const { drivers } = props;

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    for (let i = 0; i < dropdowns.length; i++) {
      M.Dropdown.init(dropdowns[i]);
    }
  }, []);

  return (
    <ul className="right">
      <li>
        <a
          className="dropdown-trigger btn blue darken-2"
          href="#!"
          data-target="driversListNavbar"
        >
          Drivers<i className="material-icons right">arrow_drop_down</i>
        </a>
        <ul id="driversListNavbar" className="dropdown-content">
          {drivers &&
            drivers.map(driver => (
              <SearchbarDrivers driver={driver} key={driver.id} />
            ))}
        </ul>
      </li>
      <li>
        <NavLink to="/archived-routes" activeStyle={backgroundStyle}>
          Archived Routes
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <div>
          <a
            href="/"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
            style={iconStyle}
          >
            {props.profile.initials}
          </a>
        </div>
      </li>
    </ul>
  );
};

const backgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };

const iconStyle = {
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-block',
  overflow: 'hidden',
  verticalAlign: 'middle',
  height: '48px',
  width: '48px',
  borderRadius: '50%',
  backgroundColor: '#1976d2',
  letterSpacing: '0.5px',
  textAlign: 'center',
  lineHeight: '48px',
  fontSize: '14px',
  padding: '0',
  zIndex: '1',
  color: '#fff',
  textDecoration: 'none',
  outline: '0',
  border: 'none',
  textTransform: 'uppercase',
  boxShadow:
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  transition: '.3s ease-out',
  WebkitTapHighlightColor: 'transparent',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontWeight: 'normal',
  marginTop: '8px'
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut(dispatch))
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
