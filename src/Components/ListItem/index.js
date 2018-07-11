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

Item.defaultProps = {
  label: '',
  index: 0,
  completed: false,
  removeItem: () => {},
  toggleItem: () => {}
}

Item.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string,
  completed: PropTypes.bool,
  removeItem: PropTypes.func,
  toggleItem: PropTypes.func
}

export default Item;
