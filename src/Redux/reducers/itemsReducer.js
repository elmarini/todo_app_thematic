import Immutable, { fromJS } from 'immutable'
import Types from '../types'
import data from '../../data.json'

const initialState = fromJS(data)

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.addItem:
      return state.push(Immutable.Map({
        label: action.newItem.get('label'),
        completed: false,
        date: Date.now(),
        id: Date.now()
      }))
    case Types.toggleItem:
      return state.update(action.index, item => item.set('completed', !item.completed))
    case Types.removeItem:
      return state.remove(action.index)
    default:
      return state;
  }
}

export default itemsReducer;
