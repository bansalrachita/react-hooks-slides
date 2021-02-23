import React from "react";
import { useDeck } from "mdx-deck";

import styled from "styled-components";

export const PageNumberSpan = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fefefe;
  border-radius: 50%;
  background: #011627;
  padding: 0px 7px;
  font-size: 21px;
  margin: 0 5px 5px 0;
`;

export const PageNumber = () => {
  const state = useDeck();

  const currentSlide = state?.index + 1; // slides are zero-index
  return (
    <>
      <PageNumberSpan>{currentSlide}</PageNumberSpan>
    </>
  );
};
