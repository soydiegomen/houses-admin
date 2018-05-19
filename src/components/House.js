import React, { Component } from 'react';
import PropTypes from 'prop-types';

class House extends Component {

  renderInactiveButton = function (isActive){
    if(isActive){
      return (<a onClick={this.props.onClickInactive}>Inactive</a> );
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.price}</td>
        <td>{this.props.isActive ? 'true' : 'false'}</td>
        <td>
          { this.renderInactiveButton(this.props.isActive) }
          <a>Delete</a></td>
      </tr>
    );
  }
}

House.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default House;
