import { connect } from 'react-redux';
import { inactiveHouse } from '../actions';
import { deleteHouse } from '../actions';
import HouseList from '../components/HouseList';

const mapStateToProps = function (state){
  console.log('state.houses', state.houses);
  return ({
    houses: state.houses
  });
}

const mapDispatchToProps = function (dispatch){
  return ({
    inactiveHouse: id => dispatch(inactiveHouse(id)),
    deleteHouse: id => dispatch(deleteHouse(id))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseList);
