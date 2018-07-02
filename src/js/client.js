import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './store.js'
// import calculatorReducers from './reducers/calculatorReducers'
import Layout from "./components/Layout";

const app = document.getElementById('app')

// const store = createStore(calculatorReducers)
console.log('Store ---> ', store)
ReactDOM.render(
	<Provider store={store}>
		<Layout/>
	</Provider>
	, app);

