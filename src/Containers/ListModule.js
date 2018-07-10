import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Redux/actions/'
import styled, { keyframes } from 'styled-components';
import Item from '../Components/Item';
import List from '../Components/List';
import Title from '../Components/Title';
import Filter from '../Components/Filter';
import Form from '../Components/Form';
import Colors from '../Themes/Colors'

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const StyledWrapper = styled.div`
  margin: auto;
  padding: 50px;
  background: ${Colors.transparent_white};
  width: 600px;
  min-height: 200px;
  box-shadow: 0 3px 6px ${Colors.gray_lighter};
  opacity: 0;
  animation-name: ${appear};
  animation-duration: 600ms;
  animation-delay: 100ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;



class ListModule extends React.Component {
 render() {
    const filtered = this.props.items.filter((item) => (
      item.label
        .toLowerCase()
        .includes(this.props.filter.toLowerCase())
    ))

    const listItems = filtered.map((item, index) => (
      <Item
        index={index}
        key={item.label + index}
        label={item.label}
        completed={item.completed}
        toggleItem={this.props.toggleItem}
        removeItem={this.props.removeItem}
      />
    ))

    return (
        <StyledWrapper>
          <Title>Grocery List</Title>
          <Filter
            filter={this.props.filter}
            onChange={this.props.setFilter}
          />
          <List>
            {listItems}
          </List>
          <Form
            value={this.props.form}
            onChange={this.props.setFormValue}
            addItem={this.props.addItem}
          />
        </StyledWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  filter: state.filter,
  newItemLabel: state.newItemLabel
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(Actions.setFilter(filter)),
  setFormValue: (value) => dispatch(Actions.setFormValue(value)),
  addItem: (label) => dispatch(Actions.addItem(label)),
  removeItem: (index) => dispatch(Actions.removeItem(index)),
  toggleItem: (index) => dispatch(Actions.toggleItem(index))
})

const mergeProps = (state, dispatch) => ({
  ...state,
  ...dispatch,
  addItem: () => dispatch.addItem(state.newItemLabel)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ListModule);
