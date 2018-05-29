const keyword = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_KEYWORD':
      return action.keyword;
    default:
      return state
  }
}
export default keyword;
