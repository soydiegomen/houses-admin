import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
//Redux setup
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

//CSS
import './index.css';
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    projectId: "curso-reactjs"
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
	 <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
