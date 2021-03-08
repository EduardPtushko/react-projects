import styled from 'styled-components';

export const Block = styled.div`
    background-color: var(--clr-white);
    box-shadow: var(--light-shadow);
    margin: 2rem;
    border-radius: var(--radius);
    padding: 1.5rem 2rem;

    :hover {
        box-shadow: var(--dark-shadow);
    }
`;

export const ButtonLeft = styled.button`
    width: 20px;
    height: 20px;
    border: 0;
    background-color: inherit;
    color: var(--clr-primary-5);
    margin-right: 0.5rem;
    cursor: pointer;
`;

export const ButtonRight = styled.button`
    width: 20px;
    height: 20px;
    border: 0;
    background-color: inherit;
    color: var(--clr-primary-5);
    margin-left: 0.5rem;
    cursor: pointer;
`;

export const Button = styled.button`
    border: 0;
    background-color: var(--clr-primary-10);
    color: var(--clr-primary-4);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
`;

export const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const Icons = styled.div`
    margin-bottom: 0.5rem;
`;
