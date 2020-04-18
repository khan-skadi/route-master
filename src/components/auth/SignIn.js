import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
      <div className="section signIn">
        <center>
          <h5
            className="yellow-text text-darken-3"
            style={{ marginTop: '10%' }}
          >
            Please login to your account
          </h5>

          <div className="container">
            <div
              className="row z-depth-1 grey lighten-4"
              style={{
                display: 'inline-block',
                padding: '32px 48px 0px 48px',
                border: '1px solid #EEE'
              }}
            >
              <div className="col s12">
                <form
                  onSubmit={this.handleSubmit}
                  style={{ paddingBottom: '20px' }}
                >
                  <div className="input-field">
                    <input
                      className="validate"
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Enter your email</label>
                  </div>

                  <div className="input-field">
                    <input
                      className="validate"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Enter your password</label>

                    <div className="col s12">
                      <label style={{ float: 'right' }}>
                        <a className="pink-text" href="#!">
                          <b>Forgot Password?</b>
                        </a>
                      </label>
                    </div>
                  </div>

                  <br />

                  <button
                    type="submit"
                    name="btn_login"
                    className="btn btn-large waves-effect blue darken-3"
                  >
                    Login
                  </button>
                </form>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </div>
          </div>
          <a href="/signup" className="yellow-text text-darken-3">
            Create an account
          </a>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
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
