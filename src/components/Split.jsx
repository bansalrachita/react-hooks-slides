import React from "react";
import styled from "styled-components";

const Root = styled.div([], {
  width: "100vw",
  height: "100vh",
});

const Half = styled.div`
  flex: 1;
  width: 100%;
`;

const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flexdirection: column;
`;

const Split = ({ children, align }) => {
  const granChildren = React.Children.toArray(children.props.children);

  return (
    <Root>
      <Flex align={align}>
        {granChildren.map((child) => (
          <Half key={child} align={align}>
            {child}
          </Half>
        ))}
      </Flex>
    </Root>
  );
};

export default Split;
