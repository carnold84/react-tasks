import { Box } from 'react-library';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ActionBar = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 30px 30px;
`;

export const IconButton = styled(Box).attrs({
  forwardedAs: 'button',
})`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  fill: ${({ theme }) => theme.colors.text.color300};

  &:hover {
    fill: ${({ theme }) => theme.colors.text.color200};
  }
`;
