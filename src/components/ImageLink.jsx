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
  margin: 0 10px;
`;
