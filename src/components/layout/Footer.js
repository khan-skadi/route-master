import React from "react";
import logo from "../../img/Logo.png";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="page-footer footer green accent-4">
      <div className="container">
        <div className="row">
          <div className="col s12 l4">
            <h5 className="white-text">Truck Dispatcher</h5>
            <br />
            <a
              href="#!"
              className="brand-logo center"
              style={{ marginLeft: "30px" }}
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
                <a className="grey-text text-lighten-3" href="#!">
                  New York
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  London
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Los Angeles
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Vienna
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Berlin
                </a>
              </li>
            </ul>
          </div>

          <div className="col s12 l2">
            <h5 className="white-text">Useful Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Latest News
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Our Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="col s12 l4 center">
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  {" "}
                  <h5>Follow us </h5>
                </a>
              </li>
              <li style={{ marginBottom: "4px" }}>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="#!"
                  style={{
                    width: "50px",
                    marginRight: "4px"
                  }}
                >
                  <i className="fab fa-facebook left"></i>
                </a>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="#!"
                  style={{ width: "50px" }}
                >
                  <i className="fab fa-instagram left"></i>follow
                </a>
              </li>
              <li style={{ marginBottom: "4px" }}>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="#!"
                  style={{ width: "50px", marginRight: "4px" }}
                >
                  <i className="fab fa-twitter left"></i>tweet
                </a>
                <a
                  className="waves-effect waves-light btn blue darken-2"
                  href="#!"
                  style={{ width: "50px" }}
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
          <span style={{ fontSize: "0.9em" }}>
            Khan Skadi © 2019 created by Petar Kartalov
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
