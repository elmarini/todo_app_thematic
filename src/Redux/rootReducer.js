import { combineReducers } from 'redux'
import itemsReducer from './reducers/itemsReducer'
import filterReducer from './reducers/filterReducer'
import formReducer from './reducers/formReducer'
import sortReducer from './reducers/sortReducer'

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  newItem: formReducer,
  sort: sortReducer
})
