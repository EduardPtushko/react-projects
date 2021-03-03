import { lighten, opacify } from 'polished';
import styled from 'styled-components';

export const ListContainer = styled.ul`
    padding-left: 0;
    margin-bottom: 0;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1.5rem;
`;

export const ListImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
    grid-column: 1 / 2;
    grid-row: 1/3;
    box-shadow: var(--light-shadow);
`;

export const ListHeading = styled.h4`
    align-self: flex-end;
    margin: 0;
    padding: 0;
    grid-column: 2/3;
    grid-row: 1/2;
`;

export const ListAge = styled.p`
    align-self: flex-start;
    padding: 0;
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    color: var(--clr-grey-5);
`;
