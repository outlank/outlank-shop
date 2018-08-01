import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

const todoApp = combineReducers({
  cartReducer
})

export default todoApp
