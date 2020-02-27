import React from "react";

const EditProfileDetails = () => {
  const onSubmit = e => {
    console.log("admin profile details edited");
  };

  return (
    <div id="edit-profile-details" className="modal">
      <div className="modal-content">
        <div className="col s12">
          <h4>edit admin profile</h4>
          <p>details to be edited</p>
        </div>
      </div>

      <div className="col s12">
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue darken-2 btn"
          >
            Submit
            <i className="material-icons right">send</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDetails;
