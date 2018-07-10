import Types from '../types/'
import { fromJS } from 'immutable'
import initialValues from '../../data.json'


//const initialValues = fromJS(data)

const itemsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case Types.addItem :
      return [...state, { label: action.label, completed: false }]
    case Types.toggleItem:
      const copiedArray = state.slice(0)
      copiedArray[action.index].completed = !copiedArray[action.index].completed
      return copiedArray;
    case Types.removeItem:
      const beforeRemoved = state.slice(0, action.index)
      const afterRemoved = state.slice(action.index + 1)
      console.log('before', beforeRemoved, 'after', afterRemoved)
      return [...beforeRemoved, ...afterRemoved]
    default:
      return state;
  }
}

export default itemsReducer;
