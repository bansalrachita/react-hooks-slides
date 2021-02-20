import styled, { css } from "styled-components";

export const UnOrderedList = styled.ul`
  font-size: 20px;
  ${({ listStyle }) => {
    return listStyle === "none"
      ? css`
          list-style: none;
        `
      : ``;
  }}
`;

export const ListItem = styled.li``;
