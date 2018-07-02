import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { create } from 'domain';
import calculatorReducers from './reducers/calculatorReducers'

const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json'
})

let store = createStore(
  calculatorReducers,
  applyMiddleware(axiosMiddleware(client))
)

export default store
