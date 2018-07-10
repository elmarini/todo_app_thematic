import Types from '../types/'

export const setFilter = (evt) => {
  return ({
    type: Types.setFilter,
    filter: evt.target.value
  })
}

export const setFormValue = (evt) => {
  return ({
    type: Types.setFormValue,
    value: evt.target.value
  })
}

export const addItem = (label) => {
  return ({
    type: Types.addItem,
    label
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
