import React from 'react';
import { connect } from 'react-redux';
import { deleteDriver } from '../../store/actions/driverActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';

const DriverListItem = ({
  driver: { id, firstName, lastName },
  deleteDriver
}) => {
  const onDelete = () => {
    deleteDriver(id);
    M.toast({ html: `${firstName} ${lastName} removed from drivers` });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">remove driver</i>
        </a>
      </div>
    </li>
  );
};

DriverListItem.propTypes = {
  driver: PropTypes.object.isRequired,
  deleteDriver: PropTypes.func.isRequired
};

export default connect(null, { deleteDriver })(DriverListItem);
