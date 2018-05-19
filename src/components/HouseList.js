import React, { Component } from 'react';
import PropTypes from 'prop-types';
import House from './House';

class HouseList extends Component {
  render() {
    let houses = this.props.houses;
    let inactiveHouse = this.props.inactiveHouse;
    let deleteHouse = this.props.deleteHouse;

    return (
      <table className="house-list">
        <tbody>
          {houses.map(house =>
            <House
              key={house.id}
              {...house}
              onClickInactive={ () => deleteHouse(house.id)}
            />
          )}
        </tbody>
      </table>
    );
  }
}

HouseList.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

export default HouseList;
