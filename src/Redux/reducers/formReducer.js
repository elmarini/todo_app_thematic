import Types from '../types/'
import Immutable from 'immutable'


const initialState = Immutable.Map({
  label: ''
})

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setFormValue:
      return state.set('label', action.value)
    default:
      return state;
  }
}

export default formReducer;
