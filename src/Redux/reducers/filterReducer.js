import Types from '../types/'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  terms: ''
})

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setFilter:
      return state.set('terms', action.value)
    default:
      return state;
  }
}

export default filterReducer;
