import React from 'react';
import {
  Wrapper,
  Caption,
  Button
} from './styles'

const Sort = ({
  setSort,
  options
}) => {
  const sort = (sortBy) => {
    let direction = 'asc';
    if (sortBy === options.id) {
      direction = options.direction === 'asc' ? 'desc' : 'asc';
    }
    setSort(sortBy, direction);
  };

  const getArrow = (sortBy) => {
    const arrowMap = {
      asc: '\u25B2',
      desc: '\u25BC'
    };
    if (options.id === sortBy) {
      return arrowMap[options.direction];
    }
    return '';
  };

  return (
    <Wrapper>
      <Caption>
        Sort:
      </Caption>
      <Button
        active={options.id === 'label'}
        onClick={() => sort('label')}
      >
        Name
        {getArrow('label')}
      </Button>
      <Button
        active={options.id === 'date'}
        onClick={() => sort('date')}
      >
        Date
        {getArrow('date')}
      </Button>
    </Wrapper>
  );
};

export default Sort;
