import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { toJS } from '../../Components/toJS';
import {
  setFilter,
  setFormValue,
  setSortMethod,
  addItem,
  removeItem,
  toggleItem,
} from '../../Redux/actions';
import { filterItems } from './helpers';
import Item from '../../Components/Item';
import List from '../../Components/List';
import Title from '../../Components/Title';
import Filter from '../../Components/Filter';
import Sort from '../../Components/Sort';
import Line from '../../Components/Line';
import Form from '../../Components/Form';
import Colors from '../../Themes/Colors';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledWrapper = styled.div`
  margin: auto;
  padding: 50px;
  background: ${Colors.transparent_white};
  min-width: 400px;
  min-height: 200px;
  box-shadow: 0 3px 6px ${Colors.gray_lighter};
  opacity: 0;
  animation-name: ${appear};
  animation-duration: 600ms;
  animation-delay: 100ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const TodoList = ({
  items,
  filter,
  toggleItem,
  removeItem,
  setFilter,
  form,
  sort,
  addItem,
  setFormValue,
  setSortMethod
}) => {
  const filteredItems = filterItems(items, filter, sort);

  const listItems = filteredItems.map((item, index) => (
    <Item
      index={index}
      key={item.id}
      label={item.label}
      completed={item.completed}
      toggleItem={toggleItem}
      removeItem={removeItem}
    />
  ));

  return (
    <StyledWrapper>
      <Filter
        filter={filter.terms}
        onChange={setFilter}
      />
      <Title>
        Grocery List
      </Title>
      <Line />
      <Sort setSort={setSortMethod} />
      <List>
        {listItems}
      </List>
      <Form
        value={form}
        onChange={setFormValue}
        addItem={addItem}
      />
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  sort: state.sort,
  filter: state.filter,
  newItem: state.newItem,
  items: state.items,
});

const mapDispatchToProps = ({
  setFilter,
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
