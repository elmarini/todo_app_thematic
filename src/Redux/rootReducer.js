import { combineReducers } from 'redux'
import itemsReducer from './reducers/itemsReducer'
import formReducer from './reducers/formReducer'
import sortReducer from './reducers/sortReducer'

export default combineReducers({
  items: itemsReducer,
  newItem: formReducer,
  sort: sortReducer
})
