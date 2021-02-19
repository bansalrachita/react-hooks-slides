import styled, { css } from "styled-components";

const Image = styled.img`
  ${(props) =>
    css`
      width: ${props.width ?? "100px"};
    `};
  ${(props) =>
    css`
      height: ${props.height ?? "100px"};
    `};
  ${({ shape }) =>
    shape === "round"
      ? css`
      border-radius: 45%";
    `
      : css`
          border-radius: 3px;
        `};
  position: relative;

  
  }};
`;

export default Image;
