import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Label,
  Button
} from './styles'

const Item = ({
  label,
  index,
  completed,
  removeItem,
  toggleItem
}) => (
  <Wrapper>
    <label htmlFor={`cb_${index}`}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleItem(index)}
        id={`cb_${index}`}
      />
      <Label>
        {label}
      </Label>
    </label>
    <Button onClick={() => removeItem(index)}>
      x
    </Button>
  </Wrapper>
);

export default Item;
