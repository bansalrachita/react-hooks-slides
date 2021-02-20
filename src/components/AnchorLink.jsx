import styled, { css } from "styled-components";

export const AnchorLink = styled.a`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  justify-content: space-between;

  ${({ size }) => {
    return size === "medium"
      ? css`
          font-size: 22px;
        `
      : ``;
  }}

  ${({ widthSize }) => {
    return widthSize === "large"
      ? css`
          width: 280px;
        `
      : ``;
  }}
`;
