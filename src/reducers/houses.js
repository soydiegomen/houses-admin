const houses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOUSE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          address: action.address,
          price: action.price,
          isActive: action.isActive
        }
      ];
    case 'INACTIVE_HOUSE':
      return state.map(house =>
        (house.id === action.id)
          ? {...house, isActive: false}
          : house
      );
    case 'DELETE_HOUSE':
      return state.filter(house => house.id !== action.id);
    default:
      return state
  }
}
export default houses;
