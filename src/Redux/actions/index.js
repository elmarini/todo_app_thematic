import Types from '../types/'

export const setFormValue = (evt) => {
  return ({
    type: Types.setFormValue,
    value: evt.target.value
  })
}

export const setSortMethod = (id, direction) => {
  return ({
    type: Types.setSortMethod,
    id,
    direction
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
