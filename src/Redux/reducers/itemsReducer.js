import Types from '../types/'
import Immutable, { fromJS } from 'immutable'
import data from '../../data.json'

const initialState = fromJS(data)

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.addItem:
      return state.push(Immutable.Map({
        label: action.newItem.get('label'),
        completed: false,
        date: Date.now()
      }))
    case Types.toggleItem:
      return state.update(action.index, (item) => {
        return item.set('completed', !item.completed)
      })
    case Types.removeItem:
      return state.remove(action.index)
    default:
      return state;
  }
}

export default itemsReducer;
