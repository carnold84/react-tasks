import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eeeeee;
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ContentLeft = styled.div`
  background-color: #dddddd;
  flex-shrink: 0;
  max-width: 300px;
  width: 30%;
`;

export const ContentRight = styled.div`
  background-color: #cccccc;
  display: flex;
  flex-grow: 1;
`;
