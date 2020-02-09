import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    // Route Guard
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <main>
        <center>
          {/* <img
            className="responsive-img"
            style={{ width: "300px" }}
            src="https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif"
            alt=""
          /> */}
          <div className="section"></div>

          <h5 className="yellow-text text-darken-3">Create an account</h5>
          <div className="section"></div>

          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "32px 48px 0px 48px",
                border: "1px solid #EEE",
                width: "450px"
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
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>

                <br />
                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect yellow darken-3"
                    >
                      Create account
                    </button>
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
      </main>
      // <div className="container">
      //   <form onSubmit={this.handleSubmit} className="white">
      //     <h5 className="grey-text text-darken-3">Sign Up</h5>
      //     <div className="input-field">
      //       <label htmlFor="email">Email</label>
      //       <input type="email" id="email" onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="password">Password</label>
      //       <input type="password" id="password" onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="firstName">First Name</label>
      //       <input type="text" id="firstName" onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="lastName">Last Name</label>
      //       <input type="text" id="lastName" onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
      //       <div className="red-text center">
      //         {authError ? <p>{authError}</p> : null}
      //       </div>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
