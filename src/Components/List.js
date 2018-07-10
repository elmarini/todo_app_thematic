import React from 'react';
import styled from 'styled-components';

const StyledList1 = styled.div`
  border: blue 2px solid;
`;

const List = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default List
