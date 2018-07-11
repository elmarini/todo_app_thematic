import React from 'react';
import {
  Wrapper,
  Input,
  Button
} from './styles';

const Form = ({
  value,
  onChange,
  addItem
}) => (
  <Wrapper onSubmit={e => e.preventDefault()}>
    <Input
      type="text"
      value={value}
      placeholder="Add Item"
      onChange={onChange}
    />
    <Button onClick={addItem}>
      Add
    </Button>
  </Wrapper>
);

export default Form
