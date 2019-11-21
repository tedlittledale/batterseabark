import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 50px;
  background: url("/assets/images/cyan-diagonal-bg.svg");
  background-size: 100% 100%;
  color: white;
`;

const Header = () => {
  return (
    <Wrap>
      <h1>Battersea Bark</h1>
      <h3>Woof!</h3>
    </Wrap>
  );
};

export default Header;
