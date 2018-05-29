import { connect } from 'react-redux';
import { inactiveHouse } from '../actions';
import { deleteHouse } from '../actions';
import HouseList from '../components/HouseList';

const getHouses = function (houses, keyword){
  console.log('keyword', keyword);
  if(keyword){
    return houses.filter(h => h.title === keyword);
  }else{
    return houses;
  }
}

const mapStateToProps = function (state){
  return ({
    houses: getHouses(state.houses, state.keyword)
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
