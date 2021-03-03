import React from 'react';
import { Data } from '../data';
import {
    ListContainer,
    ListItem,
    ListImage,
    ListHeading,
    ListAge,
} from './style';

interface ListProps {
    data: Data;
}

export const List: React.FC<ListProps> = ({ data }) => {
    const renderItems = () =>
        data.map((item) => (
            <ListItem key={item.id}>
                <ListImage src={item.image} alt='Image' />
                <ListHeading>{item.name}</ListHeading>
                <ListAge>{item.age} years</ListAge>
            </ListItem>
        ));

    return <ListContainer>{renderItems()}</ListContainer>;
};
