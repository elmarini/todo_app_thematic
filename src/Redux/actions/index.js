// eslint-disable-next-line import/prefer-default-export
import Types from '../types'

export const setFormValue = evt => ({
  type: Types.setFormValue,
  value: evt.target.value
})

export const setSortMethod = (by, direction) => ({
  type: Types.setSortMethod,
  by,
  direction
})

export const addItem = newItem => ({
  type: Types.addItem,
  newItem
})

export const toggleItem = id => ({
  type: Types.toggleItem,
  id
})

export const removeItem = id => ({
  type: Types.removeItem,
  id
})
