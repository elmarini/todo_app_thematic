import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 15px;
`;

const StyledLabel = styled.p`
  display: inline;
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: ${Colors.blue};
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${Colors.red};
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
    color: ${Colors.red_darker};
  }
`;

const Item = ({
  label,
  index,
  completed,
  removeItem,
  toggleItem
}) => (
  <StyledItem>
    <label htmlFor={`cb_${index}`}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleItem(index)}
        id={`cb_${index}`}
      />
      <StyledLabel>
        {label}
      </StyledLabel>
    </label>
    <StyledButton onClick={() => removeItem(index)}>
      x
    </StyledButton>
  </StyledItem>
);

export default Item;
