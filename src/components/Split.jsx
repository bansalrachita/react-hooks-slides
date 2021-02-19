import React from "react";
import styled from "styled-components";
import { Box, Flex } from "theme-ui";

const Root = styled.div([], {
  width: "100vw",
  height: "100vh",
});

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }
`;

const Split = ({ children }) => {
  const granChildren = React.Children.toArray(children.props.children);
  const times = granChildren.length;

  return (
    <Root>
      <Flex
        css={{
          alignItems: "center",
          height: "100%",
        }}
      >
        {granChildren.map((child) => (
          <Half key={child} width={1 / times}>
            {child}
          </Half>
        ))}
      </Flex>
    </Root>
  );
};

export default Split;
