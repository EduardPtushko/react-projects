import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    max-width: var(--fixed-width);
    margin: 3rem auto;
    background-color: var(--clr-white);
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dark-shadow);
`;

export const Button = styled.button`
    border-radius: var(--radius);
    border: 0;
    padding: 0.75rem 0;
    background-color: var(--clr-pink);
    color: var(--clr-white);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    outline: 0;

    :hover,
    :focus {
        background-color: ${darken(0.05, '#f28ab2')};
    }
`;

export const Heading = styled.h3`
    margin: 0 0 0.5rem;
    font-size: 2rem;
    font-weight: 500;
`;
