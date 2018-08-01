
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

let store = createStore(reducer)

export default store
