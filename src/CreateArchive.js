import React, { Component } from "react";
import { connect } from "react-redux";
import { createArchive } from "./store/archivesActions.js";

class CreateArchive extends Component {
  state = {
    locationFrom: "",
    locationTo: "",
    distance: 0,
    postedBy: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    this.props.createArchive(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Archive</h5>
          <div className="input-field">
            <input type="text" id="locationFrom" onChange={this.handleChange} />
            <label htmlFor="locationFrom">Location From</label>
          </div>
          <div className="input-field">
            <input type="text" id="locationTo" onChange={this.handleChange} />
            <label htmlFor="locationTo">Location To</label>
          </div>
          <div className="input-field">
            <input type="number" id="distance" onChange={this.handleChange} />
            <label htmlFor="distance">Distance</label>
          </div>
          <div className="input-field">
            <input type="text" id="postedBy" onChange={this.handleChange} />
            <label htmlFor="postedBy">Posted By</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create Archive</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArchive: (archive) => dispatch(createArchive(archive)),
  };
};

export default connect(null, mapDispatchToProps)(CreateArchive);
