import React, { Component } from 'react';
import AddHouse from '../containers/AddHouse';
import VisibleHouseList from '../containers/VisibleHouseList';
import Footer from '../containers/Footer';

class Home extends Component {
	render() {
    	return (
    		<div className="App">
      		<h1>Hellow word!</h1>
					<div>
						<AddHouse />
						<VisibleHouseList />
						<Footer />
					</div>
      	</div>

	    );
  	}
}

export default Home;
