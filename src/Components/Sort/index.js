import React from 'react';
import PropTypes from 'prop-types';
import {
  sort,
  getArrow
} from './helpers'
import {
  Wrapper,
  Caption,
  Button
} from './styles'

const Sort = ({
  setSort,
  options
}) => (
  <Wrapper>
    <Caption>
      Sort:
    </Caption>
    <Button
      active={options.by === 'label'}
      onClick={() => sort('label', options, setSort)}
    >
      Name
      {getArrow('label', options)}
    </Button>
    <Button
      active={options.by === 'date'}
      onClick={() => sort('date', options, setSort)}
    >
      Date
      {getArrow('date', options)}
    </Button>
  </Wrapper>
);

Sort.defaultProps = {
  setSort: () => {},
  options: {
    by: 'date',
    direction: 'asc'
  }
}

Sort.propTypes = {
  setSort: PropTypes.func,
  options: PropTypes.shape({
    by: PropTypes.string,
    direction: PropTypes.string
  })
}

export default Sort;
