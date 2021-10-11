import styled from 'styled-components';

export const IconButton = styled.button`
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
