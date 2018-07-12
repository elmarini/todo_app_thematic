import React from 'react';
import PropTypes from 'prop-types';
import { sortItems } from './helpers';
import ListItem from '../../Components/ListItem';
import List from '../../Components/List';
import Title from '../../Components/Title';
import Sort from '../../Components/Sort';
import Form from '../../Components/Form';
import enhance from './enhance'
import {
  Wrapper,
  Content
} from './styles'

const TodoList = ({
  items,
  toggleItem,
  removeItem,
  newItem,
  sort,
  addItem,
  setFormValue,
  setSortMethod
}) => {
  const sortedItems = sortItems(items, sort);

  const listItems = sortedItems.map(item => (
    <ListItem
      id={item.id}
      key={item.id}
      label={item.label}
      completed={item.completed}
      toggleItem={toggleItem}
      removeItem={removeItem}
    />
  ));

  return (
    <Wrapper>
      <Title>
        Grocery List
      </Title>
      <Content>
        <Sort
          setSort={setSortMethod}
          options={sort}
        />
        <List>
          {listItems}
        </List>
        <Form
          value={newItem.label}
          onChange={setFormValue}
          addItem={addItem}
        />
      </Content>
    </Wrapper>
  );
};

TodoList.defaultProps = {
  items: [],
  toggleItem: () => {},
  removeItem: () => {},
  newItem: {
    label: ''
  },
  sort: {
    by: 'date',
    direction: 'asc'
  },
  addItem: () => {},
  setFormValue: () => {},
  setSortMethod: () => {}
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      date: PropTypes.number,
      completed: PropTypes.bool
    })
  ),
  toggleItem: PropTypes.func,
  removeItem: PropTypes.func,
  newItem: PropTypes.shape({
    label: PropTypes.string
  }),
  sort: PropTypes.shape({
    by: PropTypes.string,
    direction: PropTypes.string
  }),
  addItem: PropTypes.func,
  setFormValue: PropTypes.func,
  setSortMethod: PropTypes.func
}

export default enhance(TodoList)
