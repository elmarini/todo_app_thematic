import styled from 'styled-components';
import Colors from '../../Themes/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0 10px;
`;

export const Button = styled.button`
  color: ${Colors.gray};
  background: transparent;
  outline: none;
  border: none;
  font-size: 13px;
  margin: 0 0 5px 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline
  }

  &:active {
    color: ${Colors.blue};
  }

  ${props => props.active && `
    color: ${Colors.blue}
  `};
`;

export const Caption = styled.p`
  color: ${Colors.gray};
  font-size: 13px;
  margin: 0 auto 0 0;
  font-weight: bold;
`;
