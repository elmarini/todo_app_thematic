import { compose } from 'redux'
import { connect } from 'react-redux';
import {
  setFormValue,
  setSortMethod,
  addItem,
  removeItem,
  toggleItem,
} from '../../Redux/actions';
import { toJS } from '../../Components/toJS';

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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  toJS
)
