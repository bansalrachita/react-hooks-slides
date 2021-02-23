import styled, { css } from "styled-components";

export const ImageLink = styled.img`
  ${(props) =>
    css`
      width: ${props.width ?? "100px"};
    `};
  ${(props) =>
    css`
      height: ${props.height ?? "100px"};
    `};
  ${(props) =>
    css`
      border-radius: ${props.shape === "round" ? "45%" : "3px"};
    `};
  ${({ right }) =>
    right &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `};
  margin: 0 10px;
`;
