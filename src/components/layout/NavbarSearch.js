import React from "react";

const NavbarSearch = props => {
  return (
    <div>
      <input
        id="search"
        type="search"
        placeholder="Search Active Routes.."
        ref={props.text}
        onChange={props.onChange}
        style={{ width: "20em" }}
      />
    </div>
  );
};

export default NavbarSearch;
