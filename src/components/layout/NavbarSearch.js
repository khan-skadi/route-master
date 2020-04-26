import React from 'react';

const NavbarSearch = props => {
  const { text, onChange } = props;

  return (
    <div className="input-field">
      <input
        id="search"
        type="search"
        placeholder="Search Active Routes.."
        ref={text}
        onChange={onChange}
        style={{ width: '20em' }}
      />
      <label className="label-icon" htmlFor="search">
        <i className="material-icons">search</i>
      </label>
      <i className="material-icons">close</i>
    </div>
  );
};

export default NavbarSearch;
