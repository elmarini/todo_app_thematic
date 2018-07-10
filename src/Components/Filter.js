import React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const StyledFilter = styled.input`
  color: #000;
  font-size: 18px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${Colors.gray_lighter};
  width: 100%;
  margin: 0 0 5px;

  &:focus {
    outline: none;
  }
`;

const StyledCaption = styled.p`
  color: ${Colors.gray};
  font-size: 13px;
  margin: 0 0 10px;
`;

const Filter = (props) => {
  return (
    <div>
      <StyledFilter
        type='text'
        value={props.filter}
        onChange={props.onChange}
      />
      <StyledCaption>Sort</StyledCaption>
    </div>
  )
}

export default Filter
