import Types from '../types/'

const formReducer = (state = '', action) => {
  switch (action.type) {
    case Types.setFormValue:
      return action.value
    default:
      return state;
  }
}

export default formReducer;
