import Types from '../types/'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  id: 'date',
  direction: 'asc'
})

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setSortMethod:
      return state.merge({
        id: action.id,
        direction: action.direction
      })
    default:
      return state;
  }
}

export default sortReducer;
