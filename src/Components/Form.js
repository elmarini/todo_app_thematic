import React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: #000;
  font-size: 24px;
`;

const StyledButton = styled.button`
  background-color: ${Colors.blue};
  border-radius: 6px;
  color: ${Colors.transparent_white};
  font-size: 18px;
  padding: 10px 25px 10px;

  &:focus {
    outline: none;
    background: ${Colors.blue_lighter};
  }
`;

const StyledInput = styled.input`
  color: #000;
  font-size: 18px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${Colors.gray_lighter};
  width: 120px;
  margin: 5px 10px 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.gray};
    font-size: 11px;
    margin-bottom: 5px;
  }
`;

const Form = (props) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        type='text'
        value={props.value}
        placeholder='Add Item'
        onChange={props.onChange}
      />
      <StyledButton
        onClick={props.addItem}
        children='Add'
      />
    </StyledForm>
  )
}

export default Form
