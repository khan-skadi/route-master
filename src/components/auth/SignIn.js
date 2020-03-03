import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";
import "../../App.css";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    // Route Guard
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <main className="signIn">
        <center>
          <div className="section"></div>

          <h5 className="yellow-text text-darken-3">
            Please login to your account
          </h5>
          <div className="section"></div>

          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "32px 48px 0px 48px",
                border: "1px solid #EEE"
              }}
            >
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12"></div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Enter your email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Enter your password</label>
                  </div>
                  <label style={{ float: "right" }}>
                    <a className="pink-text" href="#!">
                      <b>Forgot Password?</b>
                    </a>
                  </label>
                </div>

                <br />
                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect yellow darken-3"
                    >
                      Login
                    </button>
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </div>
                </center>
              </form>
            </div>
          </div>
          <a href="/signup">Create an account</a>
        </center>

        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
