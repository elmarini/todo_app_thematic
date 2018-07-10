import Types from '../types/'

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case Types.setFilter:
      return action.filter
    default:
      return state;
  }
}

export default filterReducer;
