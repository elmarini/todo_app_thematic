import styled from 'styled-components';
import Colors from '../../Themes/Colors';

const Title = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid ${Colors.gray_lighter};
  width: 100%;
  margin: 0 0 5px;
`;

export default Title;
