import styled from 'styled-components';

export const Article = styled.article`
    box-shadow: var(--dark-shadow);
    margin-bottom: 2rem;
    background-color: var(--clr-white);
    border-radius: 0.5rem;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
        height: 350px;
    }

    & > div {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }
`;

export const Button = styled.button`
    border: 1px solid var(--clr-red-light);
    margin-top: 1rem;
    cursor: pointer;
    padding: 0.25rem 2rem;
    border-radius: 2px;
    color: var(--clr-red-light);
    align-self: center;
    background-color: transparent;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const Badge = styled.span`
    color: var(--clr-primary-4);
    background-color: var(--clr-primary-10);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    letter-spacing: var(--spacing);
`;
