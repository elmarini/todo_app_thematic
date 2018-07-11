import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../Components/toJS';
import {
  setFormValue,
  setSortMethod,
  addItem,
  removeItem,
  toggleItem,
} from '../../Redux/actions';
import { sortItems } from './helpers';
import ListItem from '../../Components/ListItem';
import List from '../../Components/List';
import Title from '../../Components/Title';
import Sort from '../../Components/Sort';
import Form from '../../Components/Form';
import {
  Wrapper,
  Content
} from './styles'

const TodoList = ({
  items,
  toggleItem,
  removeItem,
  form,
  sort,
  addItem,
  setFormValue,
  setSortMethod
}) => {
  const sortedItems = sortItems(items, sort);

  const listItems = sortedItems.map((item, index) => (
    <ListItem
      index={index}
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
          active={sort.id}
        />
        <List>
          {listItems}
        </List>
        <Form
          value={form}
          onChange={setFormValue}
          addItem={addItem}
        />
      </Content>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  sort: state.sort,
  newItem: state.newItem,
  items: state.items,
});

const mapDispatchToProps = ({
  setFormValue,
  setSortMethod,
  addItem,
  removeItem,
  toggleItem,
});

const mergeProps = (state, dispatch) => ({
  ...state,
  ...dispatch,
  addItem: () => dispatch.addItem(state.newItem),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(toJS(TodoList));
