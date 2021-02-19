import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  ${(props) =>
    css`
      grid-template-columns: repeat(${props.columns}, 1fr);
      row-gap: 5px;
      column-gap: 1em;
    `}
`;
