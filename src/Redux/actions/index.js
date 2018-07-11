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

export const toggleItem = index => ({
  type: Types.toggleItem,
  index
})

export const removeItem = index => ({
  type: Types.removeItem,
  index
})
