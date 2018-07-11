import React from 'react';
import PropTypes from 'prop-types';
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

Form.defaultProps = {
  value: '',
  onChange: () => {},
  addItem: () => {}
}

Form.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  addItem: PropTypes.func
}

export default Form;
