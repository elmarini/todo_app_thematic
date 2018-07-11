import React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';


const StyledSort = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  //justify-content: space-between;
  margin: 0 0 10px;
`;

const StyledButton = styled.button`
  color: ${Colors.gray};
  background: transparent;
  outline: none;
  border: none;
  font-size: 13px;
  margin: 0 0 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline
  }

  &:active {
    color: ${Colors.blue};
  }
`;

const StyledCaption = styled.p`
  color: ${Colors.gray};
  font-size: 13px;
  margin: 0 auto 0 0;
  font-weight: bold;
`;

const Sort = (props) => {
  return (
    <StyledSort>
      <StyledCaption>Sort:</StyledCaption>
      <StyledButton
        children='Name'
        onClick={() => props.setSort('label')}
      />
      <StyledButton
        children='Date'
        onClick={() => props.setSort('date')}
      />
  </StyledSort>
  )
}

export default Sort
