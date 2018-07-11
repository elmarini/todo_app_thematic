import Types from '../types/'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  id: 0
})

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setSortMethod:
      return state.set('id', action.id)
    default:
      return state;
  }
}

export default sortReducer;
