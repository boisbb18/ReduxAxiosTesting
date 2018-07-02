// it('should be true', () => {
//   expect(true).toBe(true)
// })
import React from 'react'
import { shallow, mount } from 'enzyme'
import ConnectedHome, { Home } from '../src/js/components/Home'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {addInputs, subtractInputs} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux'
import calculatorReducers from '../src/js/reducers/calculatorReducers'


describe("HOME ---REACT-REDUX(Mount+ passing store directlu)" ,() => {
  const initialState = {output: 100 }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    // container = shallow(<ConnectedHome store={store} />)
    wrapper = mount(<Provider store={store}><ConnectedHome /></Provider>)

  })

  it('shouw check Prop matches with initialState', () => {
    expect(wrapper.find(Home).prop('output')).toBe(initialState.output)
  })

  it('should check action on dispatching', () => {
    let action
    store.dispatch(addInputs(500))
    store.dispatch(subtractInputs(100))
    action = store.getActions()
    console.log('Actions ----> ', action)
    expect(action[0].type).toBe('ADD_INPUTS')
    expect(action[1].type).toBe('SUBTRACT_INPUTS')
  })

  it('SHould Add 100 to output', () => {
    store.dispatch(addInputs(100))
    expect(wrapper.find('Home').prop('output')).toBe(100)
  })
})