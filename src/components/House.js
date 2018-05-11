import React, { Component } from 'react';
import PropTypes from 'prop-types';

class House extends Component {
  render() {
    return (
      <li>
        {this.props.id} - {this.props.title} - {this.props.price} - {this.props.isActive ? 'true' : 'false'}
        <a>x</a>
      </li>
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
