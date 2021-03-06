import styled from 'styled-components';
import Colors from '../../Themes/Colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 15px;
`;

export const Label = styled.span`
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: ${Colors.blue};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${Colors.red};
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
    color: ${Colors.red_darker};
  }
`;
