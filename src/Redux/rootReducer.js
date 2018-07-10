import { combineReducers } from 'redux'
import itemsReducer from './reducers/itemsReducer'
import filterReducer from './reducers/filterReducer'
import formReducer from './reducers/formReducer'

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  newItemLabel: formReducer
})
