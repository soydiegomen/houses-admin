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
