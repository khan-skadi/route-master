import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';

const Footer = props => {
  const { location } = props;

  if (location.pathname.match(/signin/) || location.pathname.match(/signup/)) {
    return null;
  }
  return (
    <footer className="page-footer green accent-4">
      <div className="phantom" />
      <div className="container">
        <div className="row">
          <div className="col s12 l4">
            <h5 className="white-text">Truck Dispatcher</h5>
            <br />
            <a
              href="#!"
              className="brand-logo center"
              style={{ marginLeft: '30px' }}
            >
              <img src={logo} alt="logo" width="108" height="auto" />
            </a>
            <p>We bring you the best trucking solutions !&#174;</p>
            <span className="center valign-wrapper">
              <i className="tiny material-icons">send</i>
              &nbsp;&nbsp;451 Wall Street, UK, London
            </span>
            <span className="center valign-wrapper">
              <i className="tiny material-icons">phone_android</i>
              &nbsp;&nbsp;Phone: (064) 332-1233
            </span>
            <span className="center valign-wrapper">
              <i className="tiny material-icons">mail_outline</i>
              &nbsp;&nbsp;Fax: (099) 453-1357
            </span>
          </div>
          <div className="col s12 l2">
            <h5 className="white-text">Our Stores</h5>
            <ul>
              <li>
                <a
                  className="white-text"
                  href="https://www.google.com/maps/place/Truck+Dispatcher+Trainings+NYC/@40.7511631,-73.9996641,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25997b30bb821:0x768ddfc40dfd39ee!8m2!3d40.7511591!4d-73.9974754"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New York
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  href="https://www.google.com/maps/place/Dispatch+Training/@51.523418,-0.1048795,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b50f86a8e63:0x2e0906ae04a0135a!8m2!3d51.5234147!4d-0.1026908"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  London
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  href="https://www.google.com/maps/place/Dispatch+Transportation+Inc/@34.0021349,-118.1699653,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2cefcff900871:0x59d7b6aa8366dfce!8m2!3d34.0021305!4d-118.1677766"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Los Angeles
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  href="https://www.google.com/maps/place/M+%26+P+Montscher+u+Partner+Internationale+SpeditionsgesmbH/@48.1816174,16.4573891,17z/data=!3m1!4b1!4m5!3m4!1s0x476d0099c68a46d9:0xae40293653441e24!8m2!3d48.1816138!4d16.4595778"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vienna
                </a>
              </li>
              <li>
                <a
                  className="white-text"
                  href="https://www.google.com/maps/place/GPS-Spedition+%26+Logistik+Berlin/@52.4126733,13.3855913,17z/data=!3m1!4b1!4m5!3m4!1s0x47a844de183d0c2b:0xfda03bfd34033578!8m2!3d52.41267!4d13.38778"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Berlin
                </a>
              </li>
            </ul>
          </div>

          <div className="col s12 l2">
            <h5 className="white-text">Useful Links</h5>
            <ul>
              <li>
                <Link to="/about-us" className="white-text">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="white-text">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="white-text">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="white-text">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a className="white-text" href="#!">
                  Our Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="col s12 l4">
            <ul>
              <li>
                <a className="white-text" href="#!">
                  {' '}
                  <h5>Follow</h5>
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.facebook.com/Kartalov"
                  style={socialStyle}
                >
                  <i className="fab fa-facebook left"></i>like
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.instagram.com/khan_skadi/"
                  style={socialStyle}
                >
                  <i className="fab fa-instagram left"></i>follow
                </a>
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://twitter.com/Khan_Skadi"
                  style={socialStyle}
                >
                  <i className="fab fa-twitter left"></i>tweet
                </a>
              </li>
              <li>
                {' '}
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="https://www.youtube.com/user/ImbaWarlord/featured?view_as=subscriber"
                  style={socialStyle}
                >
                  <i className="fab fa-youtube left"></i>subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <span style={{ fontSize: '1em' }}>
            Khan Skadi © 2019 created by Petar Kartalov
          </span>
        </div>
      </div>
    </footer>
  );
};

const socialStyle = {
  width: '150px',
  marginBottom: '4px'
};

export default withRouter(Footer);
