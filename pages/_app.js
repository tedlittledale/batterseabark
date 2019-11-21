import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin:0;
    }
    html{
       
        
        font-size: 12px; /*sets the value for 1rem (--base-font-size)*/
    
        --base-font-size: 1rem;
        --scale: 1.25;

        --p-size: var(--base-font-size);
        --h6-size: calc(var(--base-font-size) * var(--scale));
        --h5-size: calc(var(--h6-size) * var(--scale));
        --h4-size: calc(var(--h5-size) * var(--scale));
        --h3-size: calc(var(--h4-size) * var(--scale));
        --h2-size: calc(var(--h3-size) * var(--scale));
        --h1-size: calc(var(--h2-size) * var(--scale));
    

@media (min-width: 900px){ 
   
        --base-font-size: 1.25rem;
    --scale: 1.33;
    
}
    }
    
    body,
    p, 
    ul,
    ol {
    font-size: var(--p-size);
    line-height: 1.5;
    font-family: Helvetica;
    }

    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
        font-weight: bold;
        margin: var(--base-font-size) 0;
        font-family: Helvetica;
    }

    h6 {
        font-size: var(--h6-size);
    }

    h5 {
        font-size: var(--h5-size);
    }

    h4 {
        font-size: var(--h4-size);
    }

    h3 {
        font-size: var(--h3-size);
    }

    h2 {
        font-size: var(--h2-size);
    }

    h1 {
        font-size: var(--h1-size);
    }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
