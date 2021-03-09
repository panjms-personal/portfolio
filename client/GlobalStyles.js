import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
    font-weight: 400;
    font-size: 16px;
    overscroll-behavior: none;
  }

  .dropdown-closed {
    left: -100%;
  }

  .dropdown-open {
    left: 0;
    backdrop-filter: blur(5px);
  }

  @media only screen and (min-width: 753px){
    .dropdown-closed {
    left: -40%;
  }

  .dropdown-open {
    left: 0;
    backdrop-filter: blur(5px);
  }
  }

  @media only screen and (min-width: 960px) {
    .dropdown-closed {
    left: -40%;
  }

    .dropdown-open {
      left: 0;
          backdrop-filter: blur(5px);
    }
  }

  .dropdown-closed-right {
    left: 100%;
  }

  .dropdown-open-right {
    left: 0;
        backdrop-filter: blur(5px);
  }

  @media only screen and (min-width: 674px) {
  .dropdown-closed-right {
    left: 100%;
  }

  .dropdown-open-right {
    left: 70%;
    backdrop-filter: blur(5px);
  }
  }

  @media only screen and (max-width: 959px){
  }


@media only screen and (min-width: 500px){

}

@media only screen and (min-width: 960px) {
}
`;

export default GlobalStyle;
