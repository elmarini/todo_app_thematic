import Types from '../types/'

export const setFormValue = (evt) => {
  return ({
    type: Types.setFormValue,
    value: evt.target.value
  })
}

export const setSortMethod = (id) => {
  return ({
    type: Types.setSortMethod,
    id
  })
}

export const addItem = (newItem) => {
  return ({
    type: Types.addItem,
    newItem
  })
}

export const toggleItem = (index) => {
  return ({
    type: Types.toggleItem,
    index
  })
}

export const removeItem = (index) => {
  return ({
    type: Types.removeItem,
    index
  })
}
