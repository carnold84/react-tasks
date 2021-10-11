import styled from 'styled-components';
import { Typography } from 'react-library';

export const Wrapper = styled(Typography)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.color600};
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.color500};
    outline: none;
  }
`;
