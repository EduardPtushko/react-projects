import styled from 'styled-components';

export const Container = styled.main`
    width: 90vw;
    max-width: var(--fixed-width);
    margin: 5rem auto;
`;

export const Title = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const Heading = styled.h2`
    font-size: 2rem;
    letter-spacing: var(--spacing);
`;

export const Underline = styled.div`
    width: 100px;
    height: 4px;
    background-color: var(--clr-primary-5);
    margin: 0.5rem auto 0;
`;
