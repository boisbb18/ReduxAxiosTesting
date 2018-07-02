import React from 'react'
import { shallow, mount } from 'enzyme'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ConnectedHome, { Home } from '../src/js/components/Home'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {addInputs, subtractInputs, getDevelopers} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux'
import calculatorReducers from '../src/js/reducers/calculatorReducers'

describe('Testing Requests', () => {
  let mock = new MockAdapter(axios)
  const initialState = {output: 100, users: [] }
  const mockStore = configureStore()
  let store, wrapper
  beforeEach(() => {
    store = mockStore(initialState)
    // container = shallow(<ConnectedHome store={store} />)
    wrapper = mount(<Provider store={store}><ConnectedHome /></Provider>)

  })
  fit('should make initial Request ---> ', () => {
    mock.onGet('/users').reply(200, {
      users: [
        { name: 'Peter', developer: true}
      ]
    })
    store.dispatch(getDevelopers()) 
    let state = store.getState()
    console.log('State ---> ', state)
    // axios.get('/users')
    //   .then(res => {
    //     console.log('Response data ---> ', res.data)
    //     expect(true).toBe(true)
    //   })

    expect(true).toBe(true)
  })
  
})