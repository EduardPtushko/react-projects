import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    > img {
        width: 140px;
        height: 140px;
        border-radius: 100%;
        object-fit: cover;

        box-shadow: 5px -5px 0px 3px var(--clr-primary-5);
    }

    position: relative;
    margin-bottom: 0.5rem;

    ::before {
        content: open-quote;
        color: white;
        font-size: 2rem;
        text-align: center;
        line-height: 1.4;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: var(--clr-primary-5);
        position: absolute;
        top: 10;
    }
`;
