import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const Footer = styled.footer`
  font-size: 24px;
  padding: 5px 100px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #af4ca7;
  margin-bottom: 75px;
  width: 100%;
  color: #af4ca7;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <p>Rachita Bansal</p>
      <p>@bansalrachita</p>
    </Footer>
  </Fragment>
);

export default Layout;
