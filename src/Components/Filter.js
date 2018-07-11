import React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const StyledFilter = styled.input`
  color: #000;
  position: absolute;
  top: 30px;
  right: 50px;
  font-size: 16px;
  background: transparent;
  border: 1px solid ${Colors.gray_lighter};
  width: 150px;
  margin: 0 0 5px;
  padding: 3px 5px 3px;

  &:focus {
    outline: none;
  }
`;


const Filter = (props) => {
  return (
    <div>
      <StyledFilter
        type='text'
        value={props.filter}
        placeholder='Filter'
        onChange={props.onChange}
      />
    </div>
  )
}

export default Filter
