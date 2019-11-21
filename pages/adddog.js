import React, { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
import styled from "styled-components";

const LoginBox = styled.div`
  padding: 50px;
`;

const AddDog = ({ all }) => {
  console.log({ all });
  const logIn = () => {
    console.log({ netlifyIdentity });
    netlifyIdentity.open(); // open the modal
  };
  useEffect(() => {
    netlifyIdentity.init({
      container: "#netlify-modal" // defaults to document.body,
    });
    console.log(netlifyIdentity.currentUser());
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
      const currentUser = netlifyIdentity.currentUser();

      console.log({ currentUser });
    }
  }, []);
  return (
    <div>
      <LoginBox>
        <button onClick={logIn}>Login in / Register</button>
      </LoginBox>
      <div id="netlify-modal"></div>
    </div>
  );
};

AddDog.getInitialProps = async all => {
  return {
    all: "test"
  };
};

export default AddDog;
