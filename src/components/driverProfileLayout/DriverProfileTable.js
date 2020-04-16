import React, { Component } from 'react';
import './table.css';

class DriverProfileTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [props.driver.completedRoutes]
    };
  }

  renderTableData() {
    return this.state.routes[0].map((route, index) => {
      const { locationFrom, locationTo, distance, price, postedOn } = route;
      return (
        <tr className="z-depth-2" key={index}>
          <td style={{ marginBottom: '20px', padding: '25px' }}>
            {locationFrom}
          </td>
          <td style={{ marginBottom: '20px', padding: '25px' }}>
            {locationTo}
          </td>
          <td style={{ marginBottom: '20px', padding: '25px' }}>{distance}</td>
          <td style={{ marginBottom: '20px', padding: '25px' }}>{price}</td>
          <td style={{ marginBottom: '20px', padding: '25px' }}>{postedOn}</td>
          <td style={{ marginBottom: '20px', padding: '25px' }}>
            {' '}
            <a
              href="#!"
              className="btn waves-effect waves-light green accent-4"
            >
              Finished
              <i className="material-icons right">assignment_turned_in</i>
            </a>
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = [
      'Location From',
      'Location To',
      'Distance',
      'Price',
      'Posted On',
      'Signed'
    ];
    return header.map((key, index) => {
      return (
        <th
          style={{
            backgroundColor: '#eee',
            borderCollapse: 'collapse',
            paddingTop: '-15px',
            borderRadius: '0',
            zIndex: '1'
          }}
          key={index}
        >
          {key}
        </th>
      );
    });
  }

  render() {
    return (
      <table id="students">
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    );
  }
}

export default DriverProfileTable;
