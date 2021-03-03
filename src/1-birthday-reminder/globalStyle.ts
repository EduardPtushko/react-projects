import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    
    :root {
        --clr-primary-1: hsl(162, 61%, 89%);
        --clr-primary-2: hsl(162, 60%, 78%);
        --clr-primary-3: hsl(162, 61%, 67%);
        --clr-primary-4: hsl(162, 61%, 57%);
        --clr-primary-5: hsl(162, 73%, 46%);
        --clr-primary-6: #1aa179;
        --clr-primary-7: #13795b;
        --clr-primary-8: #0d503c;
        --clr-primary-9: #06281e;
        --clr-grey-1: hsl(212, 33%, 89%);
        --clr-grey-2: hsl(210, 31%, 80%);
        --clr-grey-3: hsl(211, 27%, 70%);
        --clr-grey-4: hsl(209, 23%, 60%);
        --clr-grey-5: hsl(210, 22%, 49%);
        --clr-grey-6: hsl(209, 28%, 39%);
        --clr-grey-7: hsl(209, 34%, 30%);
        --clr-grey-8: hsl(211, 39%, 23%);
        --clr-grey-9: hsl(209, 61%, 16%);
        --clr-white: #fff;
        --clr-red-dark: hsl(360, 67%, 44%);
        --clr-red-light: hsl(360, 71%, 66%);
        --clr-green-dark: hsl(125, 67%, 44%);
        --clr-green-light: hsl(125, 71%, 66%);
        --clr-black: #222;
        --transition: all 0.3s linear;
        --spacing: 0.1rem;
        --radius: 0.25rem;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        --max-width: 1170px;
        --fixed-width: 450px;
        --clr-pink: #f28ab2;
    }

    html {
        box-sizing: border-box;
    }
    
    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: var(--clr-pink);
        line-height: 1.5;
        color: var(--clr-grey-9);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    
`;
