import styled from "styled-components";

const Image = styled.image`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100%"};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export default Image;
