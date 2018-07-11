import styled, { keyframes } from 'styled-components';
import Colors from '../../Themes/Colors';

export const appear = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    height: 256px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 50px;
  background: ${Colors.transparent_white};
  min-width: 400px;
  box-shadow: 0 3px 6px ${Colors.gray_lighter};

`;

export const Content = styled.div`
  overflow: hidden;
  animation-name: ${appear};
  animation-duration: 1800ms;
  animation-timing-function: ease-out;
  animation-fill-mode: backwards;
`;
