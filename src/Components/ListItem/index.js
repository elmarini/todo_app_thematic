import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Label,
  Button
} from './styles'

const Item = ({
  id,
  label,
  completed,
  removeItem,
  toggleItem
}) => (
  <Wrapper>
    <label htmlFor={`cb_${id}`}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleItem(id)}
        id={`cb_${id}`}
      />
      <Label>
        {label}
      </Label>
    </label>
    <Button onClick={() => removeItem(id)}>
      x
    </Button>
  </Wrapper>
);

Item.defaultProps = {
  id: 0,
  label: '',
  completed: false,
  removeItem: () => {},
  toggleItem: () => {}
}

Item.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  completed: PropTypes.bool,
  removeItem: PropTypes.func,
  toggleItem: PropTypes.func
}

export default Item;
