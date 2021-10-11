import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.text.color200};
  display: flex;
  fill: ${({ theme }) => theme.colors.text.color300};
  height: 28px;
`;
