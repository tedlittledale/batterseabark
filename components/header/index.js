import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 50px;
`;

const Header = () => (
  <Wrap>
    <h1>Battersea Bark</h1>
    <h3>Woof!</h3>
  </Wrap>
);

export default Header;
