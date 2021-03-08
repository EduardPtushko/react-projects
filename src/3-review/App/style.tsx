import styled from 'styled-components';

export const Container = styled.section`
    max-width: var(--max-width);
    margin: 2rem auto 0;
`;

export const Header = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

export const Heading = styled.h2`
    font-size: 2rem;
    margin-bottom: 0.3rem;
`;
export const Underline = styled.div`
    width: 80px;
    height: 4px;
    background-color: var(--clr-primary-5);
`;
