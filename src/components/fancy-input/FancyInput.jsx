import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px 0;
  background: ${(props) => (!props.focussed ? "#fff" : "#00bcd4")};
`;

// `useImperative` hook is meant to use alongside `forwardRef`.
// It allows for customizing the `ref` exposed to the parent component.
// This can be used in places when only a few properties of the instance
// need to be exposed to the parent and/or for manipulating instance
const FancyInput = React.forwardRef(({ children, ...rest }, ref) => {
  const [focussed, setFocussed] = useState(false);
  const inputRef = useRef();

  // Runs only once.
  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          // updates the background color on focus
          setFocussed(true);
          inputRef.current.focus();
        },
        blur: () => {
          setFocussed(false);
          inputRef.current.blur();
        },
      };
    },
    []
  );

  return (
    <Input {...rest} ref={inputRef} focussed={focussed}>
      {children}
    </Input>
  );
});

FancyInput.displayName = "FancyInput";

export default FancyInput;
