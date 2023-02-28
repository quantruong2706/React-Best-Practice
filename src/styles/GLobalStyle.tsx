import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Set core root font size */
  :root {
    font-size: 16px;
  }

  /* Remove default padding */
  body {
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  /* Set line-height */
  body {
    line-height: 1.5;
  }

  /* Set font faces */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/OpenSans-Regular.woff2') format('woff2'),
         url('../fonts/OpenSans-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: url('../fonts/OpenSans-Italic.woff2') format('woff2'),
         url('../fonts/OpenSans-Italic.woff') format('woff');
  }

  /* Typography */
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  /* Links */
  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  /* Buttons */
  .button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .button:hover {
    background-color: #0062cc;
  }
`;

export default GlobalStyle;
