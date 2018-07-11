import styled from 'styled-components';
import Colors from '../Themes/Colors';

const Line = styled.div`
  background: transparent;
  border: none;
  height: 2px;
  border-bottom: 1px solid ${Colors.gray_lighter};
  width: 100%;
  margin: 0 0 5px;
`;

export default Line;
