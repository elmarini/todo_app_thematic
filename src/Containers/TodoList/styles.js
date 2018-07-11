import styled, { keyframes } from 'styled-components';
import Colors from '../../Themes/Colors';

export const appear = keyframes`
  0% {
    opacity: 0;
    min-height: 0px;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    min-height: 256px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 50px;
  background: ${Colors.transparent_white};
  min-width: 400px;
  //min-height: 200px;
  box-shadow: 0 3px 6px ${Colors.gray_lighter};

`;

export const Content = styled.div`
  overflow: hidden;
  height: 0;
  animation-name: ${appear};
  animation-duration: 1800ms;
  animation-delay: 200ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
