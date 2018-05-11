import { connect } from 'react-redux';
import HouseList from '../components/HouseList';

const mapStateToProps = function (state){
  console.log('state.houses', state.houses);
  return ({
    houses: state.houses
  });
}
/*
const mapDispatchToProps = function (dispatch){
  return ({
    toggleTodo: id => dispatch(toggleTodo(id))
  });
}
*/

export default connect(
  mapStateToProps
)(HouseList);
