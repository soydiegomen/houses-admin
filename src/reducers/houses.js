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
          isActive: true,
        }
      ]
    default:
      return state
  }
}
export default houses;
