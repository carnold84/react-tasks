import { IconButton as Button } from 'react-library';
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
  padding: 0 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 50px 50px;
`;

export const IconButton = styled(Button)`
  fill: ${({ theme }) => theme.colors.text.color300};
`;
