import Immutable from 'immutable';
import Types from '../types'

const initialState = Immutable.Map({
  by: 'date',
  direction: 'asc'
})

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setSortMethod:
      return state.merge({
        by: action.by,
        direction: action.direction
      })
    default:
      return state;
  }
}

export default sortReducer;
