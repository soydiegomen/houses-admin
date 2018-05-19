let nextHouseId = 0;
export const addHouse = function (title, address, price) {
  return {
    type: 'ADD_HOUSE',
    id: nextHouseId++,
    title,
    address,
    price: Number(price),
    isActive: true
  };
}

export const inactiveHouse = function (id) {
  return {
    type: 'INACTIVE_HOUSE',
    id
  };
}

export const deleteHouse = function (id) {
    return {
      type: 'DELETE_HOUSE',
      id
    };
}
