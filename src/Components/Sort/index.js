import React from 'react';
import {
  Wrapper,
  Caption,
  Button
} from './styles'

const Sort = ({
  setSort,
  active
}) => (
  <Wrapper>
    <Caption>
      Sort:
    </Caption>
    <Button
      active={active === 'label'}
      onClick={() => setSort('label')}
    >
      Name
    </Button>
    <Button
      active={active === 'date'}
      onClick={() => setSort('date')}
    >
      Date
    </Button>
  </Wrapper>
);

export default Sort;
