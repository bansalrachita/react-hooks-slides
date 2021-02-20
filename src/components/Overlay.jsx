import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  border: 1px solid;
  grid-auto-rows: 200px;
  ${(props) =>
    css`
      grid-template-columns: repeat(${props.columns}, 1fr);
      row-gap: 5px;
      column-gap: 1em;
    `}
`;
