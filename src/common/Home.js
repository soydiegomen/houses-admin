import React, { Component } from 'react';
import AddHouse from '../containers/AddHouse';
import VisibleHouseList from '../containers/VisibleHouseList';

class Home extends Component {
	render() {
    	return (
    		<div className="App">
      		<h1>Hellow word!</h1>
					<div>
						<AddHouse />
						<VisibleHouseList />
					</div>
      	</div>

	    );
  	}
}

export default Home;
