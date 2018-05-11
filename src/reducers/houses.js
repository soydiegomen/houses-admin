const houses = (state = [], action) => {
  console.log('isActive', action.isActive);
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
      ]
    default:
      return state
  }
}
export default houses;
