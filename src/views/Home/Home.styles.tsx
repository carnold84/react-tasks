import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ContentLeft = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.color300};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 300px;
  width: 30%;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  width: 100%;
`;
