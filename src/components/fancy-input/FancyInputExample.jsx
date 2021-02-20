import React from "react";
import FancyInput from "./FancyInput";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 5px;
`;

export const FancyInputExample = () => {
  const buttonRef = React.createRef();

  const onClick = () => {
    buttonRef.current.focus();
  };
  const onClickBlur = () => {
    buttonRef.current.blur();
  };

  return (
    <>
      <FancyInput ref={buttonRef}></FancyInput>
      <div>
        <Button onClick={onClick}>Focus me</Button>
        <Button onClick={onClickBlur}>Blur me</Button>
      </div>
    </>
  );
};
